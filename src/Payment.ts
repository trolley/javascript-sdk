import { Configuration } from '../src/Configuration';
import * as types from "../types";
export class Payment { // tslint:disable no-stateless-class
    /**
     * Retrieves a payment based on the payment id and or
     * the batch id
     * @param {string} paymentId
     */
    static async find(paymentId: string) {
        const data = await Configuration.gateway().payment.find(paymentId);
        const jsonObj: any = JSON.parse(data.toString());

        return <types.Payment.Payment>jsonObj;
    }
    /**
     * Creates a payment based on the batch id
     * @param {string} batchId
     * @param {array} body
     */
    static async create(batchId: string, body: any) {
        const data = await Configuration.gateway().payment.create(batchId, body);

        return <types.Payment.Payment>data;
    }
    /**
     * Updates a payment based on the payment id
     * @param {string} paymentId
     * @param {string} batchId
     * @param {array} body
     */
    static async update(paymentId: string, batchId: string, body: any) {
        return await Configuration.gateway().payment.update(paymentId, batchId, body);
    }
    /**
     * Delete a payment based on the paymentId id
     * @param {string} paymentId
     * @param {string} batchId
     */
    static async remove(paymentId: string, batchId: string) {
        return await Configuration.gateway().payment.remove(paymentId, batchId);
    }
    /**
     * List all payments based on the batch id and
     *  (optional) a given wildcard, page amount and page size
     * @param {int} page
     * @param {int} pageSize
     * @param {string} search
     */
    static async search(batchId: string, page: number = 1, pageSize: number = 10, search: string = "") {
        const data = await Configuration.gateway().payment.search(batchId, page, pageSize, search);
        const jsonObj: any = JSON.parse(data.toString());

        return <types.Payment.Payment>jsonObj;
    }
}
