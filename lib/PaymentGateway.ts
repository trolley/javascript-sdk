import { Configuration } from "./Configuration";
import { Gateway } from "./Gateway";
import { Payment } from './Payment';
import * as types from "./types";
import { DownForMaintenance } from "./exceptions";

export class PaymentGateway {
  gateway: Gateway;
  config: Configuration;

  constructor(gateway: Gateway) {
    this.gateway = gateway;
    this.config = this.gateway.config;
  }

  async find(paymentId: string) {
    const endPoint = `/v1/payments/${encodeURIComponent(paymentId)}`;

    const result = await this.gateway.client.get<types.Payment.Result>(endPoint);

    return Payment.factory(result.payment);
  }

  async create(batchId: string, body: any) {
    const endPoint = `/v1/batches/${encodeURIComponent(batchId)}/payments`;

    const result = await this.gateway.client.post<types.Payment.Result>(endPoint, body);

    return Payment.factory(result.payment);
  }

  async update(paymentId: string, batchId: string, body: any) {
    const endPoint = `/v1/batches/${encodeURIComponent(batchId)}/payments/${encodeURIComponent(paymentId)}`;

    const result = await this.gateway.client.patch<{ ok: boolean }>(endPoint, body);

    return true;
  }

  async remove(paymentId: string, batchId: string) {
    const endPoint = `/v1/batches/${encodeURIComponent(batchId)}/payments/${encodeURIComponent(paymentId)}`;

    const result = await this.gateway.client.remove<{ ok: boolean }>(endPoint);

    return true;
  }

  async search(
    batchId: string,
    page: number = 1,
    pageSize: number = 10,
    term: string = "",
  ) {
    // tslint:disable-next-line:max-line-length
    const endPoint = `/v1/batches/${encodeURIComponent(batchId)}/payments/?&search=${encodeURIComponent(term)}&page=${encodeURIComponent(String(page))}&pageSize=${encodeURIComponent(String(pageSize))}`;

    const result = await this.gateway.client.get<types.Payment.ListResult>(endPoint);

    return result.payments.map(p => Payment.factory(p));
  }
}
