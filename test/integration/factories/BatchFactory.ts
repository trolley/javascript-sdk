import {Gateway} from "../../../lib";
import {ResourceFactory} from "./ResourceFactory";

export class BatchFactory extends ResourceFactory {
    constructor (apiClient: Gateway) {
        super(apiClient);
    }

    async createResource(attrs: any = {}) {
        console.log(this.apiClient.batch);
        return await this.apiClient.batch.create({
            sourceCurrency: "USD",
            description: "Integration Test Create",
            ...attrs
        });
    }

}