import {Gateway} from "../../../lib";
import {ResourceFactory} from "./ResourceFactory";

export class RecipientAccountFactory extends ResourceFactory {
    constructor(apiClient: Gateway) {
        super(apiClient);
    }

    async  createResource(attrs: any = {}) {
        console.log(this.apiClient.recipientAccount);
        return await this.apiClient.recipientAccount.create(attrs.recipient.id, {
            type: "bank-transfer",
            currency: "EUR",
            iban: "DE89 3704 0044 0532 0130 00",
            ...attrs
        });
    }
}