import parse from "csv-parse";

export default class CSVParser {
    private file: string;
    private process: (data: string[][]) => AbstractRecord[]

    constructor(file, process) {
        this.file = file;
        this.process = process;
    }

    public async parse(): Promise<AbstractRecord[]> {
        return this.process(await this.parseCSVFile());
    }

    private async parseCSVFile() {
        return new Promise<string[][]>(
            (resolve, reject) => {
                parse(this.file, {}, (err: Error, out: string[][]) => {
                    if (err) reject(err);
                    resolve(out);
                })
            }
        )
    }
}