import { Project, ProjectPatchResponse, ProjectResponse, ProjectPatchRequest, RequestFunction, ErrorResponse } from "./types";
export declare class Projects {
    private _credentials;
    private _apiUrl;
    private _requireSSL;
    private _request;
    constructor(_credentials: string, _apiUrl: string, _requireSSL: boolean, _request: RequestFunction);
    /**
     * Returns all projects accessible by the API key.
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<ProjectResponse>}
     */
    list(endpoint?: string): Promise<ProjectResponse>;
    /**
     * Retrieves a specific project based on the provided project_id.
     * @param {string} projectId Unique identifier of the project
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<Project>}
     */
    get(projectId: string, endpoint?: string): Promise<Project>;
    /**
     * Update a project.
     * @param {string | Project} project Project to update
     * @param {ProjectPatchRequest} payload Details to change as an object
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<ProjectPatchResponse>}
     */
    update(project: string | Project, payload: ProjectPatchRequest, endpoint?: string): Promise<ProjectPatchResponse>;
    /**
     * Delete a project.
     * @param {string} projectId Unique identifier of the project
     * @param {string} endpoint Custom API endpoint
     *
     * @returns {Promise<void | ErrorResponse>}
     */
    delete(projectId: string, endpoint?: string): Promise<void | ErrorResponse>;
}
