import { Gateway } from "./Gateway";
import { Configuration } from "./Configuration";
import { buildURL } from "./util";
import { ApiResponse } from "./types";
import { InvoiceLine, InvoiceLineInput } from "./InvoiceLine";
import { Invoice } from "./Invoice";

export class InvoiceLineGateway {
  gateway: Gateway;
  config: Configuration;

  constructor(gateway: Gateway) {
    this.gateway = gateway;
    this.config = gateway.config;
  }

  async create(invoiceId: string, invoiceLines: InvoiceLineInput[]) {
    const endPoint = buildURL('invoices/create-lines');

    const result = await this.gateway.client.post<ApiResponse<Invoice>>(
      endPoint,
      {
        invoiceId: invoiceId,
        ...{ lines: invoiceLines },
      },
    );

    return result.invoice.lines.map((line: InvoiceLine) => Object.assign(new InvoiceLine(), line));
  }

  async update(invoiceId: string, body: any) {
    const endPoint = buildURL('invoices/update-lines');

    const result = await this.gateway.client.post<ApiResponse<Invoice>>(
      endPoint,
      {
        invoiceId: invoiceId,
        ...body,
      },
    );

    return Object.assign(new Invoice(), result.invoice);
  }

  async delete(invoiceId: string, lineIds: string[]) {
    const endPoint = buildURL('invoices/delete-lines');

    const result = await this.gateway.client.post<ApiResponse<Invoice>>(
      endPoint,
      {
        invoiceId: invoiceId,
        invoiceLineIds: lineIds,
      },
    );

    return true;
  }
}
