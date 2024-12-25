/**
 * Payload type representing a key-value pair with string keys and any values.
 */
type Payload = {
    [key: string]: any;
};
/**
* Headers type representing a key-value pair with string keys and string values.
*/
type Headers = {
    [key: string]: string;
};
/**
* Realtime event response structure with generic payload type.
*/
type RealtimeResponseEvent<T extends unknown> = {
    /**
     * List of event names associated with the response.
     */
    events: string[];
    /**
     * List of channel names associated with the response.
     */
    channels: string[];
    /**
     * Timestamp indicating the time of the event.
     */
    timestamp: number;
    /**
     * Payload containing event-specific data.
     */
    payload: T;
};
/**
* Type representing upload progress information.
*/
type UploadProgress = {
    /**
     * Identifier for the upload progress.
     */
    $id: string;
    /**
     * Current progress of the upload (in percentage).
     */
    progress: number;
    /**
     * Total size uploaded (in bytes) during the upload process.
     */
    sizeUploaded: number;
    /**
     * Total number of chunks that need to be uploaded.
     */
    chunksTotal: number;
    /**
     * Number of chunks that have been successfully uploaded.
     */
    chunksUploaded: number;
};
/**
* Client that handles requests to Appwrite
*/
declare class Client {
    static CHUNK_SIZE: number;
    /**
     * Holds configuration such as project.
     */
    config: {
        endpoint: string;
        endpointRealtime: string;
        project: string;
        key: string;
        jwt: string;
        locale: string;
        mode: string;
    };
    /**
     * Custom headers for API requests.
     */
    headers: Headers;
    /**
     * Set Endpoint
     *
     * Your project endpoint
     *
     * @param {string} endpoint
     *
     * @returns {this}
     */
    setEndpoint(endpoint: string): this;
    /**
     * Set Realtime Endpoint
     *
     * @param {string} endpointRealtime
     *
     * @returns {this}
     */
    setEndpointRealtime(endpointRealtime: string): this;
    /**
     * Set Project
     *
     * Your project ID
     *
     * @param value string
     *
     * @return {this}
     */
    setProject(value: string): this;
    /**
     * Set Key
     *
     * Your secret API key
     *
     * @param value string
     *
     * @return {this}
     */
    setKey(value: string): this;
    /**
     * Set JWT
     *
     * Your secret JSON Web Token
     *
     * @param value string
     *
     * @return {this}
     */
    setJWT(value: string): this;
    /**
     * Set Locale
     *
     * @param value string
     *
     * @return {this}
     */
    setLocale(value: string): this;
    /**
     * Set Mode
     *
     * @param value string
     *
     * @return {this}
     */
    setMode(value: string): this;
    private realtime;
    /**
     * Subscribes to Nuvix events and passes you the payload in realtime.
     *
     * @param {string|string[]} channels
     * Channel to subscribe - pass a single channel as a string or multiple with an array of strings.
     *
     * Possible channels are:
     * - account
     * - collections
     * - collections.[ID]
     * - collections.[ID].documents
     * - documents
     * - documents.[ID]
     * - files
     * - files.[ID]
     * - executions
     * - executions.[ID]
     * - functions.[ID]
     * - teams
     * - teams.[ID]
     * - memberships
     * - memberships.[ID]
     * @param {(payload: RealtimeMessage) => void} callback Is called on every realtime update.
     * @returns {() => void} Unsubscribes from events.
     */
    subscribe<T extends unknown>(channels: string | string[], callback: (payload: RealtimeResponseEvent<T>) => void): () => void;
    prepareRequest(method: string, url: URL, headers?: Headers, params?: Payload): {
        uri: string;
        options: RequestInit;
    };
    chunkedUpload(method: string, url: URL, headers: Headers | undefined, originalPayload: Payload | undefined, onProgress: (progress: UploadProgress) => void): Promise<any>;
    ping(): Promise<string>;
    call(method: string, url: URL, headers?: Headers, params?: Payload, responseType?: string): Promise<any>;
    static flatten(data: Payload, prefix?: string): Payload;
}
export { Client };
export type { Payload };