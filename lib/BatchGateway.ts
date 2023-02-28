import { Gateway } from "./Gateway";
import { Batch } from './Batch';
import { Payment } from './Payment';
import * as querystring from 'querystring';
import * as types from "./types";
import { buildURL } from './util';

export interface BatchInput {
  sourceCurrency?: string;
  description?: string;
}

/**
 * @type PaymentInput
 */
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

/**
 * Gateway class for batcheso
 * @class BatchGateway
 */
export class BatchGateway {
  /**
   * @hidden
   */
  gateway: Gateway;

  /**
   * Internal constructor to build the gateway interface
   * @param {Gateway} gateway gateway configuration
   * @hidden
   */
  constructor(gateway: Gateway) {
    this.gateway = gateway;
  }

  /**
   * Fetch batch all batches with an Iterator
   * ```
   * ```
   */
  async all() {
    const endPoint = buildURL('batches');

    const result = await this.gateway.client.get<types.Batch.ListResult>(endPoint);

    return result.batches.map(b => Batch.factory(b));
  }

  /**
   * Retrieves a batch based on the batch id
   * ```
   * const batch = await client.batch.find('B-xx999bb');
   * ```
   * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
   */
  async find(batchId: string): Promise<Batch> {
    const endPoint = buildURL('batches', batchId);

    const result = await this.gateway.client.get<types.Batch.Result>(endPoint);

    return Batch.factory(result.batch);
  }

  /**
   * Creates a batch with optional payments. This is the interface that is
   * provide by the {@link http://docs.paymentrails.com/api/#create-a-batch Create Batch} API
   *
   * ```js
   * const batch = await client.batch.create({
   *     description: "My Batch",
   *     sourceCurrency: "USD",
   *   }, [
   *     {
   *       recipient: {
   *         email: "john@example.com",
   *       },
   *       sourceAmount: "10.20",
   *     },
   *   ]);
   * ```
   * @param {BatchInput} batch
   * @param {PaymentInput} payments (optional)
   */
  async create(batch: BatchInput, payments?: PaymentInput[]): Promise<Batch> {
    const endPoint = buildURL('batches');

    const result = await this.gateway.client.post<types.Batch.Result>(endPoint, {
      ...batch,
      ...(payments ? { payments } : {}),
    });

    return Batch.factory(result.batch);
  }

  /**
   * Update the batch data, note you can only update the information of a batch
   *  not the payments via this API
   * ```
   * const batch = await client.batch.create({
   *     description: "My Batch for Wednesday",
   * });
   * ```
   * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
   * @param {BatchInput} parameters
   */
  async update(batchId: string, body: BatchInput) {
    const endPoint = buildURL('batches', batchId);

    const result = await this.gateway.client.patch<types.Batch.Result>(endPoint, body);

    return Batch.factory(result.batch);
  }

  /**
   * Delete the given batch
   * ```
   * const success = client.batch.remove('B-xx999bb');
   * ```
   * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
   */
  async remove(batchId: string) {
    const endPoint = buildURL('batches', batchId);

    const result = await this.gateway.client.remove<{ ok: boolean }>(endPoint);

    return true;
  }

  /**
   * Search for a batch matching the given term
   * @param page
   * @param pageSize
   * @param term string search term
   */
  async search(page: number = 1, pageSize: number = 10, term: string = "") {
    // tslint:disable-next-line:max-line-length
    const endPoint = buildURL('batches');
    const query = querystring.stringify({
      page,
      pageSize,
      search: term,
    });

    const result = await this.gateway.client.get<types.Batch.ListResult>(`${endPoint}?${query}`);

    return result.batches.map(b => Batch.factory(b));
  }

  /**
   * Return a paginated list of payments for this batch
   * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
   * @param page starting a 1
   * @param pageSize in the range 0...1000
   */
  async paymentList(batchId: string, page: number = 1, pageSize: number = 10) {
    const endPoint = buildURL('batches', batchId, 'payments');
    const query = querystring.stringify({
      page,
      pageSize,
    });

    const result = await this.gateway.client.get<types.Payment.ListResult>(`${endPoint}?${query}`);

    return result.payments.map(b => Payment.factory(b));
  }

  /**
   * Generate a FX quote for this batch
   * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
   */
  async generateQuote(batchId: string) {
    const endPoint = buildURL('batches', batchId, 'generate-quote');

    const result = await this.gateway.client.post<types.Batch.Result>(endPoint);

    return Batch.factory(result.batch);
  }

  /**
   * Start processing this batch
   * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
   */
  async startProcessing(batchId: string) {
    const endPoint = buildURL('batches', batchId, 'start-processing');

    const result = await this.gateway.client.post<types.Batch.Result>(endPoint);

    return Batch.factory(result.batch);
  }

  /**
   * Get a transaction totaled summary for this batch
   * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
   */
  async summary(batchId: string) {
    const endPoint = buildURL('batches', batchId, 'summary');

    const result = await this.gateway.client.get<types.BatchSummary.Result>(endPoint);

    return result.batchSummary;
  }
}
