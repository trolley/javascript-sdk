import { Configuration } from "./Configuration";
import { Gateway } from "./Gateway";
import { Payment } from './Payment';
import { buildURL } from './util';
import * as querystring from 'querystring';
import * as types from "./types";

export class PaymentGateway {
  /**
   * @hidden
   */
  gateway: Gateway;
  /**
   * @hidden
   */
  config: Configuration;

  /**
   * @param gateway
   * @hidden
   */
  constructor(gateway: Gateway) {
    this.gateway = gateway;
    this.config = this.gateway.config;
  }

  /**
   * Find a specific payment
   * ```
   * const payment = await client.payment.find('P-aabbccc');
   * ```
   * @param paymentId Payment Rails payment id (e.g. "P-aabccc")
   */
  async find(paymentId: string) {
    const endPoint = buildURL('payments', paymentId);

    const result = await this.gateway.client.get<types.Payment.Result>(endPoint);

    return Payment.factory(result.payment);
  }

  /**
   * Create a new payment in a batch
   * ```
   * const payment = await client.payment.create('B-xx99bb', {
   *   recipient: {
   *     email: 'tom.jones@example.com',
   *   },
   *   sourceAmount: '10.99',
   * });
   * ```
   * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
   * @param body Payment information
   */
  async create(batchId: string, body: any) {
    const endPoint = buildURL('batches', batchId, 'payments');

    const result = await this.gateway.client.post<types.Payment.Result>(endPoint, body);

    return Payment.factory(result.payment);
  }

  /**
   * Update a given payment
   * ```
   * const success = await client.payment.update('P-aabbccc', 'B-xx99bb', {
   *   sourceAmount: '99.99',
   * });
   * ```
   * @param paymentId Payment Rails payment id (e.g. "P-aabccc")
   * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
   * @param body Payment update information
   */
  async update(paymentId: string, batchId: string, body: any) {
    const endPoint = buildURL('batches', batchId, 'payments', paymentId);

    const result = await this.gateway.client.patch<{ ok: boolean }>(endPoint, body);

    return true;
  }

  /**
   * Delete a given payment -- Note you can only delete non processed payments
   * ```
   * const success = await client.payment.remove('P-aabbccc', 'B-xx99bb');
   * ```
   * @param paymentId Payment Rails payment id (e.g. "P-aabccc")
   * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
   */
  async remove(paymentId: string, batchId: string) {
    const endPoint = buildURL('batches', batchId, 'payments', paymentId);

    const result = await this.gateway.client.remove<{ ok: boolean }>(endPoint);

    return true;
  }

  /**
   * Search for payments in a given batch
   * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
   * @param page Page number (1 based)
   * @param pageSize Page size (0...1000)
   * @param term Any search terms to look for
   */
  async search(
    batchId: string,
    page: number = 1,
    pageSize: number = 10,
    term: string = "",
  ) {
    // tslint:disable-next-line:max-line-length
    const endPoint = buildURL('batches', batchId, 'payments');
    const query = querystring.stringify({
      page,
      pageSize,
      search: term,
    });

    const result = await this.gateway.client.get<types.Payment.ListResult>(`${endPoint}?${query}`);

    return result.payments.map(p => Payment.factory(p));
  }
}
