import { startNockRec, testingApiClient } from "./helpers/integrationTestsHelpers";
import { PaymentFactory } from "./factories/PaymentFactory";
import { BatchFactory } from "./factories/BatchFactory";
import { RecipientFactory } from "./factories/RecipientFactory";
import * as assert from "assert";
import { Payment } from "../../lib";

let batchFactory: BatchFactory;
let recipientFactory: RecipientFactory;
let paymentFactory: PaymentFactory;

before(async () => {
    batchFactory = new BatchFactory();
    recipientFactory = new RecipientFactory();
    paymentFactory = new PaymentFactory();
});

describe('Payment', () => {
    it('creates a payment', async () => {
        const nockDone = await startNockRec('payment-create.json');

        const recipient = await recipientFactory.createResource();
        const batch = await batchFactory.createResource();
        const payment = await paymentFactory.createResource(
            {
                batch: {
                    id: batch.id,
                },
                payment: {
                    recipient: {
                        id: recipient.id,
                    },
                },
            },
        );

        nockDone();

        assert.ok(payment);
        assert.strictEqual(payment.constructor, Payment);
        assert.strictEqual(payment.externalId, 'testPayment');
    });

    it('updates a payment', async () => {
        const nockDone = await startNockRec('payment-update.json');

        const recipient = await recipientFactory.createResource();
        const batch = await batchFactory.createResource();
        const payment = await paymentFactory.createResource(
            {
                batch: {
                    id: batch.id,
                },
                payment: {
                    recipient: {
                        id: recipient.id,
                    },
                },
            },
        );
        const updatedPayment = await testingApiClient.payment.update(
            payment.id,
            batch.id,
            {
                paymentId: payment.id,
                externalId: 'updatedPayment',
            },
        );

        nockDone();

        assert.ok(updatedPayment);
        assert.strictEqual(updatedPayment.constructor, Payment);
        assert.strictEqual('updatedPayment', updatedPayment.externalId);
    });

    it('deletes a payment', async () => {
        const nockDone = await startNockRec('payment-delete.json');

        const recipient = await recipientFactory.createResource();
        const batch = await batchFactory.createResource();
        const payment = await paymentFactory.createResource(
            {
                batch: {
                    id: batch.id,
                },
                payment: {
                    recipient: {
                        id: recipient.id,
                    },
                },
            },
        );
        const deletedPaymentResult = await testingApiClient.payment.remove(payment.id, batch.id);

        nockDone();

        assert.ok(deletedPaymentResult);
        assert.strictEqual(true, deletedPaymentResult);
    });

    it('searches for a payment', async () => {
        const nockDone = await startNockRec('payment-search.json');

        const recipient = await recipientFactory.createResource();
        const batch = await batchFactory.createResource();
        const payment = await paymentFactory.createResource(
            {
                batch: {
                    id: batch.id,
                },
                payment: {
                    recipient: {
                        id: recipient.id,
                    },
                },
            },
        );

        const query = { recipientId: recipient.id, batchId: batch.id };
        const paymentsCollection = await testingApiClient.payment.search(query);

        nockDone();

        assert.ok(paymentsCollection);
        assert.strictEqual(1, paymentsCollection.length);
        assert.strictEqual(paymentsCollection[0].constructor, Payment);
        assert.strictEqual(payment.externalId, paymentsCollection[0].externalId);
    });
});
