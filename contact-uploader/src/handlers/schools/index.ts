import axios from "axios";
import parse from "csv-parse";
import * as fs from "fs";

import ContactUploader from "../ContactUploader";
import CSVParser from "../CSVParser";

export default class SchoolsHandler {
    private schools:    SchoolContact[];
    private uploader:   ContactUploader;
    private parser:     CSVParser;
    private file:       string;

    constructor(config: ContactUploaderConfig) {
        this.file = fs.readFileSync("schools.csv", {
            encoding: "utf-8",
        });

        this.uploader = new ContactUploader(
            config, 
            "school",
            searchQuery
        );
        
        this.parser = new CSVParser(this.file, this.process);
    }

    public async parse() {
        this.schools = await this.parser.parse();
    }

    public async post() {
        this.uploader.post(this.schools);
    }

    private process(data: string[][]): SchoolContact[] {
        return data.slice(1)
            .reduce(reduceSchools, [])
            .filter(filterSchools)
            // .slice(0, 1)
            .map(parseSchools);
    }
}

function searchQuery(record: PersonnelRecord): string {
    return `${this.mainRoute}?per_page=50&search=${record.title}`;
}

function reduceSchools(schoolList: string[][][], nextLine: string[]): string[][][] {
    if (!Array.isArray(schoolList[0])) {
        return [[nextLine]];
    } else if(nextLine[0].match("\\d")) {
        return [...schoolList, [nextLine]];
    } else {
        let lastSchool = schoolList.pop();
        if (lastSchool) {
            lastSchool.push(nextLine);
            return [...schoolList, lastSchool];
        }
    }
    return schoolList;
}

function filterSchools(school: string[][]) {
    return true;
}

function parseSchools(school: string[][]): SchoolContact {
    const long_name = school[0][1];
    const short_name = school[1][0];
    const address = [school[1][1], school[2][1], school[3][1]].join("\r\n");
    const fax = school[0][5];
    const telephone = school[0][3];

    const admin_staff = school.map((row) => ({
        name: row[2],
        telephone: [row[3], row[4]]
                    .filter(n => n.trim().length > 0)
                    .map(formatTel)
                    .join(", "),
        email: row[7]
    }))
        .filter(({name}) => name.length > 0)
        .map(({name, telephone, email}) => {
            return [name, 
            telephone.trim().length > 0 ? `Tel: ${telephone}` : null, 
            email.trim().length >0 ? `Email: ${email}` : null].filter(str => str).join("\r\n");
        })
        .join("\r\n\r\n");

    return {
        title: long_name,
        status: "publish",
        fields: {
            long_name,
            short_name,
            address,
            fax,
            telephone,
            admin_staff,
        },
        existingData: null,
    };
}

function formatTel(tel: string): string {
    if (tel.length > 0 && tel.match("\\d")) {
        const correctPattern = new RegExp("^\\(\\d{3}\\)\\s*\\d{3}\\-\\d{4}$");
        const fixPattern = new RegExp("(\\(\\d{3}\\))?\\s*(\\d{3})\\-([\\d\\/\\-\\s]{4,})")
        if (tel.match(correctPattern)) {
            return tel;
        } else {
            let matches = tel.match(fixPattern);
            if (matches) {
                return "(670) " + matches[2] + "-" + matches[3];
            }
        }
    }
    return "";
}
