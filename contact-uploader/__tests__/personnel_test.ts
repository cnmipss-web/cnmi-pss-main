import * as fs from "fs";

import sinon from "sinon";

import Personnel from "../src/handlers/personnel";

jest.mock("fs");

const CONFIG = require("./data/test_config.json");

describe("Personnel Contact Information Handler", () => {

    describe("Reading", () => {
        it("should access a file named personnel.csv in the current directory", () => {
            fs.readFileSync.mockReturnValue("PERSONNEL DATA");
            const personnel = new Personnel(CONFIG);

            const { calls } = fs.readFileSync.mock;

            expect(calls.length).toBe(1);
            expect(calls[0][0]).toBe("personnel.csv");
            expect(personnel.file).toBe("PERSONNEL DATA");
        });
    });

    
    describe("Parsing", () => {
        it.skip("should split contact's name and job title on last comma", () => {});
        
        it.skip("should only store contacts with a valid email address", () => {});

        it.skip("should combine multiple phone numbers into a single field", () => {});
    });
    
    describe("Posting", () => {
        it.skip("should post resulting data to the contact_info WP API route", () => {});
    });
});