import { startNockRec, testingApiClient } from './helpers/integrationTestsHelpers';
import { RecipientFactory } from './factories/RecipientFactory';
import { InvoiceFactory } from './factories/InvoiceFactory';
import { InvoiceLineFactory } from './factories/InvoiceLineFactory';
import * as assert from 'assert';
import { InvoiceLine } from "../../lib/InvoiceLine";

let recipientFactory: RecipientFactory;
let invoiceFactory: InvoiceFactory;
let invoiceLineFactory: InvoiceLineFactory;

before(async () => {
    recipientFactory = new RecipientFactory();
    invoiceFactory = new InvoiceFactory();
    invoiceLineFactory = new InvoiceLineFactory();
});

describe('InvoiceLine', () => {
    it('creates an invoice line', async () => {
        const nockDone = await startNockRec('invoice-line-create.json');

        const recipient = await recipientFactory.createResource();
        const invoice = await invoiceFactory.createResource({ recipientId: recipient.id });
        const invoiceLines = await invoiceLineFactory.createResource({ invoice: { id: invoice.id } });

        nockDone();

        assert.ok(invoiceLines);
        assert.strictEqual(invoiceLines.length, 1);
        assert.strictEqual(invoiceLines[0].constructor, InvoiceLine);
        assert.strictEqual('testInvoiceLine', invoiceLines[0].externalId);
    });

    it('updates an invoice line', async () => {
        const nockDone = await startNockRec('invoice-line-update.json');

        const recipient = await recipientFactory.createResource();
        const invoice = await invoiceFactory.createResource({ recipientId: recipient.id });
        const invoiceLines = await invoiceLineFactory.createResource({ invoice: { id: invoice.id } });
        const invoiceLine = invoiceLines[0];
        const updatedInvoice = await testingApiClient.invoiceLine.update(
            invoice.id,
            {
                lines: [
                    {
                        invoiceLineId: invoiceLine.id,
                        description: 'updated line description',
                    },
                ],
            },
        );

        nockDone();

        assert.ok(updatedInvoice);
        assert.strictEqual(invoiceLines.length, 1);
        assert.strictEqual(invoiceLines[0].constructor, InvoiceLine);
        assert.strictEqual(updatedInvoice.lines.length, 1);
        assert.strictEqual('updated line description', updatedInvoice.lines[0].description);
    });

    it('deletes an invoice line', async () => {
        const nockDone = await startNockRec('invoice-line-delete.json');

        const recipient = await recipientFactory.createResource();
        const invoice = await invoiceFactory.createResource({ recipientId: recipient.id });
        const invoiceLines = await invoiceLineFactory.createResource({ invoice: { id: invoice.id } });
        const invoiceLine = invoiceLines[0];
        const deleted = await testingApiClient.invoiceLine.delete(invoice.id, [invoiceLine.id]);

        nockDone();

        assert.ok(deleted);
    });
});
