import { Amount } from "./types";

export class InvoicePayment {
    id: string = '';
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
