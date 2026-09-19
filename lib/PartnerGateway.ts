import { Configuration } from "./Configuration";
import { Gateway } from "./Gateway";

export class PartnerGateway {
  gateway: Gateway;
  config: Configuration;

  constructor(gateway: Gateway) {
    this.gateway = gateway;
    this.config = gateway.config;
  }

  async getFees() {
    return this.gateway.client.get<any>("/v1/fees");
  }

  async updateFees(body: { [key: string]: any }) {
    return this.gateway.client.patch<any>("/v1/fees", body);
  }

  async listPayoutMethods() {
    return this.gateway.client.get<any>("/v1/payout-methods");
  }

  async getPayoutMethod(payoutMethod: string) {
    return this.gateway.client.get<any>(`/v1/payout-methods/${encodeURIComponent(payoutMethod)}`);
  }

  async updatePayoutMethod(payoutMethod: string, body: { [key: string]: any }) {
    return this.gateway.client.patch<any>(
      `/v1/payout-methods/${encodeURIComponent(payoutMethod)}`,
      body,
    );
  }

  async getProcessingSettings() {
    return this.gateway.client.get<any>("/v1/processing-settings");
  }

  async updateProcessingSettings(body: { [key: string]: any }) {
    return this.gateway.client.patch<any>("/v1/processing-settings", body);
  }

  async getWhiteLabelDnsRecords() {
    return this.gateway.client.get<any>("/v1/white-label/dns-records");
  }

  async verifyWhiteLabelDnsRecords() {
    return this.gateway.client.post<any>("/v1/white-label/dns-records/verify", {});
  }

  async deleteWhiteLabelEmail() {
    return this.gateway.client.remove<any>("/v1/white-label/email");
  }

  async updateWhiteLabelIcon(body: { [key: string]: any }) {
    return this.gateway.client.patch<any>("/v1/white-label/icon", body);
  }

  async getWhiteLabelSettings() {
    return this.gateway.client.get<any>("/v1/white-label");
  }

  async updateWhiteLabelSettings(body: { [key: string]: any }) {
    return this.gateway.client.patch<any>("/v1/white-label", body);
  }

  async getWidgetConfiguration() {
    return this.gateway.client.get<any>("/v1/iframe/config");
  }

  async updateWidgetConfiguration(body: { [key: string]: any } = {}) {
    return this.gateway.client.post<any>("/v1/iframe/config", body);
  }
}
