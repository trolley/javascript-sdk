import { Configuration } from "./Configuration";
import { Gateway } from "./Gateway";
import { RecipientAccount } from "./RecipientAccount";
import { DownForMaintenance } from "./exceptions";
import * as types from "./types";

export class RecipientAccountGateway {
  gateway: Gateway;
  config: Configuration;

  constructor(gateway: Gateway) {
    this.gateway = gateway;
    this.config = this.gateway.config;
  }

  async all(recipientId: string) {
    const endPoint = `/v1/recipients/${encodeURIComponent(recipientId)}/accounts/`;

    const result = await this.gateway.client.get<
      types.Recipient.AccountListResponse
    >(endPoint);

    return result.accounts.map(a => RecipientAccount.factory(a));
  }

  async find(recipientId: string, recipientAccountId: string) {
    const endPoint = `/v1/recipients/${encodeURIComponent(recipientId)}/accounts/${encodeURIComponent(recipientAccountId)}`;

    const result = await this.gateway.client.get<
      types.Recipient.AccountResponse
    >(endPoint);

    return RecipientAccount.factory(result.account);
  }

  async create(recipientId: string, body: any) {
    const endPoint = `/v1/recipients/${encodeURIComponent(recipientId)}/accounts`;

    const result = await this.gateway.client.post<
      types.Recipient.AccountResponse
    >(endPoint, body);

    return RecipientAccount.factory(result.account);
  }

  async update(recipientId: string, recipientAccountId: string, body: any) {
    const endPoint = `/v1/recipients/${encodeURIComponent(recipientId)}/accounts/${encodeURIComponent(recipientAccountId)}`;

    const result = await this.gateway.client.patch<
      types.Recipient.AccountResponse
    >(endPoint, body);

    return RecipientAccount.factory(result.account);
  }

  async remove(recipientId: string, recipientAccountId: string) {
    const endPoint = `/v1/recipients/${encodeURIComponent(recipientId)}/accounts/${encodeURIComponent(recipientAccountId)}`;

    const result = await this.gateway.client.remove<{ ok: boolean }>(endPoint);

    return true;
  }
}
