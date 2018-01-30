import { Configuration } from "./Configuration";
import { Gateway } from "./Gateway";
import { DownForMaintenance } from "./exceptions";
import { Balance } from "./Balance";
import * as types from "./types";

export class BalanceGateway {
  gateway: Gateway;
  config: Configuration;

  constructor(gateway: Gateway) {
    this.gateway = gateway;
    this.config = this.gateway.config;
  }

  async all() {
    const endPoint = "/v1/profile/balances/";

    const result = await this.gateway.client.get<types.Balance.ListResult>(
      endPoint,
    );

    return Object.values(result.balances).map(b => Balance.factory(b));
  }

  async find(term: string) {
    const endPoint = `/v1/profile/balances/${encodeURIComponent(term)}`;

    const result = await this.gateway.client.get<types.Balance.Result>(endPoint);

    return Balance.factory(result.balance);
  }
}
