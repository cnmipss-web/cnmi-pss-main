import * as fs from "fs";
import minimist from "minimist";

import Personnel from "./handlers/personnel";
import Offices from "./handlers/offices";
import Schools from "./handlers/schools";

const CONFIG = JSON.parse(
    fs.readFileSync("contactUploader.json")
    .toString(),
) as ContactUploaderConfig;

main(); 

async function main() {
    await upload(Personnel);
    await upload(Offices);
    await upload(Schools);
}

/**
 * Create a new instance of cls and use it to parse and post contact 
 * information to the WordPress site.
 * 
 * @param {*} cls 
 */
async function upload(Cls: any) {
    const records = new Cls(CONFIG);
    await records.parse().catch((err) => {
        console.error(`Failed to parse ${Cls.name.toLowerCase()}\n`, err);
        console.log("Exiting...");
        process.exit(1);
    });
    await records.post().catch((err) => {
        console.error(`Failed to post ${Cls.name.toLowerCase()}\n`, err);
        console.log("Exiting...");
        process.exit(1);
    });
}
