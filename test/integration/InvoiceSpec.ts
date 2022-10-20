import {startNockRec, testingApiClient} from "./helpers/integrationTestsHelpers";
import {InvoiceFactory} from "./factories/InvoiceFactory";
import {RecipientFactory} from "./factories/RecipientFactory";
import * as assert from "assert";

const invoiceFactory = new InvoiceFactory();
const recipientFactory = new RecipientFactory();

const createRecipient = async () => { await recipientFactory.createResource(); };
const recipient = createRecipient();

describe("Invoice", () => {
    it("creates an invoice", async () => {
        const nockDone = await startNockRec('invoice-create.json');

        const invoice = await invoiceFactory.createResource({
            recipientId: recipient.id
        });

        assert.ok(invoice);
        assert.strictEqual("testInvoice", invoice.externalId);
        assert.strictEqual(recipient.id, invoice.recipientId);

        nockDone();
    });

    it("finds an invoice", async () => {
        const nockDone = await startNockRec('invoice-find.json');

        const invoice = await invoiceFactory.createResource({
            recipientId: recipient.id
        });

        const findInvoice = await testingApiClient.invoice.find("testInvoice");

        assert.ok(invoice);
        assert.strictEqual("testInvoice", invoice.externalId);

        nockDone();
    });

    // it("updates an invoice", async () => {
    //     const nockDone = await startNockRec('invoice-update.json');
    //
    //     const invoice = await testingApiClient.invoice.update("testInvoice",
    //         {...invoiceFactory.defaultAttrs} );
    //
    //     assert.ok(invoice);
    //     assert.strictEqual("Test Invoice Updated", invoice.description);
    //
    //     nockDone();
    // });

    it("deletes an invoice", async () => {
        const nockDone = await startNockRec('invoice-delete.json');

        const invoice = await testingApiClient.invoice.remove(["testInvoice"]);

        assert.ok(invoice);

        nockDone();
    });

    it("searches for an invoice", async () => {
        const nockDone = await startNockRec('invoice-search.json');

        const invoices = await testingApiClient.invoice.search({
            externalId: "testInvoice",
        });

        assert.ok(invoices);
        assert.strictEqual(1, invoices.length);
        assert.strictEqual("testInvoice", invoices[0].externalId);

        nockDone();
    });
});