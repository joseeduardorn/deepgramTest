import { RequestFunction, UsageField, UsageFieldOptions, UsageOptions, UsageRequest, UsageRequestList, UsageRequestListOptions, UsageResponse } from "./types";
export declare class Usage {
    private _credentials;
    private _apiUrl;
    private _requireSSL;
    private _request;
    constructor(_credentials: string, _apiUrl: string, _requireSSL: boolean, _request: RequestFunction);
    /**
     * Retrieves all requests associated with the provided project_id based on the provided options.
     * @param {string} projectId Unique identifier of the project
     * @param {UsageRequestListOptions} options Additional filter options
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<UsageRequestList>}
     */
    listRequests(projectId: string, options?: UsageRequestListOptions, endpoint?: string): Promise<UsageRequestList>;
    /**
     * Retrieves a specific request associated with the provided project_id.
     * @param {string} projectId Unique identifier of the project
     * @param {string} requestId Unique identifier of the request
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<UsageRequest>}
     */
    getRequest(projectId: string, requestId: string, endpoint?: string): Promise<UsageRequest>;
    /**
     * Retrieves usage associated with the provided project_id based on the provided options.
     * @param {string} projectId Unique identifier of the project
     * @param {UsageOptions} options Options to filter usage
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<UsageResponse>}
     */
    getUsage(projectId: string, options?: UsageOptions, endpoint?: string): Promise<UsageResponse>;
    /**
     * Retrieves features used by the provided project_id based on the provided options.
     * @param {string} projectId Unique identifier of the project
     * @param {UsageFieldOptions} options Options to filter usage
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<UsageField>}
     */
    getFields(projectId: string, options?: UsageFieldOptions, endpoint?: string): Promise<UsageField>;
}
