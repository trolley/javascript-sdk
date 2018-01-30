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
    const endPoint = `/v1/recipients/${encodeURIComponent(recipientId)}`;

    const result = await this.gateway.client.get<types.Recipient.Response>(endPoint);

    return Recipient.factory(result.recipient);
  }

  async create(body: any) {
    const endPoint = "/v1/recipients/";

    const result = await this.gateway.client.post<types.Recipient.Response>(endPoint, body);

    return Recipient.factory(result.recipient);
  }

  async update(recipientId: string, body: any) {
    const endPoint = `/v1/recipients/${encodeURIComponent(recipientId)}`;

    const result = await this.gateway.client.patch<types.Recipient.Response>(endPoint, body);

    return true;
  }

  async remove(recipientId: string) {
    const endPoint = `/v1/recipients/${encodeURIComponent(recipientId)}`;

    const result = await this.gateway.client.remove<{ ok: boolean }>(endPoint);

    return true;
  }

  async search(page: number, pageSize: number, search: string) {
    // tslint:disable-next-line:max-line-length
    const endPoint = `/v1/recipients/?&search=${encodeURIComponent(search)}&page=${encodeURIComponent(String(page))}&pageSize=${encodeURIComponent(String(pageSize))}`;

    const result = await this.gateway.client.get<types.Recipient.ListResponse>(endPoint);

    return result.recipients.map(r => Recipient.factory(r));
  }
}
