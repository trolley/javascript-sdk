import { Configuration } from "./Configuration";
import { Gateway } from "./Gateway";
import * as types from "./types";
import { buildURL } from "./util";

export class FeesGateway {
  gateway: Gateway;
  config: Configuration;

  constructor(gateway: Gateway) {
    this.gateway = gateway;
    this.config = this.gateway.config;
  }

  async searchRoutePricing(body: types.Fees.SearchRoutePricingRequest = {}) {
    const endPoint = buildURL("fees", "route-pricing", "search");
    const result = await this.gateway.client.post<types.Fees.SearchRoutePricingResponse>(
      endPoint,
      body,
    );

    return result.fees;
  }

  async createRevenueStream(body: types.Fees.CreateRevenueStreamRequest) {
    const endPoint = buildURL("fees", "revenue-stream", "create");
    const result = await this.gateway.client.post<types.Fees.RevenueStreamResponse>(
      endPoint,
      body,
    );

    return result.revenueStream;
  }

  async updateRevenueStream(body: types.Fees.UpdateRevenueStreamRequest) {
    const endPoint = buildURL("fees", "revenue-stream", "update");
    const result = await this.gateway.client.post<types.Fees.RevenueStreamResponse>(
      endPoint,
      body,
    );

    return result.revenueStream;
  }
}
