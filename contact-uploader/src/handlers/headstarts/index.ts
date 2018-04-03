import axios from "axios";
import parse from "csv-parse";
import * as fs from "fs";

import Handler from "../Handler";
import ContactUploader from "../ContactUploader";
import CSVParser from "../CSVParser";

export default class HeadstartsHandler extends Handler {
    protected schools:    SchoolContact[];
    protected uploader:   ContactUploader;
    protected parser:     CSVParser;
    protected file:       string;

    constructor(uploaderConfig: ContactUploaderConfig) {
        super({
            uploaderConfig,
            type: "school",
            searchQuery,
            filename: "headstarts.csv",
        });
    }

    protected process(data: string[][]): SchoolContact[] {
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
    const coordinator = {
        name: school[1][4],
        telephone: formatTel(school[1][5]),
        email: school[1][6]
    }
    const admin_staff = school.map((row) => ({
        name: row[2],
        telephone: [row[3], row[5]]
                    .filter(n => n.trim().length > 0)
                    .map(formatTel)
                    .join(", "),
        email: row[6]
    }))
        .filter(({name}) => name.length > 0)
        .map(({name, telephone, email}) => {
            return [name, 
            telephone.trim().length > 0 ? `Tel: ${telephone}` : null, 
            email.trim().length >0 ? `Email: ${email}` : null].filter(str => str).join("\r\n");
        })
        .reduce((arr: string[], next): string[] => arr.concat([next]), coordinator.name ? [
            [coordinator.name + ", Site Coordinator",
             "Tel: " + coordinator.telephone,
             "Email: " + coordinator.email,
            ].join("\r\n")
        ] : [])
        .join("\r\n\r\n");

    return {
        title: long_name,
        status: "publish",
        level: setSchoolLevel(long_name),
        fields: {
            long_name,
            short_name: long_name,
            address: "",
            fax: "",
            telephone: "",
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

function setSchoolLevel(name: string): string[] {
    const headstartRE: any = new RegExp("Head", "i");
    const elemRE: any = new RegExp("Elem", "i");
    const middleRE: any = new RegExp("Middle", "i");
    const jrsrRE: any = new RegExp("jr", "i");
    const highRE: any = new RegExp("(High|Da'ok)", "i");

    const reList: RegExp[] = [headstartRE, elemRE, middleRE, jrsrRE, highRE];

    const mapping = {
        [headstartRE]: ["54"], 
        [elemRE]: ["51"],
        [middleRE]: ["50"],
        [jrsrRE]: ["53"],
        [highRE]: ["52"]
    };

    return reList.filter((re: RegExp) => re.test(name))
        .map((re: any) => mapping[re])[0];
    
}
