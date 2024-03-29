import { ApiFactory } from "./ApiFactory";
import { InvoiceLineFactory } from "./InvoiceLineFactory";

export class InvoiceFactory extends ApiFactory {
    defaultAttrs = {
        recipientId: undefined, // Must be passed when creating resource
        description: "Test Invoice",
        externalId: "testInvoice",
        invoiceDate: "2020-01-01",
        dueDate: "2020-01-01",
    };

    public async createResource(attrs: any = {}) {
        return this.apiClient.invoice.create({
            ...this.defaultAttrs,
            ...attrs,
        });
    }
}
