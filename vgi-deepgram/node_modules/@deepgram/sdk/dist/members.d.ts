import { MemberList, Message, RequestFunction } from "./types";
export declare class Members {
    private _credentials;
    private _apiUrl;
    private _requireSSL;
    private _request;
    constructor(_credentials: string, _apiUrl: string, _requireSSL: boolean, _request: RequestFunction);
    /**
     * Retrieves account objects for all of the accounts in the specified project.
     * @param {string} projectId Unique identifier of the project
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<MemberList>}
     */
    listMembers(projectId: string, endpoint?: string): Promise<MemberList>;
    /**
     * Removes member account for specified member_id.
     * @param {string} projectId Unique identifier of the project
     * @param {string} memberId Unique identifier of the member
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<Message>}
     */
    removeMember(projectId: string, memberId: string, endpoint?: string): Promise<Message>;
}
