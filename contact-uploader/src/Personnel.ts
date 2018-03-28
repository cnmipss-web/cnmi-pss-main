import axios from "axios";
import parse from "csv-parse";
import * as fs from "fs";
import { isEmail } from "validator";

import { getToken } from "./WordPress";

const FILE = Symbol("Personnel File");
const PERSONNEL = Symbol("Valid personnel records");
const WP_CONFIG = Symbol("WordPress Client");
const MAIN_ROUTE = Symbol("Personnel API Route");
const ACF_ROUTE = Symbol("Advanced Custom Field Route");
const AUTH_TOKEN = Symbol("JWT for WP API");
const PROTOCOL = Symbol("HTTP vs HTTPS");

export default class PersonnelHandler {
    private [FILE]: string;
    private [PERSONNEL]: PersonnelRecord[];
    private [WP_CONFIG]: ContactUploaderConfig;
    private [MAIN_ROUTE]: string;
    private [ACF_ROUTE]: string;
    private [AUTH_TOKEN]: string;
    private [PROTOCOL]: string;

    constructor(config: ContactUploaderConfig) {
        this[FILE] = fs.readFileSync("personnel.csv", {
            encoding: "utf-8",
        });
        this[WP_CONFIG] = config;
        this[PROTOCOL] = config.secure ? "https://" : "http://";
        this[MAIN_ROUTE] = `${this[PROTOCOL]}${config.host}/wp-json/wp/v2/contact_info/`;
        this[ACF_ROUTE] = `${this[PROTOCOL]}${config.host}/wp-json/acf/v3/contact_info/`;
    }

/**
 * Parse 'personnel.csv' and create a list of personnel records defined there
 * storing them in a private member variable.
 *
 * @memberof PersonnelHandler
 */
    public async parse() {
        const file: string = this[FILE];
        const data: any = await new Promise((resolve, reject) => {
            parse(file, {}, (err, out: any[]) => {
                if (err) { reject(err); }
                resolve(out);
            });
        });

        this[PERSONNEL] = await data.reduce(reducePersonnel, [])
            .map(filterRows)
            .map(parseRows)
            .reduce((
                list: PersonnelRecord[],
                officePersonnel: PersonnelRecord[],
            ) =>
                ([...list, ...officePersonnel]), []);
    }

/**
 * POST data read from personnel.csv to WP server defined by
 * contactUploader.json
 *
 * @memberof PersonnelHandler
 */
    public async post() {
        this[AUTH_TOKEN] = await getToken(this[WP_CONFIG]);
        const personnel: PersonnelRecord[] = [];
        for (const person of this[PERSONNEL]) {
            console.info(`Searching for pre-existing ${person.fields.email}`);
            const newPerson = await searchWP.call(this, person);
            personnel.push(newPerson);
        }

        for (const person of personnel) {
            if (person.title.trim().length > 0) {
                await postData.call(this, person);
            }
        }
    }
}
/**
 * Transmit a PersonnelRecord to the WP server to save it.
 *
 * @param {Promise<PersonnelRecord>} entry
 */
async function postData(entry: Promise<PersonnelRecord>) {
    const { existingData, ...data } = await entry;
    const authToken = this[AUTH_TOKEN].token;
    const dataString = JSON.stringify(data);
    const config = {
        headers: {
            "Authorization": `Bearer ${authToken}`,
            "Content-Type": "application/json",
        },
    };

    if (existingData) {
        console.log("Updating pre-existing record", data.title, existingData.id);
    } else {
        console.log(`Posting data for ${data.title}`);
    }

    const mainRoute = existingData ? this[MAIN_ROUTE] + existingData.id : this[MAIN_ROUTE];

    await axios.post(mainRoute, dataString, config)
        .catch((err) => console.error("Error posting data to WP", mainRoute, data.title, "\n", err));
}

/**
 * Search for existing WP Contact Info posts based on email address.
 *
 * @param {PersonnelRecord} personnelRecord
 * @returns
 */
async function searchWP(personnelRecord: PersonnelRecord) {
    const queryRoute = `${this[MAIN_ROUTE]}?per_page=50&search=${personnelRecord.fields.email}`;

    const searchResults = await axios.get(queryRoute);

    const searchResult: WPPersonnelRecord | null = searchResults
        .data
        .filter((res) => res.type === "contact_info")[0];

    return {
        ...personnelRecord,
        existingData: searchResult,
    };
}

/**
 * Group personnel records from a single office into an array of records
 * forming an array of arrays (each top-level element represents a single
 * office)
 *
 * @param {any[]} personnelList
 * @param {string[]} nextLine
 * @returns
 */
function reducePersonnel(personnelList: string[][][], nextLine: string[]) {
    if (nextLine[1] === "PHONE") {
        personnelList.push([nextLine]);
        return personnelList;
    }

    const currentBuilding = personnelList.pop();
    if (currentBuilding) {
        currentBuilding.push(nextLine);
        personnelList.push(currentBuilding);
    }
    return personnelList;
}

/**
 * Keep only rows that define an office or that have a valid contact email
 *
 * @param {string[][]} officePersonnel
 * @returns
 */
function filterRows(officePersonnel: string[][]): OfficePersonnel {
    const office = officePersonnel[0];
    const personnel = officePersonnel.slice(1);
    return {
        office,
        personnel: personnel.filter((person) => isEmail(person[5])),
    };
}

/**
 * Convert rows from personnel.csv grouped by office to PersonnelRecord
 * objects grouped by office.
 *
 * @param {OfficePersonnel} officePersonnel
 * @returns {PersonnelRecord[]}
 */
function parseRows(officePersonnel: OfficePersonnel): PersonnelRecord[] {
    const { office, personnel } = officePersonnel;
    return personnel.map((person: RawPersonnelRecord): PersonnelRecord => {
        const address = `${office[0]}\nPO Box 501370 CK\nSaipan MP, 96950`;

        let name = "";
        let jobTitle;
        const splitName = person[0].split(", ");
        if (splitName.length > 1) {
            name = person[0].split(", ")
                .slice(0, -1)
                .join(", ");
            jobTitle = person[0].split(", ")
                .slice(-1);
        } else {
            [name] = person;
            jobTitle = [""];
        }

        const telephone = person.slice(1, 4)
            .filter((s) => s.trim().length > 0)
            .join(", ");
        const fax = person[4];
        const email = person[5];

        return {
            existingData: null,
            fields: {
                address,
                email,
                fax,
                job_title: jobTitle
                    .join(",")
                    .trim(),
                name,
                telephone,
            },
            status: "publish",
            title: name,
        };
    });
}
