import { Configuration } from "./Configuration";
import { Gateway } from "./Gateway";
import { PaginatedArray, buildURL } from "./util";
import * as querystring from "querystring";
import * as types from "./types";

export class VerificationGateway {
  gateway: Gateway;
  config: Configuration;

  constructor(gateway: Gateway) {
    this.gateway = gateway;
    this.config = this.gateway.config;
  }

  async search(filters: { [key: string]: any } = {}) {
    const endPoint = buildURL("verifications");
    const urlQuery = querystring.stringify(filters);
    const result = await this.gateway.client.get<types.Verification.ListResult>(
      urlQuery ? `${endPoint}?${urlQuery}` : endPoint,
    );
    return new PaginatedArray<types.Verification.Verification>(result.meta, ...result.verifications);
  }

  async all(filters: { [key: string]: any } = {}) {
    return this.search(filters);
  }

  async expire(body: any) {
    const endPoint = buildURL("verifications", "expire");
    const result = await this.gateway.client.patch<types.Verification.ListResult>(endPoint, body);
    return new PaginatedArray<types.Verification.Verification>(result.meta, ...result.verifications);
  }

  async trigger(verificationType: string, body: any) {
    const endPoint = buildURL("verifications", verificationType, "trigger");
    const result = await this.gateway.client.post<types.Verification.ListResult>(endPoint, body);
    return new PaginatedArray<types.Verification.Verification>(result.meta, ...result.verifications);
  }

  async triggerWatchlist(body: any) {
    return this.trigger("watchlist", body);
  }

  async trigger_watchlist(body: any) {
    return this.triggerWatchlist(body);
  }
}
