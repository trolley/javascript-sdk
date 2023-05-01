import * as assert from "assert";
import { testingApiClient, startNockRec } from "./helpers/integrationTestsHelpers";
import { BatchFactory } from "./factories/BatchFactory";
import { RecipientFactory } from "./factories/RecipientFactory";
import { RecipientAccountFactory } from "./factories/RecipientAccountFactory";
import { Batch } from "../../lib";

let batchFactory: BatchFactory;
let recipientFactory: RecipientFactory;
let recipientAccountFactory: RecipientAccountFactory;

before(async () => {
    batchFactory = new BatchFactory();
    recipientFactory = new RecipientFactory();
    recipientAccountFactory = new RecipientAccountFactory();
});

async function createRecipient(email: string) {
   const recipient = await recipientFactory.createResource({ email });
   await recipientAccountFactory.createResource({ recipient });

   return recipient;
 }

describe("Batch", () => {
  it('creates a batch', async () => {
    const nockDone = await startNockRec('batch-create.json');

    const batch = await batchFactory.createResource();
    const all = await testingApiClient.batch.all();

    nockDone();

    assert.ok(batch);
    assert.ok(batch.id);
    assert.ok(all.length > 0);

    assert.strictEqual(batch.constructor, Batch);
    assert.strictEqual(batch.description, batchFactory.defaultAttrs.description);
  });

  it("updates a batch", async () => {
    const nockDone = await startNockRec('batch-update.json');

    const batch = await batchFactory.createResource({
        description: "Integration Test Update",
    });
    assert.strictEqual(batch.description, "Integration Test Update");

    await testingApiClient.batch.update(batch.id, {
      description: "Integration Test Update 2",
    });

    nockDone();

    assert.ok(batch);

    assert.strictEqual(batch.constructor, Batch);
    // assert.strictEqual(batch.description, "Integration Test Update 2");
    // assert.strictEqual(batch.status, "open");
  });

  it("create with payments", async () => {
    const nockDone = await startNockRec('batch-create-with-payments.json');

    const recipient = await createRecipient('recipient.with.payment@example.com');
    const otherRecipient = await createRecipient('recipient.with.payment.2@example.com');

    const batch = await batchFactory.createResource({
      payments: [
          {
            targetAmount: "10.00",
            targetCurrency: "EUR",
            recipient: { id: recipient.id },
          },
        {
          sourceAmount: "10.00",
          recipient: { id: otherRecipient.id },
        },
      ],
    });

    const findBatch = await testingApiClient.batch.find(batch.id);

    nockDone();

    assert.ok(batch);
    assert.ok(batch.id);
    assert.ok(findBatch);

    assert.strictEqual(batch.constructor, Batch);
    assert.strictEqual(batch.totalPayments, 2);

    const payments = await testingApiClient.batch.paymentList(batch.id);
    for (const item of payments) {
      assert.strictEqual(item.status, "pending");
    }
  });

  it("removes a batch", async () => {
    const nockDone = await startNockRec('batch-remove.json');

    const batch = await batchFactory.createResource();
    assert.ok(batch);

    await testingApiClient.batch.remove(batch.id);

    nockDone();
  });

  it("removes multiple batches", async () => {
    const nockDone = await startNockRec('batch-remove-multiple.json');

    const batch = await batchFactory.createResource();
    const otherBatch = await batchFactory.createResource();
    assert.ok(batch);
    assert.ok(otherBatch);

    await testingApiClient.batch.remove([batch.id, otherBatch.id]);

    nockDone();
  });

  it("starts processing batch payments", async () => {
    const nockDone = await startNockRec('batch-processing-payments.json');

    const recipient = await createRecipient('processing.recipient@example.com');
    const otherRecipient = await createRecipient('processing.recipient2@example.com');

    const batch = await batchFactory.createResource({
      payments: [
        {
          targetAmount: "10.00",
          targetCurrency: "EUR",
          recipient: { id: recipient.id },
        },
        {
          sourceAmount: "10.00",
          recipient: { id: otherRecipient.id },
        },
      ],
    });

    const summary = await testingApiClient.batch.summary(batch.id);
    const quote = await testingApiClient.batch.generateQuote(batch.id);

    // There's an issue here when it runs too quick. It returns "Operation In Progress"
    // Sleep when running against real API
    const start = await testingApiClient.batch.startProcessing(batch.id);

    nockDone();

    assert.ok(batch);
    assert.ok(batch.id);
    assert.ok(quote, "failed to get quote");
    assert.ok(start, "Failed to start");
  });
});
