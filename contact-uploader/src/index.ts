import * as fs from "fs";
import minimist from "minimist";

import Personnel from "./ContactUploader/Personnel";
import Offices from "./ContactUploader/Offices";

const CONFIG = JSON.parse(
    fs.readFileSync("contactUploader.json")
    .toString(),
) as ContactUploaderConfig;

uploadPersonnel();
uploadOffices();

// const schools = fs.readFileSync('schools.csv');
// const offices = fs.readFileSync('offices.csv');

async function uploadPersonnel() {
    const personnel = new Personnel(CONFIG);
    await personnel.parse().catch((err) => {
        console.error("Failed to parse personnel", err);
        console.log("Exiting...");
        process.exit(1);
    });
    await personnel.post().catch((err) => {
        console.error("Failed to post personnel", err);
        console.log("Exiting...");
        process.exit(1);
    });
}

async function uploadOffices() {
    const offices = new Offices(CONFIG);
    await offices.parse().catch((err) => {
        console.error("Failed to parse offices", err);
        console.log("Exiting...");
        process.exit(1);
    });
    await offices.post().catch((err) => {
        console.error("Failed to post offices", err);
        console.log("Exiting...");
        process.exit(1);
    });
}
