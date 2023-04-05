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
        await testingApiClient.payment.update(
            payment.id,
            batch.id,
            {
                paymentId: payment.id,
                externalId: 'updatedPayment',
            },
        );

        const updatedPayment = await testingApiClient.payment.find(payment.id);

        nockDone();

        assert.ok(updatedPayment);
        assert.strictEqual(updatedPayment.constructor, Payment);
        assert.strictEqual(updatedPayment.externalId, 'updatedPayment');
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
        assert.strictEqual(deletedPaymentResult, true);
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
        assert.strictEqual(paymentsCollection.length, 1);
        assert.strictEqual(paymentsCollection[0].constructor, Payment);
        assert.strictEqual(payment.externalId, paymentsCollection[0].externalId);
    });

    it('handles multiple validation errors', async () => {
        const nockDone = await startNockRec('payment-validation-errors.json');

        try {
            await testingApiClient.payment.create('undefined', undefined);
        } catch (error) {
            nockDone();

            assert.strictEqual(error.validationErrors.length, 2);
            assert.strictEqual(error.validationErrors[0].code, 'invalid_field');
            assert.strictEqual(error.validationErrors[0].field, 'batchId');
            assert.strictEqual(error.validationErrors[0].message, 'Value is invalid');
            assert.strictEqual(error.validationErrors[1].code, 'invalid_field');
            assert.strictEqual(error.validationErrors[1].field, 'recipient');
            assert.strictEqual(error.validationErrors[1].message, 'Value is invalid');
        }
    });
});
