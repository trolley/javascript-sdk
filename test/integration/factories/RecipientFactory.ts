import {ApiResourceFactory} from "./ApiResourceFactory";

export class RecipientFactory extends ApiResourceFactory {
    async createResource(attrs: any = {}) {
        return await this.apiClient.recipient.create(
            {
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
                ...attrs
            }
        );
    }
}