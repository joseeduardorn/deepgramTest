import { Message, InvitationOptions, InvitationList, RequestFunction } from "./types";
export declare class Invitation {
    private _credentials;
    private _apiUrl;
    private _requireSSL;
    private _request;
    constructor(_credentials: string, _apiUrl: string, _requireSSL: boolean, _request: RequestFunction);
    /**
     * Lists all the current invites of a specified project.
     * @param {string} projectId Unique identifier of the project
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<InvitationList>}
     */
    list(projectId: string, endpoint?: string): Promise<InvitationList>;
    /**
     * Sends an invitation to join the specified project.
     * @param {string} projectId Unique identifier of the project
     * @param {InvitationOptions} options Used to define the email and scope of the invitee
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<Message>}
     */
    send(projectId: string, options: InvitationOptions, endpoint?: string): Promise<Message>;
    /**
     * Removes the authenticated account from the specified project.
     * @param {string} projectId Unique identifier of the project
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<Message>}
     */
    leave(projectId: string, endpoint?: string): Promise<Message>;
    /**
     * Removes the specified email from the invitations on the specified project.
     * NOTE: This will return successful even if the email does not have an invite on the project.
     * @param {string} projectId Unique identifier of the project
     * @param {string} email Email of the invite to delete
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<Message>}
     */
    delete(projectId: string, email: string, endpoint?: string): Promise<Message>;
}
