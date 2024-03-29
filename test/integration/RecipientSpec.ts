import { OfflinePayment, Payment, Recipient } from "../../lib";
import * as assert from "assert";
import { startNockRec, testingApiClient } from "./helpers/integrationTestsHelpers";
import { RecipientFactory } from "./factories/RecipientFactory";
import { Log } from "../../lib/Log";
import { BatchFactory } from "./factories/BatchFactory";
import { PaymentFactory } from "./factories/PaymentFactory";
import { OfflinePaymentFactory } from "./factories/OfflinePaymentFactory";

let recipientFactory: RecipientFactory;
let batchFactory: BatchFactory;
let paymentFactory: PaymentFactory;
let offlinePaymentFactory: OfflinePaymentFactory;

before(async () => {
    recipientFactory = new RecipientFactory();
    batchFactory = new BatchFactory();
    paymentFactory = new PaymentFactory();
    offlinePaymentFactory = new OfflinePaymentFactory();
});

describe("Recipient", () => {
  it("creates a recipient", async () => {
    const nockDone = await startNockRec('recipient-create.json');

    const recipient = await recipientFactory.createResource();

    assert.ok(recipient);
    assert.ok(recipient.id);
    assert.strictEqual(recipient.constructor, Recipient);
    assert.strictEqual(recipientFactory.defaultAttrs.firstName, "Tom");
    assert.strictEqual(recipientFactory.defaultAttrs.lastName, "Jones");

    nockDone();
  });

  it("updates a recipient", async () => {
    const nockDone = await startNockRec('recipient-update.json');

    const recipient = await recipientFactory.createResource();
    await testingApiClient.recipient.update(recipient.id, {
      firstName: "John",
      lastName: "Smith",
    });

    const updatedRecipient = await testingApiClient.recipient.find(recipient.id);

    nockDone();

    assert.ok(updatedRecipient);
    assert.strictEqual(updatedRecipient.constructor, Recipient);
    assert.strictEqual(updatedRecipient.firstName, "John");
    assert.strictEqual(updatedRecipient.lastName, "Smith");
    });

  it("deletes a recipient", async () => {
    const nockDone = await startNockRec('recipient-delete.json');

    const recipient = await recipientFactory.createResource();
    const deleted = await testingApiClient.recipient.remove(recipient.id);

    nockDone();

    assert.ok(deleted);
    });

  it("deletes multiple recipients", async () => {
    const nockDone = await startNockRec('recipient-delete-multiple.json');

    const recipient = await recipientFactory.createResource();
    const recipient2 = await recipientFactory.createResource({ email: 'testEmail2@example.com' });
    const deleted = await testingApiClient.recipient.remove([recipient.id, recipient2.id]);

    nockDone();

    assert.ok(deleted);
  });

  it("finds logs for a recipient", async () => {
    const nockDone = await startNockRec('recipient-find-logs.json');

    const recipient = await recipientFactory.createResource();
    const logs = await testingApiClient.recipient.findLogs(recipient.id);

    nockDone();

    assert.ok(logs);
    assert.strictEqual(logs.length, 1);
    assert.ok(logs[0] instanceof Log);
  });

  it("finds payments for a recipient", async () => {
    const nockDone = await startNockRec('recipient-find-payments.json');

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

    const payments = await testingApiClient.recipient.findPayments(recipient.id);

    nockDone();

    assert.ok(payments);
    assert.strictEqual(payments.length, 1);
    assert.ok(payments[0] instanceof Payment);
    assert.strictEqual(payments[0].recipient.id, recipient.id);
  });

  it("finds offline payments for a recipient", async () => {
    const nockDone = await startNockRec('recipient-find-offline-payments.json');

    const recipient = await recipientFactory.createResource();
    await offlinePaymentFactory.createResource({ recipient: { id: recipient.id } });

    const offlinePayments = await testingApiClient.recipient.findOfflinePayments(recipient.id);

    nockDone();

    assert.ok(offlinePayments);
    assert.strictEqual(offlinePayments.length, 1);
    assert.ok(offlinePayments[0] instanceof OfflinePayment);
    assert.strictEqual(offlinePayments[0].recipientId, recipient.id);
  });

  it("searches for a recipient", async () => {
    const nockDone = await startNockRec('recipient-search.json');

    const recipient = await recipientFactory.createResource();
    const recipientsCollection: Recipient[] = await testingApiClient.recipient.search();

    nockDone();

    assert.ok(recipientsCollection);
    assert.strictEqual(recipientsCollection.length, 1);
    assert.strictEqual(recipient.id, recipientsCollection[0].id);
    });

  it("checks routeType and routeMinimum for a recipient", async () => {
    const nockDone = await startNockRec('recipient-search.json');

    const recipient = await recipientFactory.createResource();
    const recipientsCollection: Recipient[] = await testingApiClient.recipient.search();

    nockDone();

    assert.ok(recipientsCollection);
    assert.strictEqual(recipientsCollection[0].routeType, "sepa");
    assert.strictEqual(recipientsCollection[0].routeMinimum, "0");
    });
  });
