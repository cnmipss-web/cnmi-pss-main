import * as fs from "fs";

import axios from "axios";
import { google } from "googleapis";
import * as readline from "readline";
import csvStringify from "csv-stringify/lib/sync";

export default class Downloader {
    private config;
    private jwt;
    private fileId: string;
    private scopes: string[];
    private auth;
    private TOKEN_PATH: string = "credentials.json";
    private token;

    constructor(config) {
        this.config = config;
        this.fileId = "1-itdUNcrj3I6R3FkaR_sEV3ogECDbi0UkvInwdpeOjY";
        this.scopes = [
            'https://www.googleapis.com/auth/spreadsheets',
        ];

        this.jwt = this.authorize();
    }

    public async download() {
        let personnel, schools, offices, headstarts;
        if (this.config.all) {
            [personnel, schools, offices, headstarts] = await this.getAll();
        } else {
            if (this.config.personnel) 
                personnel = await this.getPersonnel();
            if (this.config.office) 
                offices = await this.getOffices();
            if (this.config.schools) 
                schools = await this.getSchools();
            if (this.config.headstarts) 
                headstarts = await this.getHeadStarts();
        }

        [
            ["personnel.csv", personnel], 
            ["schools.csv", schools], 
            ["offices.csv", offices], 
            ["headstarts.csv", headstarts]
        ].filter(([file, data]) => data !== undefined)
         .map(([file, data]) => this.writeCSV(file, data.values));
    }

    private getAll() {
        return Promise.all(
            [
                this.getPersonnel(),
                this.getSchools(),
                this.getOffices(),
                this.getHeadStarts()
            ]
        )
    }

    private async getPersonnel() {
        return this.getSheet("PSS Central Staff");
    }

    private async getSchools() {
        return this.getSheet("Schools");
    }
    
    private async getOffices() {
        return this.getSheet(encodeURIComponent("Central Office Capitol Hill Bldg \u0023\'s"));
    }

    private async getHeadStarts() {
        return this.getSheet(encodeURIComponent("Head Start\/Early Head Start Centers"));
    }

    private writeCSV(filename: string, data: string[][]) {
        let correctLength = Math.max.apply(null, data.map(row => row.length));
        let normalizedData = data.map(row => {
            let missing = correctLength - row.length;
            for (let i = 0; i < missing; i++) {
                row.push('');
            }
            return row;
        })
        fs.writeFileSync(filename, csvStringify(normalizedData, {
            quotedEmpty: true,
        }));
    }

    private async getSheet(sheetName) {
        let sheets = google.sheets('v4');
        let auth = await this.jwt;

        return new Promise((resolve, reject) => {
            sheets.spreadsheets.values.get({
                auth,
                spreadsheetId: this.fileId,
                range: sheetName,
            }, function (err, response) {
                if (err) {
                    console.log('The API returned an error: ' + err);
                } else {
                    resolve(response.data);
                }
            });
        });
    }

    private async authorize() {
        const credentials = await this.getStoredCredentials();
        let jwtClient = new google.auth.JWT({
            email: credentials.client_email,
            key: credentials.private_key,
            scopes: [
                'https://www.googleapis.com/auth/spreadsheets',
            ]
        });
        
        return new Promise((resolve, reject) => {
            jwtClient.authorize(function (err, tokens) {
                if (err) {
                    reject(err);
                } else {
                    resolve(jwtClient);
                }
            });
        });
    }

    private async getStoredCredentials() {
        let token = fs.readFileSync(this.TOKEN_PATH);
        return JSON.parse(token.toString());
    }
}