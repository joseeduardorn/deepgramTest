import { ScopeList, Message, RequestFunction } from "./types";
export declare class Scopes {
    private _credentials;
    private _apiUrl;
    private _requireSSL;
    private _request;
    constructor(_credentials: string, _apiUrl: string, _requireSSL: boolean, _request: RequestFunction);
    /**
     * Retrieves scopes of the specified member in the specified project.
     * @param {string} projectId Unique identifier of the project
     * @param {string} memberId Unique identifier of the member
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<ScopeList>}
     */
    get(projectId: string, memberId: string, endpoint?: string): Promise<ScopeList>;
    /**
     * Updates the scope for the specified member in the specified project.
     * @param {string} projectId Unique identifier of the project
     * @param {string} memberId Unique identifier of the member
     * @param {string} scope Scope to update the member to
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<Message>}
     */
    update(projectID: string, memberId: string, scope: string, endpoint?: string): Promise<Message>;
}
