import { CreateKeyOptions, KeyResponse, Key, RequestFunction, ErrorResponse } from "./types";
export declare class Keys {
    private _credentials;
    private _apiUrl;
    private _requireSSL;
    private _request;
    constructor(_credentials: string, _apiUrl: string, _requireSSL: boolean, _request: RequestFunction);
    /**
     * Retrieves all keys associated with the provided project_id.
     * @param {string} projectId Unique identifier of the project
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<KeyResponse>}
     */
    list(projectId: string, endpoint?: string): Promise<KeyResponse>;
    /**
     * Retrieves a specific key associated with the provided project_id.
     * @param {string} projectId Unique identifier of the project
     * @param {string} keyId Unique identifier of the key
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<Key>}
     */
    get(projectId: string, keyId: string, endpoint?: string): Promise<Key>;
    /**
     * Creates an API key with the provided scopes.
     * @param {string} projectId Unique identifier of the project
     * @param {string} comment Comment to describe the key
     * @param {Array<string>} scopes Permission scopes associated with the API key
     * @param {CreateKeyOptions} options Options used when creating API keys
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<Key>}
     */
    create(projectId: string, comment: string, scopes: Array<string>, options?: CreateKeyOptions, endpoint?: string): Promise<Key>;
    /**
     * Deletes an API key.
     * @param {string} projectId Unique identifier of the project
     * @param {string} keyId Unique identifier of the key
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<void>}
     */
    delete(projectId: string, keyId: string, endpoint?: string): Promise<void | ErrorResponse>;
}
