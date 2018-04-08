import * as fs from "fs";
import { ArgumentParser } from "argparse";

export default class Configuration {
    private packageConfig;
    private jsonConfig:     ContactUploaderConfig;
    private argParser;

    public host:        string;
    public username:    string;
    public password:    string;
    public secure:      boolean;
    public all:         boolean;
    public personnel:   boolean;
    public offices:     boolean; 
    public schools:     boolean;
    public headstarts:  boolean;
    public test:        boolean;
    public download:    boolean;

    constructor(file: string) {
        Object.defineProperties(this, {
            packageConfig: {
                value: require("../../package.json"),
                enumerable: false,
                writable: false,
            },
            jsonConfig: {
                value: JSON.parse(
                    fs.readFileSync(file, {encoding: 'utf-8'})
                ),
                enumerable: false,
                writable: false,
            },
            argParser: {
                enumerable: false,
                writable: true,
            }
        });

        Object.assign(this, this.jsonConfig, this.parseArgs());
        this.validateSettings();
    }

    private validateSettings() {
        if (!(this.all || this.personnel || this.schools || this.offices || this.headstarts)) {
            console.error("No task specified.  Please specify at least one of --personnel, --offices, --schools, --headstarts, or --all.\n")
            this.argParser.printHelp();
            process.exit(1);
        }

        if (this.all && (this.personnel || this.schools || this.offices || this.headstarts)) {
            console.error("Ambiguous combination of --all and one or more other tasks.  Performing --all...\n");
        }
    }

    private parseArgs() {
        this.argParser = new ArgumentParser({
            version: this.packageConfig.version,
            addHelp: true,
            description: this.packageConfig.description,
        });

        this.argParser.addArgument(['--all'], {
            help: 'Parse and upload data from all files', 
            action: 'storeTrue',
            defaultValue: false
        });
        this.argParser.addArgument(['--personnel'], {
            help: 'Parse and upload data from personnel.csv',
            action: 'storeTrue',
            defaultValue: false
        });
        this.argParser.addArgument(['--offices'], {
            help: 'Parse and upload data from offices.csv',
            action: 'storeTrue',
            defaultValue: false
        });
        this.argParser.addArgument(['--schools'], {
            help: 'Parse and upload data from schools.csv',
            action: 'storeTrue',
            defaultValue: false
        });
        this.argParser.addArgument(['--headstarts'], {
            help: 'Parse and upload data from headstarts.csv', 
            action: 'storeTrue',
            defaultValue: false
        });

        this.argParser.addArgument(['--test'], {
            help: 'Perform a test run without uploading any data and report any errors in data that are detected.', 
            action: 'storeTrue',
            defaultValue: false
        });

        this.argParser.addArgument(['--download'], {
            help: 'Whether to download new data from Google Drive.  Requires access to user credentials.', 
            action: 'storeTrue',
            defaultValue: false
        });

        return this.argParser.parseArgs();
    }
}