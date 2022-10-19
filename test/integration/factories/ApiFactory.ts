import {Gateway} from "../../../lib";
import {testingApiClient} from "../helpers/integrationTestsHelpers";

export abstract class ApiFactory {
    apiClient: Gateway = testingApiClient;

    constructor(apiClient?: Gateway) {
        if (apiClient) {
            this.apiClient = apiClient;
        }
    }

    public abstract createResource(attrs: any): any;
}
