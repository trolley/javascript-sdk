import { Configuration } from './Configuration';
import { Gateway } from './Gateway';
import { Invoice, InvoiceInput } from './Invoice';
import { InvoiceWrapper, Money } from './types';
import { buildURL } from './util';

export class InvoiceGateway {
    gateway: Gateway;
    config: Configuration;

    constructor(gateway: Gateway) {
        this.gateway = gateway;
        this.config = this.gateway.config;
    }

    async find(invoiceId: string) {
        const endPoint = buildURL('invoices/get');

        const result = await this.gateway.client.post<InvoiceWrapper.Result>(
            endPoint,
            {
                invoiceId: invoiceId
            }
        );

        return Object.assign(new Invoice(), result.invoice);
    }

    async create(body: InvoiceInput) {
        const endPoint = buildURL('invoices/create');

        const result = await this.gateway.client.post<InvoiceWrapper.Result>(
            endPoint,
            body
        );

        return Object.assign(new Invoice(), result.invoice);
    }
}
