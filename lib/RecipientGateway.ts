import { Configuration } from "./Configuration";
import { Recipient } from './Recipient';
import { Gateway } from "./Gateway";
import * as types from "./types";
import { buildURL } from './util';
import * as querystring from 'querystring';

export interface RecipientInput {
    referenceId?: string;
    email?: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    type?: "individual" | "business";
    dob?: string;
    ssn?: string;
    governmentId?: string;
    passport?: string;
    language?: string;
    address?: {
      phone?: string;
      street1?: string;
      street2?: string;
      city?: string;
      postalCode?: string;
      region?: string;
      country?: string;
    };
    account?: any;
}

export class RecipientGateway {
  /**
   * @hidden
   */
  private gateway: Gateway;
  /**
   * @hidden
   */
  private config: Configuration;

  /**
   * @param gateway gateway object
   * @private
   */
  constructor(gateway: Gateway) {
    this.gateway = gateway;
    this.config = this.gateway.config;
  }

  /**
   * Find a specific recipient by their Trolley recipient ID
   * ```
   * const recipient = await client.recipient.find('R-1234');
   * ```
   * @param recipientId The Trolley recipient ID (e.g. R-xyzzy)
   */
  async find(recipientId: string) {
    const endPoint = buildURL('recipients', recipientId);

    const result = await this.gateway.client.get<types.Recipient.Response>(endPoint);

    return Recipient.factory(result.recipient);
  }

  /**
   * Create a given recipient
   * ```
   * const recipient = await client.recipient.create({
   *   type: "individual",
   *   firstName: "Tom",
   *   lastName: "Jones",
   *   email: "tom.jones@example.com",
   *   address: {
   *      street1: "123 Main St",
   *      country: "US",
   *   }
   * });
   * ```
   * @param body The recipient information to create
   */
  async create(body: RecipientInput) {
    const endPoint = buildURL('recipients');

    const result = await this.gateway.client.post<types.Recipient.Response>(endPoint, body);

    return Recipient.factory(result.recipient);
  }

  /**
   * Update the given recipient
   * ```
   * const recipient = await client.recipient.update('R-1234', {
   *   firstName: "Carl",
   * });
   * ```
   * @param recipientId The Trolley recipient ID (e.g. R-xyzzy)
   * @param body the changes to make to the recipient
   */
  async update(recipientId: string, body: RecipientInput) {
    const endPoint = buildURL('recipients', recipientId);

    await this.gateway.client.patch<types.Recipient.Response>(endPoint, body);

    return true;
  }

  /**
   * Delete the given recipient.
   * ```
   * const status = await client.recipient.remove('R-123');
   * ```
   * @param recipientId The Trolley recipient ID (e.g. R-xyzzy)
   */
  async remove(recipientId: string | string[]) {
    let endPoint = "";
    let recipients: string[] = [];

    if (Array.isArray(recipientId)) {
      recipients = recipientId;
      endPoint = buildURL('recipients');
    } else {
      endPoint = buildURL('recipients', recipientId);
    }

    const result = await this.gateway.client.remove<{ ok: boolean }>(endPoint, recipients);

    return true;
  }

  async search(page: number = 1, pageSize: number = 10, term: string = "") {
    // tslint:disable-next-line:max-line-length
    const endPoint = buildURL('recipients');
    const query = querystring.stringify({
      page,
      pageSize,
      search: term,
    });

    const result = await this.gateway.client.get<types.Recipient.ListResponse>(`${endPoint}?${query}`);

    return result.recipients.map(r => Recipient.factory(r));
  }
}
