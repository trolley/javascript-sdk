import { Configuration } from "./Configuration";
import { Gateway } from "./Gateway";
import * as types from "../types";

export class BatchGateway {

    gateway: Gateway;
    config: Configuration;

    constructor(gateway: Gateway) {
        this.gateway = gateway;
        this.config = this.gateway.config;
    }

    find(batchId: string) {
        const endPoint = `/v1/batches/${batchId}`;

        return this.gateway.client.get<types.Batch.Result>(endPoint);
    }
    create(body: any) {
        const endPoint = "/v1/batches/";

        return this.gateway.client.post<types.Batch.Result>(endPoint, body);
    }
    update(batchId: string, body: any) {
        const endPoint = `/v1/batches/${batchId}`;

        return this.gateway.client.patch<types.Batch.Result>(endPoint, body);
    }
    remove(batchId: string) {
        const endPoint = `/v1/batches/${batchId}`;

        return this.gateway.client.remove<types.Batch.Result>(endPoint);
    }
    search(page = 1, pageSize = 10, search = "") {
        const endPoint = `/v1/batches/?&search=${search}&page=${page}&pageSize=${pageSize}`;

        return this.gateway.client.get<types.Batch.ListResult>(endPoint);
    }
    generateQuote(batchId: string) {
        const endPoint = `/v1/batches/${batchId}/generate-quote`;

        return this.gateway.client.post<types.Batch.Result>(endPoint, "");
    }
    processBatch(batchId: string) {
        const endPoint = `/v1/batches/${batchId}/start-processing`;

        return this.gateway.client.post<types.Batch.Result>(endPoint, "");
    }
    summary(batchId: string) {
        const endPoint = `/v1/batches/${batchId}/summary`;

        return this.gateway.client.get<types.BatchSummary.Result>(endPoint);
    }
}
