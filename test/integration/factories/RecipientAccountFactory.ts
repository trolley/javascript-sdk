import {ApiFactory} from "./ApiFactory";

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