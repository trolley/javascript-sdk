import {startNockRec, testingApiClient} from "./helpers/integrationTestsHelpers";
import {InvoiceFactory} from "./factories/InvoiceFactory";
import {RecipientFactory} from "./factories/RecipientFactory";
import * as assert from "assert";
import {Invoice} from "../../lib";

const invoiceFactory = new InvoiceFactory();
const recipientFactory = new RecipientFactory();

describe("Invoice", () => {
    // it("creates an invoice", async () => {
    //     const nockDone = await startNockRec('invoice-create.json');
    //
    //     const recipient = await recipientFactory.createResource();
    //
    //     const invoice = await invoiceFactory.createResource({
    //         recipientId: recipient.id
    //     });
    //
    //     assert.ok(invoice);
    //     assert.strictEqual("testInvoice", invoice.externalId);
    //     assert.strictEqual(recipient.id, invoice.recipientId);
    //
    //     nockDone();
    // });

    // it("finds an invoice", async () => {
    //     const nockDone = await startNockRec('invoice-find.json');
    //
    //     const recipient = await recipientFactory.createResource();
    //
    //     const invoice = await invoiceFactory.createResource({
    //         recipientId: recipient.id
    //     });
    //
    //     const findInvoice = await testingApiClient.invoice.find(invoice.id);
    //
    //     assert.ok(invoice);
    //     assert.strictEqual("testInvoice", invoice.externalId);
    //
    //     nockDone();
    // });

    // it("updates an invoice", async () => {
    //     const nockDone = await startNockRec('invoice-update.json');
    //
    //     const recipient = await recipientFactory.createResource();
    //
    //     const invoice = await invoiceFactory.createResource({
    //         recipientId: recipient.id
    //     });
    //
    //     const updatedInvoice = await testingApiClient.invoice.update(
    //         invoice.id,
    //         {
    //             ...invoiceFactory.defaultAttrs,
    //             description: "Updated description",
    //             recipientId: recipient.id,
    //             lines: [],
    //         });
    //
    //     assert.ok(invoice);
    //     assert.strictEqual("Updated description", updatedInvoice.description);
    //
    //     nockDone();
    // });

    // it("deletes an invoice", async () => {
    //     const nockDone = await startNockRec('invoice-delete.json');
    //
    //     const recipient = await recipientFactory.createResource();
    //
    //     const invoice = await invoiceFactory.createResource({
    //         recipientId: recipient.id
    //     });
    //
    //     assert.ok(testingApiClient.invoice.remove(invoice.id));
    //
    //     nockDone();
    // });

    it("searches for an invoice", async () => {
        expect(1).toBe(1);

        const nockDone = await startNockRec('invoice-search.json');

        const recipient = await recipientFactory.createResource();

        const invoice = await invoiceFactory.createResource({
            recipientId: recipient.id
        });

        const otherInvoice = await invoiceFactory.createResource({
            recipientId: recipient.id,
            externalId: "otherInvoice"
        });

        const invoices: Invoice[] = await testingApiClient.invoice.search({
            invoiceIds: [invoice.id, otherInvoice.id],
        });

        assert.ok(invoices);
        assert.strictEqual(2, invoices.length);
        expect([invoice.id, otherInvoice.id]).toEqual(jasmine.arrayWithExactContents([invoice.id, otherInvoice.id]))

        nockDone();
    });
});