import {ApiFactory} from "./ApiFactory";
import {Amount} from "../../../lib/types";
import {InvoiceLineCategory} from "../../../lib/InvoiceLine";


export class InvoiceLineFactory extends ApiFactory {
    static defaultAttrs = {
        unitAmount: {
            value: "100",
            currency: "USD",
        },
        category: InvoiceLineCategory.services,
        description: "Test Invoice Line",
        externalId: "testInvoiceLine",
        taxReportable: true,
        forceUsTaxActivity: false,
        tags: ['test'],
    }

    public async createResource(attrs: any = {}) {
        return await this.apiClient.invoiceLine.create(
            attrs.invoice.id,
            {
            ...InvoiceLineFactory.defaultAttrs,
            ...attrs
            }
        );
    }
}