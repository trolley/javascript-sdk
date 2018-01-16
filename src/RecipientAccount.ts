import { Configuration } from '../src/Configuration';
import * as types from "../types";
export class RecipientAccount { // tslint:disable no-stateless-class

    /**
     * Retrieves the payout method based on the recipient id
     * @param {string} recipientId
     * @param {string} recipientAccountId
     */
    static async find(recipientId: string, recipientAccountId: string) {
        const data = await Configuration.gateway().recipientAccount.find(recipientId, recipientAccountId);
        const jsonObj: any = JSON.parse(data.toString());

        return <types.Recipient.AccountResponse>jsonObj;
    }
    /**
     * Creates a payout method based on the body and recipient id
     * @param {string} recipientId
     * @param {array} body
     */
    static async create(recipientId: string, body: any) {
        const data = await Configuration.gateway().recipientAccount.create(recipientId, body);

        return <types.Recipient.AccountResponse>data;
    }

    /**
     * Updates a payout method based on the body and the recipient id
     * @param {string} recipientId
     * @param {array} body
     * @param {string} recipientAccountId
     */
    static async update(recipientId: string, recipientAccountId: string, body: any) {
        return Configuration.gateway().recipientAccount.update(recipientId, recipientAccountId, body);
    }

    /**
     * Delete a payout method based on the recipient id
     * @param {string} recipientId
     * @param {array} body
     * @param {string} recipientAccountId
     */
    static async remove(recipientId: string, recipientAccountId: string) {
        return Configuration.gateway().recipientAccount.remove(recipientId, recipientAccountId);
    }

}
