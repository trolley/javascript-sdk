import { Gateway } from "../../../lib";
import { testingApiClient } from "../helpers/integrationTestsHelpers";

class ApiFactoryError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ApiFactoryError";
    }
}

export class InvalidAttributeError extends ApiFactoryError {
    constructor(message: string) {
        super(message);
        this.name = "InvalidAttributeError";
    }
}

export abstract class ApiFactory {
    apiClient: Gateway = testingApiClient;

    constructor(apiClient?: Gateway) {
        if (apiClient) {
            this.apiClient = apiClient;
        }
    }

    public abstract createResource(attrs: any): any;
}
