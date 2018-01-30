import { Configuration } from "./Configuration";
import { Gateway } from "./Gateway";
import { Balance } from "./Balance";
import * as types from "./types";
import { buildURL } from './util';

export class BalancesGateway {
  /**
   * @private
   */
  private gateway: Gateway;
  /**
   * @private
   */
  private config: Configuration;

  /**
   * @private
   * @param gateway gateway object
   */
  constructor(gateway: Gateway) {
    this.gateway = gateway;
    this.config = this.gateway.config;
  }

  /**
   * Fetch the account balance for all enabled bank accounts
   * ```
   * const balances = await client.balances.all();
   * ```
   */
  async all() {
    const endPoint = buildURL('profile', 'balances');

    const result = await this.gateway.client.get<types.Balance.ListResult>(
      endPoint,
    );

    return Object.values(result.balances).map(Balance.factory);
  }

  /**
   * Fetch the account balance for the given account type
   * ```
   * const balances = await client.balances.find("paymentrails");
   * ```
   * @param kind The account type to get the balances for
   */
  async find(kind: "paypal" | "paymentrails") {
    const endPoint = buildURL('profile', 'balances', kind);

    const result = await this.gateway.client.get<types.Balance.ListResult>(endPoint);

    return Object.values(result.balances).map(Balance.factory);
  }
}
