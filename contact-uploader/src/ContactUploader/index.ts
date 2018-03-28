
export default abstract class ContactUploader {
    protected acfRoute:     string;
    protected authToken:    WPAuth;
    protected config:       ContactUploaderConfig;
    protected file:         string;
    protected mainRoute:    string;
    protected protocol:     string;

    constructor(config: ContactUploaderConfig) {
        this.config = config;
        this.protocol = config.secure ? "https://" : "http://";
        this.mainRoute = `${this.protocol}${config.host}/wp-json/wp/v2/`;
        this.acfRoute = `${this.protocol}${config.host}/wp-json/acf/v3/`;
    }

    /**
     * Parse this.file and create a list of personnel records defined there
     * storing them in a private member variable.
     * 
     * @memberof FileUploader
     */
    public abstract async parse()

    /**
     * POST data read from this.file to WP server defined by
     * contactUploader.json
     * 
     * @memberof FileUploader
     */
    public abstract async post() 
}