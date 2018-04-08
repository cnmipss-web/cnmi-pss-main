import axios from 'axios';

let counter = 0;

/**
 * Abstract base class containing share functionality for reading, parsing, and 
 * uploading contact information to CNMI PSS WordPress site.
 * 
 * @export
 * @abstract
 * @class ContactUploader
 */
export default class ContactUploader {
    private acfRoute:     string;
    private authToken:    WPAuth;
    private config:       ContactUploaderConfig;
    private mainRoute:    string;
    private protocol:     string;
    private wpPostType:   string;
    private searchQuery:  (record: AbstractRecord) => string;
    private createWPResultsFilter: (record: AbstractRecord) => FilterFn;
    ;

    constructor(config: ContactUploaderConfig, wpPostType: string, searchQuery, filterFn?) {
        this.config = config;
        this.wpPostType = wpPostType;
        this.protocol = config.secure ? "https://" : "http://";
        this.mainRoute = `${this.protocol}${config.host}/wp-json/wp/v2/${wpPostType}/`;
        this.acfRoute = `${this.protocol}${config.host}/wp-json/acf/v3/${wpPostType}/`;
        this.searchQuery = searchQuery.bind(this);
        this.createWPResultsFilter = filterFn || (() => true);
    }

    private searchWP(
        records: any[], 
        type: string
    ): Promise<AbstractRecord>[] {
        return records.map(async (record) => {
            const queryRoute = this.searchQuery(record);
            const searchResults = await axios.get(queryRoute);
            const existingDataL = searchResults.data
                .filter((result) => result.type === type)
                .filter(this.createWPResultsFilter(record));

            if (existingDataL.length > 1) {
                console.error("Too many matches for: ", record.title);
                console.error(existingDataL.map(record => ({
                    id: record.id,
                    title: record.title.rendered,
                    slug: record.slug,
                    link: record.link,
                    type: record.type,
                    acf: record.acf,
                })));

                // Return a null record which will be filtered out and ignored.
                return null;
            }
            const existingData = existingDataL[0];
            return {
                ...record,
                existingData,
            }
        });
    }

    private async postData(record: AbstractRecord) {
        const { existingData, ...data } = await record;
        const authToken: string = this.authToken.token;
        const dataString = JSON.stringify(data);
        const config = {
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-Type": "application/json",
            },
        };
    
        if (existingData) {
            // console.log(
            //     "Updating pre-existing record", 
            //     data.title, 
            //     existingData.id
            // );
        } else {
            console.log(`Posting data for ${data.title}`);
        }
    
        const mainRoute = existingData ? this.mainRoute + existingData.id : this.mainRoute;
    
        if (!this.config.test) {
            await axios.post(mainRoute, dataString, config)
                .catch((err) => {
                    console.error("Error posting data to WP", mainRoute, data.title);
                    console.error(err.stack);
                    console.error(err.config)
                });
        } else {
            console.info("\nThis is a test.  Otherwise, would have posted: \n", mainRoute, "\n", dataString, "\n", config, "\n");
        }
    }

    /**
     * POST data read from this.file to WP server defined by
     * contactUploader.json
     * 
     * @memberof FileUploader
     */
    public async post(records: AbstractRecord[]) {
        this.authToken = await getToken(this.config);
        this.searchWP(records, this.wpPostType)
            // Use reduce rather than map to make requests one at a time
            .reduce(async (list, promisedRecord) => {
                let record = await promisedRecord;
                if (record !== null && record.title.trim().length > 0) {
                    return await this.postData(record);
                }
            }, null);
    }
}

/**
 * Use the WP REST API to fetch a JWT for authorizing future requests.
 *
 * @export
 * @param {ContactUploaderConfig} config
 * @returns {Promise<string>}
 */
async function getToken(config: ContactUploaderConfig): Promise<WPAuth> {
    const {host, username, password, secure} = config;
    const protocol: string = secure ? "https" : "http";
    const result: any = await axios.post(
      `${protocol}://${host}/wp-json/jwt-auth/v1/token`,
      { username, password },
      { headers: { "Content-Type": "application/json" } },
    ).catch((err) => {
        console.error("Error retrieving WP auth token") 
        console.error(err.stack)
        console.error(err.config);
        console.log("Exiting...");
        process.exit(1);
    });
    return result.data;
}