import { startNockRec, testingApiClient } from "./helpers/integrationTestsHelpers";
import { RecipientFactory } from "./factories/RecipientFactory";
import * as assert from "assert";
import { OfflinePaymentFactory } from "./factories/OfflinePaymentFactory";
import { OfflinePayment } from "../../lib";

let recipientFactory: RecipientFactory;
let offlinePaymentFactory: OfflinePaymentFactory;

before(async () => {
    recipientFactory = new RecipientFactory();
    offlinePaymentFactory = new OfflinePaymentFactory();
});

describe('OfflinePayment', () => {
    it('creates an offline payment', async () => {
        const nockDone = await startNockRec('offline-payment-create.json');

        const recipient = await recipientFactory.createResource();
        const offlinePayment = await offlinePaymentFactory.createResource({ recipient: { id: recipient.id } });

        nockDone();

        assert.ok(offlinePayment);
        assert.strictEqual(offlinePayment.constructor, OfflinePayment);
        assert.strictEqual(offlinePayment.externalId, 'testOfflinePayment');
    });

    it('updates an offline payment', async () => {
        const nockDone = await startNockRec('offline-payment-update.json');

        const recipient = await recipientFactory.createResource();
        const offlinePayment = await offlinePaymentFactory.createResource({ recipient: { id: recipient.id } });
        await testingApiClient.offlinePayment.update(
            recipient.id,
            offlinePayment.id,
            {
                taxReportable: true,
                amount: '10.00',
                currency: 'USD',
                withholdingAmount: '2.40',
                withholdingCurrency: 'USD',
            },
        );

        nockDone();

        assert.ok(offlinePayment);
        assert.strictEqual(offlinePayment.constructor, OfflinePayment);
        assert.strictEqual(offlinePayment.taxReportable, true);
    });

    it('deletes an offline payment', async () => {
        const nockDone = await startNockRec('offline-payment-delete.json');

        const recipient = await recipientFactory.createResource();
        const offlinePayment = await offlinePaymentFactory.createResource({ recipient: { id: recipient.id } });
        const deleted = await testingApiClient.offlinePayment.remove(recipient.id, offlinePayment.id);

        nockDone();

        assert.ok(deleted);
    });

    it('searches for offline payments', async () => {
        const nockDone = await startNockRec('offline-payment-search.json');

        const recipient = await recipientFactory.createResource();
        await offlinePaymentFactory.createResource({
                recipient: {
                    id: recipient.id,
                },
        });
        await offlinePaymentFactory.createResource({
            recipient: {
                id: recipient.id,
            },
            offlinePayment: {
                externalId: 'otherOfflinePayment',
            },
        });
        const offlinePaymentResults = await testingApiClient.offlinePayment.search(
            {
                recipientId: recipient.id,
            },
        );

        nockDone();

        assert.ok(offlinePaymentResults);
        assert.strictEqual(offlinePaymentResults.length, 2);
        assert.strictEqual(offlinePaymentResults[0].constructor, OfflinePayment);
        assert.strictEqual(offlinePaymentResults[1].constructor, OfflinePayment);
    });
});
