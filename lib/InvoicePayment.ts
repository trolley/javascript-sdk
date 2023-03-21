import { Amount } from "./types";

export interface InvoicePaymentInput {
    batchId?: string;
    ids: InvoicePaymentInputRecord[];
}

interface InvoicePaymentInputRecord {
    invoiceId?: string;
    invoiceLineId?: string;
    amount: Amount;
}

export class InvoicePayment {
    batchId: string = '';
    paymentId: string = '';
    invoicePayments: InvoicePaymentRecord[] = [];
}

interface InvoicePaymentRecord {
    invoiceId: string;
    invoiceLineId: string;
    paymentId: string;
    amount: Amount;
}
