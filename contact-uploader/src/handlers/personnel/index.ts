import * as fs from "fs";
import { isEmail } from "validator";

import Handler from "../Handler";
import ContactUploader from "../ContactUploader";
import CSVParser from "../CSVParser";

export default class PersonnelHandler extends Handler {
    protected records:  PersonnelRecord[];

    constructor(uploaderConfig: ContactUploaderConfig) {
        super({
            uploaderConfig,
            type: "contact_info",
            searchQuery,
            filename: "personnel.csv",
        });
    }

    protected process(data: string[][]): PersonnelRecord[] {
        return data.reduce(reducePersonnel, [])
            .map(filterRows)
            .map(parseRows)
            .reduce((
                list: PersonnelRecord[],
                officePersonnel: PersonnelRecord[],
            ) =>
                ([...list, ...officePersonnel]), []);
    }

}

function searchQuery(record: PersonnelRecord): string {
    return `${this.mainRoute}?per_page=50&search=${record.fields.email}`;
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
function filterRows(officePersonnel: string[][], number: number): OfficePersonnel {
    const office = officePersonnel[0][0].toLowerCase()
        .split(" ")
        .filter((word: string) => word.length > 0)
        .map((word: string) => `${word[0].toUpperCase()}${word.slice(1)}`)
        .join(" ");
    const personnel = officePersonnel.slice(1);
    return {
        office,
        number,
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
function parseRows(officePersonnel: OfficePersonnel, rank: number): PersonnelRecord[] {
    const { office, number, personnel } = officePersonnel;
    return personnel.map((person: RawPersonnelRecord, n: number): PersonnelRecord => {
        const address = `${office}\nPO Box 501370 CK\nSaipan MP, 96950`;

        let name = "";
        let jobTitle: string;
        const splitName = person[0].split(", ");
        if (splitName.length > 1) {
            name = person[0].split(", ")
                .slice(0, -1)
                .join(", ");
            jobTitle = person[0].split(", ")
                .slice(-1)[0];
        } else {
            [name] = person;
            jobTitle = "";
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
                job_title: jobTitle.trim(),
                name,
                telephone,
                office,
                rank: `${pad(number, 3)}-${pad(n, 3)}`,
            },
            status: "publish",
            title: name,
        };
    });
}

function pad(num: number, size: number): string {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}