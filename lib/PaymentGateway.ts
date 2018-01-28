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
    const endPoint = `/v1/payments/${paymentId}`;

    const result = await this.gateway.client.get<types.Payment.Result>(endPoint);

    if (result.ok) {
      return Payment.factory(result.payment);
    } else {
      throw new DownForMaintenance();
    }
  }

  async create(batchId: string, body: any) {
    const endPoint = `/v1/batches/${batchId}/payments`;

    const result = await this.gateway.client.post<types.Payment.Result>(endPoint, body);

    if (result.ok) {
      return Payment.factory(result.payment);
    } else {
      throw new DownForMaintenance();
    }
  }

  async update(paymentId: string, batchId: string, body: any) {
    const endPoint = `/v1/batches/${batchId}/payments/${paymentId}`;

    const result = await this.gateway.client.patch<{ ok: boolean }>(endPoint, body);

    if (result.ok) {
      return true;
    } else {
      throw new DownForMaintenance();
    }
  }

  async remove(paymentId: string, batchId: string) {
    const endPoint = `/v1/batches/${batchId}/payments/${paymentId}`;

    const result = await this.gateway.client.remove<{ ok: boolean }>(endPoint);

    if (result.ok) {
      return true;
    } else {
      throw new DownForMaintenance();
    }
  }

  async search(
    batchId: string,
    page: number = 1,
    pageSize: number = 10,
    term: string = "",
  ) {
    const endPoint = `/v1/batches/${batchId}/payments/?&search=${term}&page=${page}&pageSize=${pageSize}`;

    const result = await this.gateway.client.get<types.Payment.ListResult>(endPoint);

    if (result.ok) {
      return result.payments.map(p => Payment.factory(p));
    } else {
      throw new DownForMaintenance();
    }
  }
}
