import { Gateway } from "./Gateway";
import { Configuration } from "./Configuration";
import { buildURL } from "./util";
import { ApiResponse } from "./types";
import { InvoicePayment, InvoicePaymentInput, InvoicePaymentRecord } from "./InvoicePayment";

export class InvoicePaymentGateway {
    gateway: Gateway;
    config: Configuration;

    constructor(gateway: Gateway) {
        this.gateway = gateway;
        this.config = gateway.config;
    }

    /**
     * Create a new invoice payment
     * @param invoicePayment Body of the invoice payment
     * @returns InvoicePayment
     */
    async create(invoicePayment: InvoicePaymentInput) {
        const endPoint = buildURL('invoices/payment/create');

        const result = await this.gateway.client.post<ApiResponse<InvoicePayment>>(
            endPoint,
            invoicePayment,
        );

        return Object.assign(new InvoicePayment(), result.invoicePayment);
    }

    /**
     * Update an existing invoice payment
     * @param invoicePayment Body of the invoice payment
     * @returns InvoicePayment
     */
    async update(payload: any) {
        const endPoint = buildURL('invoices/payment/update');

        const result = await this.gateway.client.post<{ok: boolean}>(
            endPoint,
            payload,
        );

        return result.ok;
    }

    /**
     * Delete an existing invoice payment
     * @param invoicePayment Body of the invoice payment
     * @returns boolean
     */
    async delete(payload: any) {
        const endPoint = buildURL('invoices/payment/delete');

        const result = await this.gateway.client.post<{ok: boolean}>(
            endPoint,
            payload,
        );

        return result.ok;
    }

    /**
     * Search for invoice payments
     * @param payload Search parameters
     * @returns InvoicePayment[]
     */
    async search(payload?: any) {
        const endPoint = buildURL('invoices/payment/search');

        const result = await this.gateway.client.post<ApiResponse<InvoicePayment[]>>(
          endPoint,
          payload,
        );

        return result.invoicePayments.map((ip: InvoicePaymentRecord) => Object.assign(new InvoicePaymentRecord(), ip));
    }
}
