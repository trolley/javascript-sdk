import { Configuration } from "./Configuration";
import { Gateway } from "./Gateway";
import { RecipientAccount } from "./RecipientAccount";
import { buildURL } from './util';
import * as types from "./types";

export class RecipientAccountGateway {
  /**
   * @private
   */
  gateway: Gateway;
  /**
   * @private
   */
  config: Configuration;

  /**
   * @private
   */
  constructor(gateway: Gateway) {
    this.gateway = gateway;
    this.config = this.gateway.config;
  }

  /**
   * Fetch all of the accounts for a given Trolley recipient
   * ```
   * const accounts = await client.recipientAccount.all('R-1234');
   * ```
   * @param recipientId The Trolley recipient ID (e.g. R-xyzzy)
   * @throws {NotFound} if recipient doesn't exist
   */
  async all(recipientId: string) {
    const endPoint = buildURL('recipients', recipientId, 'accounts');

    const result = await this.gateway.client.get<
      types.Recipient.AccountListResponse
    >(endPoint);

    return result.accounts.map(a => RecipientAccount.factory(a));
  }

  /**
   * Fetch a specific account for a given Trolley recipient
   * ```
   * const account = await client.recipientAccount.find('R-1234', 'A-789');
   * ```
   * @param recipientId The Trolley recipient ID (e.g. R-xyzzy)
   * @param accountId The Trolley account ID (e.g. A-xyzzy)
   * @throws {NotFound} if account or recipient don't exist
   */
  async find(recipientId: string, accountId: string) {
    const endPoint = buildURL('recipients', recipientId, 'accounts', accountId);

    const result = await this.gateway.client.get<
      types.Recipient.AccountResponse
    >(endPoint);

    return RecipientAccount.factory(result.account);
  }

  /**
   * Create a new recipient account
   * ```
   * const account = await client.recipientAccount.create('R-1234', {
   *   type: "bank-transfer",
   *   primary: true,
   *   country: "CA",
   *   currency: "CAD",
   *   accountNum: "012345678",
   *   bankId: "004",
   *   branchId: "47261",
   *   accountHolderName: "John Smith",
   * });
   * ```
   * @param recipientId The Trolley recipient ID (e.g. R-xyzzy)
   * @param body Account information
   */
  async create(recipientId: string, body: any) {
    const endPoint = buildURL('recipients', recipientId, 'accounts');

    const result = await this.gateway.client.post<
      types.Recipient.AccountResponse
    >(endPoint, body);

    return RecipientAccount.factory(result.account);
  }

  /**
   * Update a recipient account.
   *   Note: Updating an account will create a new account ID if it contains any property that
   *         isn't just "primary"
   * ```
   * const account = await client.recipientAccount.update('R-1234', 'A-789', {
   *   accountHolderName: "Tom Jones",
   * });
   * ```
   * @param recipientId The Trolley recipient ID (e.g. R-xyzzy)
   * @param accountId The Trolley account ID (e.g. A-xyzzy)
   * @param body Account information
   */
  async update(recipientId: string, accountId: string, body: any) {
    const endPoint = buildURL('recipients', recipientId, 'accounts', accountId);

    const result = await this.gateway.client.patch<
      types.Recipient.AccountResponse
    >(endPoint, body);

    return RecipientAccount.factory(result.account);
  }

  /**
   * Delete the given recipient account. This will only return success, otherwise it will
   * throw an exception (e.g. NotFound)
   * ```
   * const success = await client.recipientAccount.remove('R-1234', 'A-789');
   * ```
   * @param recipientId The Trolley recipient ID (e.g. R-xyzzy)
   * @param accountId The Trolley account ID (e.g. A-xyzzy)
   */
  async remove(recipientId: string, accountId: string) {
    const endPoint = buildURL('recipients', recipientId, 'accounts', accountId);

    const result = await this.gateway.client.remove<{ ok: boolean }>(endPoint);

    return true;
  }
}
