import { ApiFactory } from "./ApiFactory";

export class BatchFactory extends ApiFactory {
    defaultAttrs = {
        sourceCurrency: "USD",
        description: "Integration Test Create",
    };

    public async createResource(attrs: any = {}) {
        const payments = attrs.payments || [];

        return this.apiClient.batch.create({
            ...this.defaultAttrs,
            ...attrs,
        }, payments);
    }
}
