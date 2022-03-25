import { Money } from "./Types";

export interface InvoiceLineInput {
    unitAmount: Money.Amount;
    category: InvoiceLineCategory;
    description: string;
    externalId: string;
    taxReportable: boolean;
    forceUsTaxActivity: boolean;
    tags: string[];
}

enum InvoiceLineCategory {
    'services',
    'rent',
    'royalties',
    'royalties_film',
    'prizes',
    'education',
    'refunds'
}

export class InvoiceLine {
    id: string = '';
    status: string = '';
    description: string = '';
    quantity: number = 0;
    externalId: string = '';
    taxReportable: boolean = false;
    tags: string[] = [];
    category: string = '';
    forceUsTaxActivity: boolean = false;
    unitAmount: Money.Amount = {
        currency: '',
        value: 0
    };
    discountAmount: Money.Amount = {
        currency: '',
        value: 0
    };
    taxAmount: Money.Amount = {
        currency: '',
        value: 0
    };
    totalAmount: Money.Amount = {
        currency: '',
        value: 0
    };
    dueAmount: Money.Amount = {
        currency: '',
        value: 0
    };
    paidAmount: Money.Amount = {
        currency: '',
        value: 0
    };
}
