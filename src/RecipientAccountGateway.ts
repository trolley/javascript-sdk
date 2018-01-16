import { Configuration } from "./Configuration";
import { Gateway } from "./Gateway";
import * as types from "../types";

export class RecipientAccountGateway {

    gateway: Gateway;
    config: Configuration;

    constructor(gateway: Gateway) {
        this.gateway = gateway;
        this.config = this.gateway.config;
    }

    find(recipientId: string, recipientAccountId: string) {
        const endPoint = `/v1/recipients/${recipientId}/accounts/${recipientAccountId}`;

        return this.gateway.client.get<types.Recipient.AccountResponse>(endPoint);
    }
    create(recipientId: string, body: any) {
        const endPoint = `/v1/recipients/${recipientId}/accounts`;

        return this.gateway.client.post<types.Recipient.AccountResponse>(endPoint, body);
    }
    update(recipientId: string, recipientAccountId: string, body: any) {
        const endPoint = `/v1/recipients/${recipientId}/accounts/${recipientAccountId}`;

        return this.gateway.client.patch<types.Recipient.AccountResponse>(endPoint, body);
    }
    remove(recipientId: string, recipientAccountId: string) {
        const endPoint = `/v1/recipients/${recipientId}/accounts/${recipientAccountId}`;

        return this.gateway.client.remove<types.Recipient.AccountResponse>(endPoint);
    }
}
