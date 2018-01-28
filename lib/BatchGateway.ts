import { Configuration } from "./Configuration";
import { Gateway } from "./Gateway";
import { DownForMaintenance } from "./exceptions";
import * as types from "./types";
import { Batch } from './Batch';
import { Payment } from './Payment';

export class BatchGateway {
  gateway: Gateway;
  config: Configuration;

  constructor(gateway: Gateway) {
    this.gateway = gateway;
    this.config = this.gateway.config;
  }

  async all() {
    const endPoint = "/v1/batches/";

    const result = await this.gateway.client.get<types.Batch.ListResult>(endPoint);

    if (result.ok) {
      return result.batches.map(b => Batch.factory(b));
    } else {
      throw new DownForMaintenance();
    }
  }

  async find(batchId: string) {
    const endPoint = `/v1/batches/${batchId}`;

    const result = await this.gateway.client.get<types.Batch.Result>(endPoint);

    if (result.ok) {
      return Batch.factory(result.batch);
    } else {
      throw new DownForMaintenance();
    }
  }

  async create(body: any) {
    const endPoint = "/v1/batches/";

    const result = await this.gateway.client.post<types.Batch.Result>(endPoint, body);

    if (result.ok) {
      return Batch.factory(result.batch);
    } else {
      throw new DownForMaintenance();
    }
  }

  async update(batchId: string, body: any) {
    const endPoint = `/v1/batches/${batchId}`;

    const result = await this.gateway.client.patch<types.Batch.Result>(endPoint, body);

    if (result.ok) {
      return true;
    } else {
      throw new DownForMaintenance();
    }
  }

  async remove(batchId: string) {
    const endPoint = `/v1/batches/${batchId}`;

    const result = await this.gateway.client.remove<{ ok: boolean }>(endPoint);

    if (result.ok) {
      return true;
    } else {
      throw new DownForMaintenance();
    }
  }

  async search(page = 1, pageSize = 10, search = "") {
    const endPoint = `/v1/batches/?&search=${search}&page=${page}&pageSize=${pageSize}`;

    const result = await this.gateway.client.get<types.Batch.ListResult>(endPoint);

    if (result.ok) {
      return result.batches.map(b => Batch.factory(b));
    } else {
      throw new DownForMaintenance();
    }
  }

  async payments(batchId: string, page: number = 1, pageSize: number = 10) {
    const endPoint = `/v1/batches/${batchId}/payments`;

    const result = await this.gateway.client.get<types.Payment.ListResult>(endPoint);

    if (result.ok) {
      return result.payments.map(b => Payment.factory(b));
    } else {
      throw new DownForMaintenance();
    }
  }

  async generateQuote(batchId: string) {
    const endPoint = `/v1/batches/${batchId}/generate-quote`;

    const result = await this.gateway.client.post<types.Batch.Result>(endPoint);

    if (result.ok) {
      return Batch.factory(result.batch);
    } else {
      throw new DownForMaintenance();
    }
  }

  async startProcessing(batchId: string) {
    const endPoint = `/v1/batches/${batchId}/start-processing`;

    const result = await this.gateway.client.post<types.Batch.Result>(endPoint);

    if (result.ok) {
      return Batch.factory(result.batch);
    } else {
      throw new DownForMaintenance();
    }
  }

  async summary(batchId: string) {
    const endPoint = `/v1/batches/${batchId}/summary`;

    const result = await this.gateway.client.get<types.BatchSummary.Result>(endPoint);

    if (result.ok) {
      return result.batchSummary;
    } else {
      throw new DownForMaintenance();
    }
  }
}
