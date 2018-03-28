import * as fs from 'fs';
import minimist from 'minimist';

import Personnel from './Personnel';

const WP_CONFIG = JSON.parse(
    fs.readFileSync('contactUploader.json')
    .toString()
);

uploadPersonnel();

// const schools = fs.readFileSync('schools.csv');
// const offices = fs.readFileSync('offices.csv');

async function uploadPersonnel() {
    const personnel = new Personnel(WP_CONFIG);
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