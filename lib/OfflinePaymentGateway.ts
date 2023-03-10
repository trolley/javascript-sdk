import { Configuration } from "./Configuration";
import { Gateway } from "./Gateway";
import { OfflinePayment } from "./OfflinePayment";
import { buildURL } from "./util";
import * as querystring from "querystring";
import * as types from "./types";

export class OfflinePaymentGateway {
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
   * Create a new offline payment
   * ```
   * const payment = await client.offlinePayment.create('OP-xx99bb', {
   *   taxReportable: true,
   *   amount: "10.00",
   *   currency: "USD",
   *   withholdingAmount: "2.40",
   *   withholdingCurrency: "USD",
   * });
   * ```
   * @param recipientId Trolley recipient id (e.g. "R-xx999bb")
   * @param body Offline Payment information
   */
  async create(recipientId: string, body: any) {
    const endPoint = buildURL("recipients", recipientId, "offlinePayments");

    const result = await this.gateway.client.post<
      types.OfflinePayment.Response
    >(endPoint, body);

    return OfflinePayment.factory(result.offlinePayment);
  }

  /**
   * Update a given offline payment
   * ```
   * const success = await client.offlinePayment.update('R-aabbccc', 'OP-xx99bb', {
   *   taxReportable: true,
   *   amount: "10.00",
   *   currency: "USD",
   *   withholdingAmount: "2.40",
   *   withholdingCurrency: "USD",
   * });
   * ```
   * @param recipientId Trolley recipient id (e.g. "R-aabccc")
   * @param offlinePaymentId Trolley offline payment id (e.g. "OP-xx999bb")
   * @param body Payment update information
   */
  async update(recipientId: string, offlinePaymentId: string, body: any) {
    const endPoint = buildURL(
      "recipients",
      recipientId,
      "offlinePayments",
      offlinePaymentId,
    );

    await this.gateway.client.patch<
         types.OfflinePayment.Response
        >(endPoint, body);

    return true;
  }

  /**
   * Delete a given offline payment
   * ```
   * const success = await client.offlinePayment.remove('R-aabbccc', 'OP-xx99bb');
   * ```
   * @param recipientId Trolley recipient id (e.g. "R-aabccc")
   * @param offlinePaymentId Trolley offline payment id (e.g. "OP-xx999bb")
   */
  async remove(recipientId: string, offlinePaymentId: string) {
    const endPoint = buildURL(
      "recipients",
      recipientId,
      "offlinePayments",
      offlinePaymentId,
    );

    const result = await this.gateway.client.remove<{ ok: boolean }>(endPoint);

    return true;
  }

  /**
   * Search for offline payments
   * @param query Object containing either search key, usually either "recipientId"
   * @param page Page number (1 based)
   * @param pageSize Page size (0...1000)
   * @param term Any search terms to look for
   */
  async search(
    query: { [key: string]: string },
    page: number = 1,
    pageSize: number = 10,
    term: string = "",
  ) {
    // tslint:disable-next-line:max-line-length

    const endPoint = !!(query && query.recipientId)
      ? buildURL("recipients", query.recipientId, "offline-payments")
      : buildURL("offline-payments");

    const urlQuery = querystring.stringify({
      ...query,
      page,
      pageSize,
      search: term,
    });

    const result = await this.gateway.client.get<
      types.OfflinePayment.ListResponse
    >(`${endPoint}?${urlQuery}`);

    return result.offlinePayments.map(p => OfflinePayment.factory(p));
  }
}
