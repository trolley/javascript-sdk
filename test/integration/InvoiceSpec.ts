import { startNockRec, testingApiClient } from "./helpers/integrationTestsHelpers";
import { InvoiceFactory } from "./factories/InvoiceFactory";
import { RecipientFactory } from "./factories/RecipientFactory";
import * as assert from "assert";
import { Invoice } from "../../lib";

let invoiceFactory: InvoiceFactory;
let recipientFactory: RecipientFactory;

before(async () => {
    invoiceFactory = new InvoiceFactory();
    recipientFactory = new RecipientFactory();
});

describe("Invoice", () => {
    it("creates an invoice", async () => {
        const nockDone = await startNockRec('invoice-create.json');

        const recipient = await recipientFactory.createResource();
        const invoice = await invoiceFactory.createResource({
            recipientId: recipient.id,
        });

        nockDone();

        assert.ok(invoice);
        assert.strictEqual("testInvoice", invoice.externalId);
        assert.strictEqual(recipient.id, invoice.recipientId);
    });

    it("creates an invoice with lines", async () => {
        const nockDone = await startNockRec('invoice-create-with-lines.json');

        const recipient = await recipientFactory.createResource();
        const invoice = await invoiceFactory.createResource({
            recipientId: recipient.id,
            lines: [
                {
                    unitAmount: {
                        value: "100",
                        currency: "USD",
                    },
                    category: "services",
                    description: "Test Invoice Line",
                    externalId: "testInvoiceLine",
                    taxReportable: true,
                    forceUsTaxActivity: false,
                    tags: ['test'],
                },
            ],
        });

        nockDone();

        assert.ok(invoice);
        assert.strictEqual("testInvoice", invoice.externalId);
        assert.strictEqual(recipient.id, invoice.recipientId);
        assert.strictEqual(1, invoice.lines.length);
        assert.strictEqual("testInvoiceLine", invoice.lines[0].externalId);

    });

    it("finds an invoice", async () => {
        const nockDone = await startNockRec('invoice-find.json');

        const recipient = await recipientFactory.createResource();
        const invoice = await invoiceFactory.createResource({
            recipientId: recipient.id,
        });

        const findInvoice = await testingApiClient.invoice.find(invoice.id);

        nockDone();

        assert.ok(findInvoice);
        assert.strictEqual("testInvoice", findInvoice.externalId);
    });

    it("searches for an invoice", async () => {
        const nockDone = await startNockRec('invoice-search.json');

        const recipient = await recipientFactory.createResource();
        const invoice = await invoiceFactory.createResource({
            recipientId: recipient.id,
        });

        const otherInvoice = await invoiceFactory.createResource({
            recipientId: recipient.id,
            externalId: "otherInvoice",
        });

        const invoices: Invoice[] = await testingApiClient.invoice.search({
            invoiceIds: [invoice.id, otherInvoice.id],
        });

        nockDone();

        assert.ok(invoices);
        assert.strictEqual(2, invoices.length);
        assert.strictEqual([invoice.id, otherInvoice.id].sort().toString(), invoices.map(i => i.id).sort().toString());
    });

    it("updates an invoice", async () => {
        const nockDone = await startNockRec('invoice-update.json');

        const recipient = await recipientFactory.createResource();
        const invoice = await invoiceFactory.createResource({
            recipientId: recipient.id,
        });
        const updatedInvoice = await testingApiClient.invoice.update(
            invoice.id,
            {
                ...invoiceFactory.defaultAttrs,
                description: "Updated description",
                recipientId: recipient.id,
                lines: [],
            });

        nockDone();

        assert.ok(invoice);
        assert.strictEqual("Updated description", updatedInvoice.description);
    });

    it("deletes an invoice", async () => {
        const nockDone = await startNockRec('invoice-delete.json');

        const recipient = await recipientFactory.createResource();
        const invoice = await invoiceFactory.createResource({
            recipientId: recipient.id,
        });

        nockDone();

        assert.ok(testingApiClient.invoice.remove(invoice.id));
    });
});
