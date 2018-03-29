import * as fs from "fs";

import Handler from "../Handler";
import ContactUploader from "../ContactUploader";
import CSVParser from "../CSVParser";

export default class OfficesHandler extends Handler {
    protected records:  OfficeContact[];

    constructor(uploaderConfig: ContactUploaderConfig) {
        const config = {
            uploaderConfig,
            type: "contact_info",
            searchQuery,
            filename: "offices.csv",
        }
        super(config);
    }

    protected process(data: string[][]): OfficeContact[] {
        return data.slice(1)
            .filter(filterOffices)
            .map(parseOffices);
    }

}

function searchQuery(record: PersonnelRecord): string {
    return `${this.mainRoute}?per_page=50&search=${record.fields.name}`;
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