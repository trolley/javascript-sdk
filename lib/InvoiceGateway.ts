import { Configuration } from './Configuration';
import { Gateway } from './Gateway';
import { Invoice, InvoiceInput } from './Invoice';
import { ApiResponse } from './types';
import { buildURL, PaginatedArray } from "./util";

export class InvoiceGateway {
    gateway: Gateway;
    config: Configuration;

    constructor(gateway: Gateway) {
        this.gateway = gateway;
        this.config = this.gateway.config;
    }

    async find(invoiceId: string) {
        const endPoint = buildURL('invoices/get');

        const result = await this.gateway.client.post<ApiResponse<Invoice>>(
            endPoint,
            {
                invoiceId: invoiceId,
            },
        );

        return Object.assign(new Invoice(), result.invoice);
    }

    async create(body: InvoiceInput) {
        const endPoint = buildURL('invoices/create');

        const result = await this.gateway.client.post<ApiResponse<Invoice>>(
            endPoint,
            body,
        );

        return Object.assign(new Invoice(), result.invoice);
    }

    async update(invoiceId: string, body: InvoiceInput) {
        const endPoint = buildURL('invoices/update');

        const result = await this.gateway.client.post<ApiResponse<Invoice>>(
            endPoint,
            {
                invoiceId: invoiceId,
                ...body,
            },
        );

        return Object.assign(new Invoice(), result.invoice);
    }

    async remove(invoiceIds: string[]) {
        const endPoint = buildURL('invoices/delete');

        const result = await this.gateway.client.post<ApiResponse<Invoice>>(
            endPoint,
            {
                invoiceIds: invoiceIds,
            },
        );

        return true;
    }

    async search(body: any) {
        const endPoint = buildURL('invoices/search');

        const result = await this.gateway.client.post<ApiResponse<Invoice[]>>(
          endPoint,
          body,
        );

        const invoices = result.invoices.map((line: Invoice) => Object.assign(new Invoice(), line));
        const meta = result.meta;

        return new PaginatedArray<Invoice>(meta, ...invoices)
    }
}
