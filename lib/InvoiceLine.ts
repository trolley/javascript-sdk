import { Amount } from "./Types";

export interface InvoiceLineInput {
    unitAmount: Amount;
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
    unitAmount: Amount = {
        currency: '',
        value: 0,
    };
    discountAmount: Amount = {
        currency: '',
        value: 0,
    };
    taxAmount: Amount = {
        currency: '',
        value: 0,
    };
    totalAmount: Amount = {
        currency: '',
        value: 0,
    };
    dueAmount: Amount = {
        currency: '',
        value: 0,
    };
    paidAmount: Amount = {
        currency: '',
        value: 0,
    };
}
