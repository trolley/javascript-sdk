import { Configuration } from "./Configuration";
import { Recipient } from './Recipient';
import * as types from "./types";

// tslint:disable:function-name
export class Payment {
  id: string = "";
  recipient: Recipient = {} as any;

  status: string = "";
  sourceAmount: string = "";
  exchangeRate: string = "";
  fees: string = "";
  recipientFees: string = "";
  returnedAmount: string = "";
  targetAmount: string = "";
  fxRate: string = "";
  memo: string = "";
  processedAt: string = "";
  createdAt: string = "";
  updatedAt: string = "";

  merchantFees: string = "";
  compliance: {
    status: string;
    checkedAt: string;
  } = { status: "", checkedAt: "" };

  sourceCurrency: string | null = null;
  targetCurrency: string | null = null;
  isSupplyPayment: boolean = false;
  payoutMethod: string = "";

  /**
   * Retrieves a payment based on the payment id and or
   * the batch id
   * @param {string} paymentId
   */
  static async find(paymentId: string) {
    const data = await Configuration.gateway().payment.find(paymentId);
    const jsonObj: any = JSON.parse(data.toString());

    return <types.Payment.Result>jsonObj;
  }

  /**
   * Creates a payment based on the batch id
   * @param {string} batchId
   * @param {array} body
   */
  static async create(batchId: string, body: any) {
    return Configuration.gateway().payment.create(batchId, body);
  }

  /**
   * Updates a payment based on the payment id
   * @param {string} paymentId
   * @param {string} batchId
   * @param {array} body
   */
  static async update(paymentId: string, batchId: string, body: any) {
    return Configuration.gateway().payment.update(paymentId, batchId, body);
  }

  /**
   * Delete a payment based on the paymentId id
   * @param {string} paymentId
   * @param {string} batchId
   */
  static async remove(paymentId: string, batchId: string) {
    return Configuration.gateway().payment.remove(paymentId, batchId);
  }

  /**
   * List all payments based on the batch id and
   *  (optional) a given wildcard, page amount and page size
   * @param {int} page
   * @param {int} pageSize
   * @param {string} search
   */
  static async search(
    batchId: string,
    page: number = 1,
    pageSize: number = 10,
    term: string = "",
  ) {
    const data = await Configuration.gateway().payment.search(
      batchId,
      page,
      pageSize,
      term,
    );
    const jsonObj: any = JSON.parse(data.toString());

    return <types.Payment.ListResult>jsonObj;
  }

  /**
   * Should only be called by the Gateway
   */
  static factory(payment: types.Payment.Payment) {
    const instance = new Payment();
    instance._initialize(payment);

    return instance;
  }

  private _initialize(payment: types.Payment.Payment) {
    Object.keys(payment).forEach(k => {
      if (k === "recipient") {
        this.recipient = Recipient.factory(payment.recipient);
      } else {
        (this as any)[k] = (payment as any)[k];
      }
    });
  }
}
