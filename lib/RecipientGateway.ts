import { Configuration } from "./Configuration";
import { Recipient } from './Recipient';
import { Gateway } from "./Gateway";
import * as types from "./types";
import { DownForMaintenance } from "./exceptions";

export class RecipientGateway {
  gateway: Gateway;
  config: Configuration;

  constructor(gateway: Gateway) {
    this.gateway = gateway;
    this.config = this.gateway.config;
  }

  async find(recipientId: string) {
    const endPoint = `/v1/recipients/${recipientId}`;

    const result = await this.gateway.client.get<types.Recipient.Response>(endPoint);

    if (result.ok) {
      return Recipient.factory(result.recipient);
    } else {
      throw new DownForMaintenance();
    }
  }

  async create(body: any) {
    const endPoint = "/v1/recipients/";

    const result = await this.gateway.client.post<types.Recipient.Response>(endPoint, body);

    if (result.ok) {
      return Recipient.factory(result.recipient);
    } else {
      throw new DownForMaintenance();
    }
  }

  async update(recipientId: string, body: any) {
    const endPoint = `/v1/recipients/${recipientId}`;

    const result = await this.gateway.client.patch<types.Recipient.Response>(endPoint, body);

    if (result.ok) {
      return true;
    } else {
      throw new DownForMaintenance();
    }
  }

  async remove(recipientId: string) {
    const endPoint = `/v1/recipients/${recipientId}`;

    const result = await this.gateway.client.remove<{ ok: boolean }>(endPoint);
    if (result.ok) {
      return true;
    } else {
      throw new DownForMaintenance();
    }
  }

  async search(page: number, pageSize: number, search: string) {
    const endPoint = `/v1/recipients/?&search=${search}&page=${page}&pageSize=${pageSize}`;

    const result = await this.gateway.client.get<types.Recipient.ListResponse>(endPoint);
    if (result.ok) {
      return result.recipients.map(r => Recipient.factory(r));
    } else {
      throw new DownForMaintenance();
    }
  }
}
