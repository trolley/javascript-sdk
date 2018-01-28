import { Configuration } from "./Configuration";
import { Gateway } from "./Gateway";
import { RecipientAccount } from "./RecipientAccount";
import { DownForMaintenance } from "./exceptions";
import * as types from "../types";

export class RecipientAccountGateway {
  gateway: Gateway;
  config: Configuration;

  constructor(gateway: Gateway) {
    this.gateway = gateway;
    this.config = this.gateway.config;
  }

  async all(recipientId: string) {
    const endPoint = `/v1/recipients/${recipientId}/accounts/`;

    const result = await this.gateway.client.get<
      types.Recipient.AccountListResponse
    >(endPoint);

    if (result.ok) {
      return result.accounts.map(a => RecipientAccount.factory(a));
    } else {
      throw new DownForMaintenance();
    }
  }

  async find(recipientId: string, recipientAccountId: string) {
    const endPoint = `/v1/recipients/${recipientId}/accounts/${recipientAccountId}`;

    const result = await this.gateway.client.get<
      types.Recipient.AccountResponse
    >(endPoint);

    if (result.ok) {
      return RecipientAccount.factory(result.account);
    } else {
      throw new DownForMaintenance();
    }
  }

  async create(recipientId: string, body: any) {
    const endPoint = `/v1/recipients/${recipientId}/accounts`;

    const result = await this.gateway.client.post<
      types.Recipient.AccountResponse
    >(endPoint, body);

    if (result.ok) {
      return RecipientAccount.factory(result.account);
    } else {
      throw new DownForMaintenance();
    }
  }

  async update(recipientId: string, recipientAccountId: string, body: any) {
    const endPoint = `/v1/recipients/${recipientId}/accounts/${recipientAccountId}`;

    const result = await this.gateway.client.patch<
      types.Recipient.AccountResponse
    >(endPoint, body);

    if (result.ok) {
      return RecipientAccount.factory(result.account);
    } else {
      throw new DownForMaintenance();
    }
  }

  async remove(recipientId: string, recipientAccountId: string) {
    const endPoint = `/v1/recipients/${recipientId}/accounts/${recipientAccountId}`;

    const result = await this.gateway.client.remove<{ ok: boolean }>(endPoint);

    if (result.ok) {
      return true;
    } else {
      throw new DownForMaintenance();
    }
  }
}
