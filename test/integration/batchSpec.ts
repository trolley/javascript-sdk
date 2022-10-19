import * as assert from "assert";
import {testingApiClient, startNockRec} from "./helpers/integrationTestsHelpers";
import {BatchFactory} from "./factories/BatchFactory";
import {RecipientFactory} from "./factories/RecipientFactory";
import {RecipientAccountFactory} from "./factories/RecipientAccountFactory";

const batchFactory = new BatchFactory();
const recipientFactory = new RecipientFactory();
const recipientAccountFactory = new RecipientAccountFactory();

async function createRecipient(email: string) {
   const recipient = await recipientFactory.createResource({ email });
   await recipientAccountFactory.createResource({ recipient });
   return recipient;
 }

describe("Batch/Payment Integration", () => {
  it('creates a batch', async () => {
    const nockDone = await startNockRec('batch-create.json');

    const batch = await batchFactory.createResource();
    const all = await testingApiClient.batch.all();

    assert.ok(batch);
    assert.ok(batch.id);
    assert.ok(all.length > 0);

    nockDone();
  })

  it("updates a batch", async () => {
    const nockDone = await startNockRec('batch-update.json');

    let batch = await batchFactory.createResource({
        description: "Integration Test Update",
    });
    assert.strictEqual(batch.description, "Integration Test Update");

    await testingApiClient.batch.update(batch.id, {
      description: "Integration Test Update 2",
    });
    batch = await testingApiClient.batch.find(batch.id);
    assert.ok(batch);
    assert.strictEqual(batch.description, "Integration Test Update 2");
    assert.strictEqual(batch.status, "open");

    nockDone();
  })

  //tslint:disable-next-line:mocha-no-side-effect-code
  it("create with payments", async () => {
    const nockDone = await startNockRec('batch-create-with-payments.json')

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
      ]
    });

    assert.ok(batch);
    assert.ok(batch.id);
    const findBatch = await testingApiClient.batch.find(batch.id);

    assert.ok(findBatch);
    assert.strictEqual(batch.totalPayments, 2);

    let payments = await testingApiClient.batch.paymentList(batch.id);
    for (const item of payments) {
      assert.strictEqual(item.status, "pending");
    }

    nockDone();
  });

  //tslint:disable-next-line:mocha-no-side-effect-code
  it("starts processing batch payments", async () => {
    const nockDone = await startNockRec('batch-processing-payments.json')

    const recipient = await createRecipient('processing.recipient@example.com');
    const other_recipient = await createRecipient('processing.recipient2@example.com');

    const batch = await batchFactory.createResource({
      payments: [
        {
          targetAmount: "10.00",
          targetCurrency: "EUR",
          recipient: {id: recipient.id},
        },
        {
          sourceAmount: "10.00",
          recipient: {id: other_recipient.id},
        },
      ]
    });

    assert.ok(batch);
    assert.ok(batch.id);

    const summary = await testingApiClient.batch.summary(batch.id);
    assert.strictEqual(2, summary.detail["bank-transfer"].count, "Bad Count");

    const quote = await testingApiClient.batch.generateQuote(batch.id);
    assert.ok(quote, "failed to get quote");

    // There's an issue here when it runs too quick. It returns "Operation In Progress"
    // Sleep when running against real API
    const start = await testingApiClient.batch.startProcessing(batch.id);
    assert.ok(start, "Failed to start");

    nockDone();
  });
});
