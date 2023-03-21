import { Gateway } from "./Gateway";
import { Configuration } from "./Configuration";
import { buildURL } from "./util";
import { ApiResponse } from "./types";
import { InvoicePayment, InvoicePaymentInput } from "./InvoicePayment";

export class InvoicePaymentGateway {
    gateway: Gateway;
    config: Configuration;

    constructor(gateway: Gateway) {
        this.gateway = gateway;
        this.config = gateway.config;
    }

    async create(invoicePayment: InvoicePaymentInput) {
        const endPoint = buildURL('invoices/payment/create');

        const result = await this.gateway.client.post<ApiResponse<InvoicePayment>>(
            endPoint,
            invoicePayment,
        );

        return Object.assign(new InvoicePayment(), result.invoicePayment);
    }

    async update(invoiceId: string, invoicePayment: any) {
        const endPoint = buildURL('invoices/payment/update');

        const result = await this.gateway.client.post<ApiResponse<InvoicePayment>>(
            endPoint,
            {
                invoiceId: invoiceId,
                ...invoicePayment,
            },
        );

        return Object.assign(new InvoicePayment(), result.invoicePayment);
    }

    async delete(invoiceId: string, invoicePaymentId: string) {
        const endPoint = buildURL('invoices/payment/delete');

        const result = await this.gateway.client.post<ApiResponse<InvoicePayment>>(
            endPoint,
            {
                invoiceId: invoiceId,
                invoicePaymentId: invoicePaymentId,
            },
        );

        return true;
    }

    async search(invoiceId: string, query: any) {
        const endPoint = buildURL('invoices/payments/search');

        const result = await this.gateway.client.post<ApiResponse<InvoicePayment>>(
            endPoint,
            {
                invoiceId: invoiceId,
                ...query,
            },
        );

        return result.invoicePayments;
    }
}