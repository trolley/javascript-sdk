import { Configuration } from "./Configuration";
import { Gateway } from "./Gateway";
import * as types from "../types";

export class PaymentGateway {

    gateway: Gateway;
    config: Configuration;

    constructor(gateway: Gateway) {
        this.gateway = gateway;
        this.config = this.gateway.config;
    }

    find(paymentId: string) {
        const endPoint = `/v1/payments/${paymentId}`;

        return this.gateway.client.get<types.Payment.Result>(endPoint);
    }
    create(batchId: string, body: any) {
        const endPoint = `/v1/batches/${batchId}/payments`;

        return this.gateway.client.post<types.Payment.Result>(endPoint, body);
    }
    update(paymentId: string, batchId: string, body: any) {
        const endPoint = `/v1/batches/${batchId}/payments/${paymentId}`;

        return this.gateway.client.patch(endPoint, body);
    }
    remove(paymentId: string, batchId: string) {
        const endPoint = `/v1/batches/${batchId}/payments/${paymentId}`;

        return this.gateway.client.remove(endPoint);
    }
    search(batchId: string, page: number = 1, pageSize: number = 10, search: string = "") {
        const endPoint = `/v1/batches/${batchId}/payments/?&search=${search}&page=${page}&pageSize=${pageSize}`;

        return this.gateway.client.get<types.Payment.ListResult>(endPoint);
    }
}
