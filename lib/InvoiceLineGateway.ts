import { Gateway } from "./Gateway";
import { Configuration } from "./Configuration";
import { buildURL } from "./util";
import { ApiResponse } from "./types";
import { InvoiceLine, InvoiceLineInput } from "./InvoiceLine";

export class InvoiceLineGateway {
  gateway: Gateway;
  config: Configuration;

  constructor(gateway: Gateway) {
    this.gateway = gateway;
    this.config = gateway.config;
  }

  async create(invoiceId: string, invoiceLines: InvoiceLineInput[]) {
    const endPoint = buildURL('invoices/create-lines');

    const result = await this.gateway.client.post<ApiResponse<InvoiceLine>>(
      endPoint,
      {
        invoiceId: invoiceId,
        ...{ lines: invoiceLines },
      },
    );

    // TODO: Fix ambiguous type in ApiResponse interface
    return result.invoice.lines.map(line => Object.assign(new InvoiceLine(), line));
  }
}
