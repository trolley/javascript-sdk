import { Configuration } from "./Configuration";
import { Recipient } from "./Recipient";
import * as types from "./types";

// tslint:disable:function-name
/**
 * @name OfflinePayment
 */
export class OfflinePayment {
  id: string = "";
  recipientId: Recipient["id"] = "";

  externalId: string | null = "";
  memo: string = "";
  tags: string[] = [];
  taxReportable: boolean = true;
  category: string = "";
  amount: string = "";
  currency: string = "";
  withholdingAmount: string = "";
  withholdingCurrency: string = "";
  processedAt: string = "";

  /**
   * Creates an offline payment
   * @param {string} recipientId
   * @param {array} body
   * @hidden
   */
  static async create(recipientId: string, body: any) {
    return Configuration.gateway().offlinePayment.create(recipientId, body);
  }

  /**
   * Updates an offline payment based on the offline payment id
   * @param {string} offlinePaymentId
   * @param {string} recipientId
   * @param {array} body
   * @hidden
   */
  static async update(
    offlinePaymentId: string,
    recipientId: string,
    body: any,
  ) {
    return Configuration.gateway().offlinePayment.update(
      recipientId,
      offlinePaymentId,
      body,
    );
  }

  /**
   * Delete an offline payment based on the offline payment id and the recipient's ID that it's associated with
   * @param {string} offlinePaymentId
   * @param {string} recipientId
   * @hidden
   */
  static async remove(offlinePaymentId: string, recipientId: string) {
    return Configuration.gateway().offlinePayment.remove(
      offlinePaymentId,
      recipientId,
    );
  }

  /**
   * List all offline payments
   *  (optional) a given wildcard, page amount and page size
   * @param {int} page
   * @param {int} pageSize
   * @param {string} search
   * @hidden
   */
  static async search(
    query: { [key: string]: string },
    page: number = 1,
    pageSize: number = 10,
    term: string = "",
  ) {
    const data = await Configuration.gateway().offlinePayment.search(
      query,
      page,
      pageSize,
      term,
    );
    const jsonObj: any = JSON.parse(data.toString());

    return <types.Payment.ListResult>jsonObj;
  }

  /**
   * Should only be called by the Gateway
   * @hidden
   */
  static factory(offlinePayment: types.OfflinePayment.OfflinePayment) {
    const instance = new OfflinePayment();
    instance._initialize(offlinePayment);

    return instance;
  }

  /**
   * @hidden
   */
  private _initialize(offlinePayment: types.OfflinePayment.OfflinePayment) {
    Object.keys(offlinePayment).forEach(k => {
      (this as any)[k] = (offlinePayment as any)[k];
    });
  }
}
