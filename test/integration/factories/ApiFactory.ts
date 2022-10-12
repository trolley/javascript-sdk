import {Gateway} from "../../../lib";
import {defaultApiClient} from "../helpers/integrationTestsHelpers";

export abstract class ApiFactory {
    apiClient: Gateway = defaultApiClient;

    constructor(apiClient?: Gateway) {
        if (apiClient) {
            this.apiClient = apiClient;
        }
    }

    public abstract createResource(attrs: any): any;
}

export class BatchFactory extends ApiFactory {
    private defaultAttrs = {
        sourceCurrency: "USD",
        description: "Integration Test Create"
    }

    public async createResource(attrs: any = {}) {
        const payments = attrs.payments || [];

        return await this.apiClient.batch.create({
            ...this.defaultAttrs,
            ...attrs
        }, payments);
    }
}

export class RecipientAccountFactory extends ApiFactory {
    private defaultAttrs = {
        type: "bank-transfer",
        currency: "EUR",
        iban: "DE89 3704 0044 0532 0130 00"
    }

    public async createResource(attrs: any = {}) {
        return await this.apiClient.recipientAccount.create(
            attrs.recipient.id,
            {
                ...this.defaultAttrs,
                ...attrs
            }
        );
    }
}

export class RecipientFactory extends ApiFactory {
    private defaultAttrs = {
        type: "individual",
        firstName: "Tom",
        lastName: `Jones`,
        email: 'testEmail@example.com',
        address: {
            street1: "123 Wolfstrasse",
            city: "Berlin",
            country: "DE",
            postalCode: "123123",
        },
    };

    public async createResource(attrs: any = {}) {
        return await this.apiClient.recipient.create({
            ...this.defaultAttrs,
            ...attrs
        });
    }
}
