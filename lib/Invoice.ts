import { Configuration } from "./Configuration";
import { InvoiceLine, InvoiceLineInput } from "./InvoiceLine";
import { Money } from "./Types";

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
    totalAmount: Money.Amount = {
        currency: "",
        value: 0
    };
    paidAmount: Money.Amount = {
        currency: "",
        value: 0
    };
    dueAmount: Money.Amount = {
        currency: "",
        value: 0
    };
}
