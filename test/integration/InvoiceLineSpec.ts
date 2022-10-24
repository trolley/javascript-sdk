import { startNockRec } from "./helpers/integrationTestsHelpers";
import { RecipientFactory } from "./factories/RecipientFactory";
import { InvoiceFactory } from "./factories/InvoiceFactory";
import { InvoiceLineFactory } from "./factories/InvoiceLineFactory";
import * as assert from "assert";

let recipientFactory: RecipientFactory;
let invoiceFactory: InvoiceFactory;
let invoiceLineFactory: InvoiceLineFactory;

before(async () => {
    recipientFactory = new RecipientFactory();
    invoiceFactory = new InvoiceFactory();
    invoiceLineFactory = new InvoiceLineFactory();
});

describe("InvoiceLine", () => {
    it("creates an invoice line", async () => {
        const nockDone = await startNockRec('invoice-line-create.json');

        const recipient = await recipientFactory.createResource();
        const invoice = await invoiceFactory.createResource({ recipientId: recipient.id });
        const invoiceLines = await invoiceLineFactory.createResource({ invoice: { id: invoice.id } });

        assert.ok(invoiceLines);
        assert.strictEqual(invoiceLines.length, 1);
        assert.strictEqual("testInvoiceLine", invoiceLines[0].externalId);

        nockDone();
    });
});
