import axios from "axios";
import parse from "csv-parse";
import * as fs from "fs";
import { isEmail } from "validator";

import ContactUploader from "../ContactUploader";
import { getToken } from "../WordPress";

export default class Offices extends ContactUploader {
    private offices: OfficeContact[];

    constructor(config: ContactUploaderConfig) {
        super(config);
        this.file = fs.readFileSync("offices.csv", {
            encoding: "utf-8",
        });
        this.mainRoute += 'contact_info/';
        this.acfRoute += 'contact_info/';
    }

    public async parse() {
        const data: string[][] = await new Promise<string[][]>(
            (resolve, reject) => {
                parse(this.file, {}, (err: Error, out: string[][]) => {
                    if (err) { reject(err); }
                    resolve(out.slice(1));
                });
            }
        );

        this.offices = await data.filter(filterOffices)
            .map(parseOffices);
    }

    public async post() {
        this.authToken = await getToken(this.config);
        const offices: OfficeContact[] = [];
        for (const office of this.offices) {
            console.info(`Searching for pre-existing ${office.fields.name}`);
            const newOffice = await searchWP.call(this, office);
            offices.push(newOffice);
        }

        for (const office of offices) {
            await postData.call(this, office);
        }
    }
}

/**
 * Keep only offices which have a valid building number and location
 * 
 * @param {string[]} row 
 * @returns {boolean} 
 */
function filterOffices(row: string[]): boolean {
    return row[0].trim().length > 0 && row[2].trim().length > 1;
}

/**
 * Convert a record from the CSV file to an OfficeData
 * 
 * @param {string[]} office 
 * @returns {OfficeData} 
 */
function parseOffices(office: string[]): OfficeContact {
    const address = office[2].trim() == "Capitol Hill" ? `Capitol Hill Bldg #${office[0].trim()}` : office[2].trim();
    return {
        title: office[1],
        status: "publish",
        existingData: null,
        fields: {
            name: office[1],
            address,
            telephone: office[3],
            fax: office[4],
        }
    };
}

/**
 * Transmit a PersonnelRecord to the WP server to save it.
 *
 * @param {Promise<PersonnelRecord>} entry
 */
async function postData(office: Promise<OfficeContact>) {
    const { existingData, ...data } = await office;
    const authToken: string = this.authToken.token;
    const dataString = JSON.stringify(data);
    const config = {
        headers: {
            "Authorization": `Bearer ${authToken}`,
            "Content-Type": "application/json",
        },
    };

    if (existingData) {
        console.log(
            "Updating pre-existing record", 
            data.title, 
            existingData.id
        );
    } else {
        console.log(`Posting data for ${data.title}`);
    }

    const mainRoute = existingData ? this.mainRoute + existingData.id : this.mainRoute;

    await axios.post(mainRoute, dataString, config)
        .catch((err) => console.error("Error posting data to WP", mainRoute, data.title, "\n", err));
}

/**
 * Search for existing WP Contact Info posts based on email address.
 *
 * @param {PersonnelRecord} personnelRecord
 * @returns
 */
async function searchWP(officeContact: OfficeContact): Promise<OfficeContact> {
    const queryRoute = `${this.mainRoute}?per_page=50&search=${officeContact.fields.name}`;

    const searchResults = await axios.get(queryRoute);

    const searchResult: WPOfficeRecord | null = searchResults
        .data
        .filter((res) => res.type === "contact_info")[0];

    return {
        ...officeContact,
        existingData: searchResult,
    };
}