import {Gateway} from "../../../lib";

export abstract class ResourceFactory {
    apiClient: Gateway;

    protected constructor(apiClient: Gateway) {
        this.apiClient = apiClient;
    }

    public abstract createResource(attrs: any): any;
}
