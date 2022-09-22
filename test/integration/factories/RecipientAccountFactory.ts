import {ApiResourceFactory} from "./ApiResourceFactory";

export class RecipientAccountFactory extends ApiResourceFactory {
    async createResource(attrs: any = {}) {
        return await this.apiClient.recipientAccount.create(attrs.recipient.id, {
            type: "bank-transfer",
            currency: "EUR",
            iban: "DE89 3704 0044 0532 0130 00",
            ...attrs
        });
    }
}