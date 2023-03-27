import { InvoiceLine, InvoiceLineInput } from "./InvoiceLine";
import { Amount } from "./types";

export interface InvoiceInput {
    recipientId: string;
    description: string;
    externalId: string;
    invoiceDate: string;
    dueDate: string;
    lines: InvoiceLineInput[];
}

export class Invoice {
    id: string = "";
    recipientId: string = "";
    description: string = "";
    externalId: string = "";
    invoiceDate: string  = "";
    invoiceNumber: number = 0;
    dueDate: string = "";
    status: string = "";
    releaseAfter: string = "";
    createdAt: string = "";
    updatedAt: string = "";
    lines: InvoiceLine[] = [];
    tags: string[] = [];
    totalAmount: Amount = {
        currency: "",
        value: 0,
    };
    paidAmount: Amount = {
        currency: "",
        value: 0,
    };
    dueAmount: Amount = {
        currency: "",
        value: 0,
    };
}
