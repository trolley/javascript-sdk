import { Configuration } from "./Configuration";
import { Payment } from './Payment';
import * as types from "../types";

// tslint:disable:function-name

/*
if (Symbol["asyncIterator"] === undefined) {
  (<any>Symbol)["asyncIterator"] = Symbol.for("asyncIterator");
}
*/

export interface BatchInput {
  sourceCurrency: string;
  description: string;
}

export interface PaymentInput {
  sourceAmount?: string;
  targetAmount?: string;
  targetCurrency?: string;
  memo?: string;
  recipient: {
    id?: string;
    referenceId?: string;
    email?: string;
  };
}

export class Batch {
  id: string = "";
  status: string = "";
  amount: string = "0.00";
  totalPayments: number = 0;
  currency: string = "";
  description: string = "";
  sentAt: string = "";
  completedAt: string = "";
  createdAt: string = "";
  updatedAt: string = "";
  payments?: Payment[] = [];
  quoteExpiredAt?: string;

  /*
  * Retrieves a batch based on the batch id
  * @param {string} batchId
  */
  static async all() {
    return Configuration.gateway().batch.all();
  }

  /*
  * Retrieves a batch based on the batch id
  * @param {string} batchId
  */
  static async find(batchId: string) {
    return Configuration.gateway().batch.find(batchId);
  }

  /**
   * Creates a batch or
   * generates quote based on batch id or
   * process batch based on batch id
   * @param {string} batchId
   * @param {array} body
   */
  static async create(batchInfo: BatchInput, paymentsIn?: PaymentInput[]) {
    return Configuration.gateway().batch.create({
      ...batchInfo,
      payments: paymentsIn,
    });
  }

  /**
   * @deprecated May 31, 2017
   * Updates a batch based on the batch id
   * @param {string} batchId
   * @param {array} body
   */
  static async update(batchId: string, body: any) {
    return Configuration.gateway().batch.update(batchId, body);
  }

  /**
   * Delete a batch based on the batch id
   * @param {string} batchId
   */
  static async remove(batchId: string) {
    return Configuration.gateway().batch.remove(batchId);
  }

  /**
   * List all batches based on the batch id and
   *  (optional) a given wildcard, page amount and page size
   * @param {int} page
   * @param {int} pageSize
   * @param {string} search
   */
  static async search(
    page: number = 1,
    pageSize: number = 10,
    term: string = "",
  ) {
    return Configuration.gateway().batch.search(
      page,
      pageSize,
      term,
    );
  }

  /**
   * Generate quote for a batch based on the batch id
   * @param batchId
   */
  static async generateQuote(batchId: string) {
    return Configuration.gateway().batch.generateQuote(batchId);
  }

  /**
   * Process a batch based on batch id
   * @param batchId
   */
  static async startProcessing(batchId: string) {
    return Configuration.gateway().batch.startProcessing(batchId);
  }

  /**
   * Retrieve a summary of a batch based on the batch id
   * @param {string} batchId
   */
  static async summary(batchId: string) {
    return Configuration.gateway().batch.summary(batchId);
  }

  /**
   * Retrieve a summary of a batch based on the batch id
   * @param {string} batchId
   *
   *  static async function* payments(batchId: string) {
   *    const result = await Configuration.gateway().batch.payments(batchId);
   *
   *    if (result.ok) {
   *      yield* result.payments;
   *    } else {
   *      throw new DownForMaintenance();
   *    }
   *  }
   */

  /**
   * Retrieve a summary of a batch based on the batch id
   * @param {string} batchId
   */
  static async paymentList(
    batchId: string,
    page: number = 1,
    pageSize: number = 10,
  ) {
    return Configuration.gateway().batch.payments(
      batchId,
      page,
      pageSize,
    );
  }

  static factory(batch: types.Batch.Batch) {
    const instance = new Batch();
    instance._initialize(batch);

    return instance;
  }

  private _initialize(account: types.Batch.Batch) {
    Object.keys(account).forEach(k => {
      (this as any)[k] = (account as any)[k];
    });
  }
}
