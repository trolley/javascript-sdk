import { Gateway } from "./Gateway";
import { DownForMaintenance } from "./exceptions";
import * as types from "./types";
import { Batch } from './Batch';
import { Payment } from './Payment';

/**
 * @typedef {Object} BatchInput
 * @property {string} sourceCurrency
 * @property {string} description
 */
export interface BatchInput {
  sourceCurrency: string;
  description: string;
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
  gateway: Gateway;

  /**
   * Internal constructor to build the gateway interface
   * @param {Gateway} gateway gateway configuration
   * @private
   */
  constructor(gateway: Gateway) {
    this.gateway = gateway;
  }

  /**
   * Fetch batch all batches with an Iterator
   */
  async all() {
    const endPoint = "/v1/batches/";

    const result = await this.gateway.client.get<types.Batch.ListResult>(endPoint);

    return result.batches.map(b => Batch.factory(b));
  }

  /**
   * Retrieves a batch based on the batch id
   * @param {string} batchId
   */
  async find(batchId: string): Promise<Batch> {
    const endPoint = `/v1/batches/${encodeURIComponent(batchId)}`;

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
    const endPoint = "/v1/batches/";

    const result = await this.gateway.client.post<types.Batch.Result>(endPoint, {
      ...batch,
      ...(payments ? { payments } : {}),
    });

    return Batch.factory(result.batch);
  }

  /**
   * Update the batch data
   * @param {string} batchId
   * @param {BatchInput} parameters
   */
  async update(batchId: string, body: BatchInput) {
    const endPoint = `/v1/batches/${encodeURIComponent(batchId)}`;

    const result = await this.gateway.client.patch<types.Batch.Result>(endPoint, body);

    return true;
  }

  /**
   * Delete the given batch
   * @param batchId Batch ID
   */
  async remove(batchId: string) {
    const endPoint = `/v1/batches/${encodeURIComponent(batchId)}`;

    const result = await this.gateway.client.remove<{ ok: boolean }>(endPoint);

    return true;
  }

  /**
   * Search for a batch matching the given term
   * @param page
   * @param pageSize
   * @param search string search term
   */
  async search(page = 1, pageSize = 10, search = "") {
    // tslint:disable-next-line:max-line-length
    const endPoint = `/v1/batches/?&search=${encodeURIComponent(search)}&page=${encodeURIComponent(String(page))}&pageSize=${encodeURIComponent(String(pageSize))}`;

    const result = await this.gateway.client.get<types.Batch.ListResult>(endPoint);

    return result.batches.map(b => Batch.factory(b));
  }

  /**
   * Return a paginated list of results for the given batch
   * @param batchId 
   * @param page 
   * @param pageSize 
   */
  async paymentList(batchId: string, page: number = 1, pageSize: number = 10) {
    const endPoint = `/v1/batches/${encodeURIComponent(batchId)}/payments`;

    const result = await this.gateway.client.get<types.Payment.ListResult>(endPoint);

    return result.payments.map(b => Payment.factory(b));
  }

  /**
   * Generate a FX quote for this batch
   * @param batchId 
   */
  async generateQuote(batchId: string) {
    const endPoint = `/v1/batches/${encodeURIComponent(batchId)}/generate-quote`;

    const result = await this.gateway.client.post<types.Batch.Result>(endPoint);

    return Batch.factory(result.batch);
  }

  /**
   * Start processing this batch
   * @param batchId 
   */
  async startProcessing(batchId: string) {
    const endPoint = `/v1/batches/${encodeURIComponent(batchId)}/start-processing`;

    const result = await this.gateway.client.post<types.Batch.Result>(endPoint);

    return Batch.factory(result.batch);
  }

  /**
   * Get a transaction totaled summary for this batch
   * @param batchId
   */
  async summary(batchId: string) {
    const endPoint = `/v1/batches/${encodeURIComponent(batchId)}/summary`;

    const result = await this.gateway.client.get<types.BatchSummary.Result>(endPoint);

    return result.batchSummary;
  }
}
