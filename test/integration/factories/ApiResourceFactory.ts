import * as paymentrails from "../../../lib";

export abstract class ApiResourceFactory {
    apiClient: paymentrails.Gateway;

    protected constructor(apiClient: paymentrails.Gateway) {
        this.apiClient = apiClient;
    }

    public abstract createResource(attrs: any = {}): any;
}
