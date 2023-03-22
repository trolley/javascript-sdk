import { InvoiceFactory } from "./factories/InvoiceFactory";
import { startNockRec, testingApiClient } from "./helpers/integrationTestsHelpers";
import * as assert from "assert";
import { RecipientFactory } from "./factories/RecipientFactory";
import { InvoicePaymentFactory } from "./factories/InvoicePaymentFactory";
import { InvoiceLineFactory } from "./factories/InvoiceLineFactory";
import { InvoicePayment, InvoicePaymentInput } from "../../lib/InvoicePayment";

let recipientFactory: RecipientFactory;
let invoiceFactory: InvoiceFactory;
let invoiceLineFactory: InvoiceLineFactory;
let invoicePaymentFactory: InvoicePaymentFactory;

before(async () => {
    recipientFactory = new RecipientFactory();
    invoiceFactory = new InvoiceFactory();
    invoiceLineFactory = new InvoiceLineFactory();
    invoicePaymentFactory = new InvoicePaymentFactory();
});

describe("Invoice Payment", () => {
    it("creates an invoice payment", async () => {
        const nockDone = await startNockRec("invoice-payment-create.json");

        const recipient = await recipientFactory.createResource();
        const invoice = await invoiceFactory.createResource({ recipientId: recipient.id });
        await invoiceLineFactory.createResource({ invoice: { id: invoice.id } });
        const invoicePayment = await invoicePaymentFactory.createResource(
            {
                ids: [
                    {
                        invoiceId: invoice.id,
                        amount: {
                            currency: "USD",
                            value: "100",
                        },
                    },
                ],
            },
        );

        nockDone();

        assert.ok(invoicePayment instanceof InvoicePayment);
        assert.strictEqual(invoicePayment.invoicePayments[0].amount.value, "100.00");
        assert.strictEqual(invoicePayment.invoicePayments[0].amount.currency, "USD");
    });

    it("updates an invoice payment", async () => {
        const nockDone = await startNockRec("invoice-payment-update.json");

        const recipient = await recipientFactory.createResource();
        const invoice = await invoiceFactory.createResource({ recipientId: recipient.id });
        const invoiceLines = await invoiceLineFactory.createResource({ invoice: { id: invoice.id } });
        const invoicePayment = await invoicePaymentFactory.createResource(
            {
                ids: [{ invoiceId: invoice.id }],
            },
        );

        const updatedInvoicePayment = await testingApiClient.invoicePayment.update(
          { paymentId: invoicePayment.paymentId,
              invoiceLineId: invoicePayment.invoicePayments[0].invoiceLineId,
              amount: {
                  currency: "USD",
                  value: "200",
              },
          },
        );

        nockDone();

        assert.ok(updatedInvoicePayment);
    });
});
