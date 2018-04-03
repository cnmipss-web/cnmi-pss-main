import * as fs from "fs";

import ContactUploader from "./ContactUploader";
import CSVParser from "./CSVParser";

/**
 * Abstract base class for handling different types of contact information
 * 
 * @export
 * @abstract
 * @class Handler
 */
export default abstract class Handler {
    protected records:  AbstractRecord[]; 
    protected uploader: ContactUploader;
    protected parser:   CSVParser;
    protected file:     string;

    constructor(opts: HandlerConfig) {
        this.uploader = new ContactUploader(
            opts.uploaderConfig, 
            opts.type, 
            opts.searchQuery
        );
        this.file = fs.readFileSync(opts.filename, {
            encoding: "utf-8",
        });
        
        this.parser = new CSVParser(this.file, this.process);
    }

    /**
     * Parse a CSV File into a list of AbstractRecords
     * 
     * @memberof Handler
     */
    public async parse() {
        this.records = await this.parser.parse();
    }

    /**
     * Post AbstractRecords to WordPress using this.uploader.post
     * 
     * @memberof Handler
     */
    public async post() {
        await this.uploader.post(this.records);
    }

    /**
     * Pure function that parses the raw string data from the CSV file into an 
     * array of AbstractRecords
     * 
     * @protected
     * @abstract
     * @param {string[][]} data 
     * @returns {AbstractRecord[]} 
     * @memberof Handler
     */
    protected abstract process(data: string[][]): AbstractRecord[]
}