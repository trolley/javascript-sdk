import { Configuration } from '../src/Configuration';
import * as types from "../types";

export class Recipient { // tslint:disable no-stateless-class

  /**
   * Retrieves a recipient based on the recipient id given or
   * retrieves a list of payments or logs depending on the term
   * @param {string} recipientId
   * @param {string} term
   */
  static async find(recipientId: string, term: string = "") {

    const data = await Configuration.gateway().recipient.find(recipientId, term);
    const jsonObj: any = JSON.parse(data.toString());

    return <types.Recipient.Recipient>jsonObj;
  }
  /**
   * Creates a recipient based on the body given to the client
   * @param {array} body
   */
  static async create(body: any) {
    const data = await Configuration.gateway().recipient.create(body);

    return <types.Recipient.Recipient>data;
  }
  /**
   * Updates a recipient based on the body given to the client
   * and the recipient id
   * @param {string} recipientId
   * @param {array} body
   */
  static async update(recipientId: string, body: any) {
    return await Configuration.gateway().recipient.update(recipientId, body);
  }
  /**
   * Delete a recipient based on the recipient id
   * @param {string} recipientId
   */
  static async remove(recipientId: string) {
    return await Configuration.gateway().recipient.remove(recipientId);
  }
  /**
   * List all recipients based on the recipient id and
   *  (optional) a given wildcard, page amount and page size
   * @param {int} page
   * @param {int} pageSize
   * @param {string} search
   */
  static async search(page: number = 1, pageSize: number = 10, search: string = "") {
    const data = await Configuration.gateway().recipient.search(page, pageSize, search);
    const jsonObj: any = JSON.parse(data.toString());

    return <types.Recipient.Recipient>jsonObj;
  }
}
