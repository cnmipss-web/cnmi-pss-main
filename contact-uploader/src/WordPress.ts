import axios, { AxiosResponse } from "axios";

/**
 * Use the WP REST API to fetch a JWT for authorizing future requests.
 *
 * @export
 * @param {ContactUploaderConfig} config
 * @returns {Promise<string>}
 */
export async function getToken(config: ContactUploaderConfig): Promise<WPAuth> {
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

export default {};
