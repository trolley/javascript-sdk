import { ApiFactory } from "./ApiFactory";

export class RecipientFactory extends ApiFactory {
    defaultAttrs = {
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
        return this.apiClient.recipient.create({
            ...this.defaultAttrs,
            ...attrs,
        });
    }
}
