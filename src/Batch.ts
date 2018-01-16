import { Configuration } from '../src/Configuration';
import * as types from "../types";

export class Batch { // tslint:disable no-stateless-class

    /**
     * Retrieves a batch based on the batch id
     * @param {string} batchId
     */
    static async find(batchId: string) {
        const data = await Configuration.gateway().batch.find(batchId);
        const jsonObj: any = JSON.parse(data.toString());

        return <types.Batch.Result>jsonObj;
    }

    /**
     * Creates a batch or
     * generates quote based on batch id or
     * process batch based on batch id
     * @param {string} batchId
     * @param {array} body
     */
    static async create(body: any) {
        const data = await Configuration.gateway().batch.create(body);

        return <types.Batch.Result>data;
    }

    /**
     * @deprecated May 31, 2017
     * Updates a batch based on the batch id
     * @param {string} batchId
     * @param {array} body
     */
    static async update(batchId: string, body: any) {
        return await Configuration.gateway().batch.update(batchId, body);
    }

    /**
     * Delete a batch based on the batch id
     * @param {string} batchId
     */
    static async remove(batchId: string) {
        return await Configuration.gateway().batch.remove(batchId);
    }

    /**
     * List all batches based on the batch id and
     *  (optional) a given wildcard, page amount and page size
     * @param {int} page
     * @param {int} pageSize
     * @param {string} search
     */
    static async search(page: number = 1, pageSize: number = 10, search: string = "") {
        const data = await Configuration.gateway().batch.search(page, pageSize, search);
        const jsonObj: any = JSON.parse(data.toString());

        return <types.Batch.ListResult>jsonObj;
    }

    /**
     * Generate quote for a batch based on the batch id
     * @param batchId
     */
    static async generateQuote(batchId: string) {
        const data = await Configuration.gateway().batch.generateQuote(batchId);
        const jsonObj: any = JSON.parse(data.toString());

        return <types.Batch.Result>jsonObj;

    }

    /**
     * Process a batch based on batch id
     * @param batchId
     */
    static async processBatch(batchId: string) {
        const data = await Configuration.gateway().batch.processBatch(batchId);
        const jsonObj: any = JSON.parse(data.toString());

        return <types.Batch.Result>jsonObj;
    }

    /**
     * Retrieve a summary of a batch based on the batch id
     * @param {string} batchId
     */
    static async summary(batchId: string) {
        const data = await Configuration.gateway().batch.summary(batchId);
        const jsonObj: any = JSON.parse(data.toString());

        return <types.BatchSummary.Result>jsonObj;

    }
}
