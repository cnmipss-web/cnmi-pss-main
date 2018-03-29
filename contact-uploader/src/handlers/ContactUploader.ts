import axios from 'axios';

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

    constructor(config: ContactUploaderConfig, wpPostType: string, searchQuery) {
        this.config = config;
        this.wpPostType = wpPostType;
        this.protocol = config.secure ? "https://" : "http://";
        this.mainRoute = `${this.protocol}${config.host}/wp-json/wp/v2/${wpPostType}/`;
        this.acfRoute = `${this.protocol}${config.host}/wp-json/acf/v3/${wpPostType}/`;
        this.searchQuery = searchQuery.bind(this);
    }

    private searchWP(
        records: any[], 
        type: string
    ): Promise<AbstractRecord>[] {
        return records.map(async (record) => {
            const queryRoute = this.searchQuery(record);
            const searchResults = await axios.get(queryRoute);
            const existingData = searchResults.data.filter((result) => result.type === type)[0];

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
            console.log(
                "Updating pre-existing record", 
                data.title, 
                existingData.id
            );
        } else {
            console.log(`Posting data for ${data.title}`);
        }
    
        const mainRoute = existingData ? this.mainRoute + existingData.id : this.mainRoute;
    
        await axios.post(mainRoute, dataString, config)
            .catch((err) => console.error("Error posting data to WP", mainRoute, data.title, "\n", err));
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
            .map(async (promisedRecord) => {
                let record = await promisedRecord;
                if (record.title.trim().length > 0) {
                    await this.postData(record);
                }
            });
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
        console.error("Error retrieving WP auth token", err);
        console.log("Exiting...");
        process.exit(1);
    });
    return result.data;
}