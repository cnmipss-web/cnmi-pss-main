import * as fs from "fs";
import minimist from "minimist";

import Configuration from "./handlers/Configuration";
import Personnel from "./handlers/personnel";
import Offices from "./handlers/offices";
import Schools from "./handlers/schools";
import Headstarts from "./handlers/headstarts";

const config = new Configuration("./contactUploader.json");

main(); 

async function main() {
    if (config.all || config.personnel) await upload(Personnel);
    if (config.all || config.offices) await upload(Offices);
    if (config.all || config.schools) await upload(Schools);
    if (config.all || config.headstarts) await upload(Headstarts);
}

/**
 * Create a new instance of cls and use it to parse and post contact 
 * information to the WordPress site.
 * 
 * @param {*} cls 
 */
async function upload(Cls: any) {
    const records = new Cls(config);
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
