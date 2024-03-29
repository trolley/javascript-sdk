import { Amount } from "./types";

export interface InvoicePaymentInput {
    batchId?: string;
    ids: InvoicePaymentInputRecord[];
}

interface InvoicePaymentInputRecord {
    invoiceId?: string;
    invoiceLineId?: string;
    paymentId?: string;
    amount: Amount;
}

export class InvoicePayment {
    batchId: string = '';
    paymentId: string = '';
    invoicePayments: InvoicePaymentRecord[] = [];
}

export class InvoicePaymentRecord {
    invoiceId: string = '';
    invoiceLineId: string = '';
    paymentId: string = '';
    amount: Amount = {
        currency: '',
        value: '',
    };
}
