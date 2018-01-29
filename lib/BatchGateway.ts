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

    if (result.ok) {
      return result.batches.map(b => Batch.factory(b));
    } else {
      throw new DownForMaintenance();
    }
  }

  /**
   * Retrieves a batch based on the batch id
   * @param {string} batchId
   */
  async find(batchId: string): Promise<Batch> {
    const endPoint = `/v1/batches/${batchId}`;

    const result = await this.gateway.client.get<types.Batch.Result>(endPoint);

    if (result.ok) {
      return Batch.factory(result.batch);
    } else {
      throw new DownForMaintenance();
    }
  }

  /**
   * Creates a batch with optional payments
   * @param {BatchInput} batch
   * @param {PaymentInput} payments (optional)
   */
  async create(batch: BatchInput, payments?: PaymentInput[]): Promise<Batch> {
    const endPoint = "/v1/batches/";

    const result = await this.gateway.client.post<types.Batch.Result>(endPoint, {
      ...batch,
      ...(payments ? { payments } : {}),
    });

    if (result.ok) {
      return Batch.factory(result.batch);
    } else {
      throw new DownForMaintenance();
    }
  }

  /**
   * Update the batch data
   * @param {string} batchId
   * @param {BatchInput} parameters
   */
  async update(batchId: string, body: BatchInput) {
    const endPoint = `/v1/batches/${batchId}`;

    const result = await this.gateway.client.patch<types.Batch.Result>(endPoint, body);

    if (result.ok) {
      return true;
    } else {
      throw new DownForMaintenance();
    }
  }

  /**
   * Delete the given batch
   * @param batchId Batch ID
   */
  async remove(batchId: string) {
    const endPoint = `/v1/batches/${batchId}`;

    const result = await this.gateway.client.remove<{ ok: boolean }>(endPoint);

    if (result.ok) {
      return true;
    } else {
      throw new DownForMaintenance();
    }
  }

  /**
   * Search for a batch matching the given term
   * @param page
   * @param pageSize
   * @param search string search term
   */
  async search(page = 1, pageSize = 10, search = "") {
    const endPoint = `/v1/batches/?&search=${search}&page=${page}&pageSize=${pageSize}`;

    const result = await this.gateway.client.get<types.Batch.ListResult>(endPoint);

    if (result.ok) {
      return result.batches.map(b => Batch.factory(b));
    } else {
      throw new DownForMaintenance();
    }
  }

  /**
   * Return a paginated list of results for the given batch
   * @param batchId 
   * @param page 
   * @param pageSize 
   */
  async paymentList(batchId: string, page: number = 1, pageSize: number = 10) {
    const endPoint = `/v1/batches/${batchId}/payments`;

    const result = await this.gateway.client.get<types.Payment.ListResult>(endPoint);

    if (result.ok) {
      return result.payments.map(b => Payment.factory(b));
    } else {
      throw new DownForMaintenance();
    }
  }

  /**
   * Generate a FX quote for this batch
   * @param batchId 
   */
  async generateQuote(batchId: string) {
    const endPoint = `/v1/batches/${batchId}/generate-quote`;

    const result = await this.gateway.client.post<types.Batch.Result>(endPoint);

    if (result.ok) {
      return Batch.factory(result.batch);
    } else {
      throw new DownForMaintenance();
    }
  }

  /**
   * Start processing this batch
   * @param batchId 
   */
  async startProcessing(batchId: string) {
    const endPoint = `/v1/batches/${batchId}/start-processing`;

    const result = await this.gateway.client.post<types.Batch.Result>(endPoint);

    if (result.ok) {
      return Batch.factory(result.batch);
    } else {
      throw new DownForMaintenance();
    }
  }

  /**
   * Get a transaction totaled summary for this batch
   * @param batchId
   */
  async summary(batchId: string) {
    const endPoint = `/v1/batches/${batchId}/summary`;

    const result = await this.gateway.client.get<types.BatchSummary.Result>(endPoint);

    if (result.ok) {
      return result.batchSummary;
    } else {
      throw new DownForMaintenance();
    }
  }
}
