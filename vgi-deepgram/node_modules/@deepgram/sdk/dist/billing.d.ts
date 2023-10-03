import { BalanceList, Balance, RequestFunction } from "./types";
export declare class Billing {
    private _credentials;
    private _apiUrl;
    private _requireSSL;
    private _request;
    constructor(_credentials: string, _apiUrl: string, _requireSSL: boolean, _request: RequestFunction);
    /**
     * Retrieves list of balance info of the specified project.
     * @param {string} projectId Unique identifier of the project
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<BalanceList>}
     */
    listBalances(projectId: string, endpoint?: string): Promise<BalanceList>;
    /**
     * Retrieves balance info of a specified balance_id in the specified project.
     * @param {string} projectId Unique identifier of the project
     * @param {string} balanceId Unique identifier of the balance
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<Balance>}
     */
    getBalance(projectId: string, balanceId: string, endpoint?: string): Promise<Balance>;
}
