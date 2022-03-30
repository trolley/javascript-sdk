import { Currency } from "./Types";

export interface InvoiceLineInput {
    unitAmount: Currency;
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
    'refunds',
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
    unitAmount: Currency = {
        currency: '',
        value: 0,
    };
    discountAmount: Currency = {
        currency: '',
        value: 0,
    };
    taxAmount: Currency = {
        currency: '',
        value: 0,
    };
    totalAmount: Currency = {
        currency: '',
        value: 0,
    };
    dueAmount: Currency = {
        currency: '',
        value: 0,
    };
    paidAmount: Currency = {
        currency: '',
        value: 0,
    };
}
