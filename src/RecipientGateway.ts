import { Configuration } from "./Configuration";
import { Gateway } from "./Gateway";
import * as types from "../types";

export class RecipientGateway {

    gateway: Gateway;
    config: Configuration;

    constructor(gateway: Gateway) {
        this.gateway = gateway;
        this.config = this.gateway.config;
    }

    find(recipientId: string, term: string = "") {
        const endPoint = `/v1/recipients/${recipientId}/${term}`;

        return this.gateway.client.get<types.Recipient.Response>(endPoint);
    }
    create(body: any) {
        const endPoint = "/v1/recipients/";

        return this.gateway.client.post<types.Recipient.Response>(endPoint, body);
    }
    update(recipientId: string, body: any) {
        const endPoint = `/v1/recipients/${recipientId}`;

        return this.gateway.client.patch<types.Recipient.Response>(endPoint, body);
    }
    remove(recipientId: string) {
        const endPoint = `/v1/recipients/${recipientId}`;

        return this.gateway.client.remove<types.Recipient.Response>(endPoint);
    }
    search(page: number, pageSize: number, search: string) {
        const endPoint = `/v1/recipients/?&search=${search}&page=${page}&pageSize=${pageSize}`;

        return this.gateway.client.get<types.Recipient.ListResponse>(endPoint);
    }
}
