import { Amount } from "./types";

export interface InvoiceLineInput {
    unitAmount: Amount;
    category: InvoiceLineCategory;
    description: string;
    externalId: string;
    taxReportable: boolean;
    forceUsTaxActivity: boolean;
    tags: string[];
}

export enum InvoiceLineCategory {
    'services' = 'services',
    'rent' = 'rent',
    'royalties' = 'royalties',
    'royalties_film' = 'royalties_film',
    'prizes' = 'prizes',
    'education' = 'education',
    'refunds' = 'refunds',
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
        value: "0",
    };
    discountAmount: Amount = {
        currency: '',
        value: "0",
    };
    taxAmount: Amount = {
        currency: '',
        value: "0",
    };
    totalAmount: Amount = {
        currency: '',
        value: "0",
    };
    dueAmount: Amount = {
        currency: '',
        value: "0",
    };
    paidAmount: Amount = {
        currency: '',
        value: "0",
    };
}
