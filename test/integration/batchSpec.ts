import * as paymentrails from '../../lib';
import * as assert from "assert";
import * as nock from "nock"

let nockBack = nock.back
nockBack.setMode('record')
nockBack.fixtures = __dirname + '-fixtures'

describe("Batch/Payment Integration", () => {
  let client: paymentrails.Gateway;

  before(() => {
    client = paymentrails.connect({
      key: process.env.TROLLEY_ACCESS_KEY,
      secret: process.env.TROLLEY_SECRET_KEY,
      environment: process.env.TROLLEY_ENVIRONMENT as any,
    } as any);
  });

  async function createRecipient(email: string) {
    const recipient = await client.recipient.create({
      type: "individual",
      firstName: "Tom",
      lastName: `Jones`,
      email: email,
      address: {
        street1: "123 Wolfstrasse",
        city: "Berlin",
        country: "DE",
        postalCode: "123123",
      },
    });

    await client.recipientAccount.create(recipient.id, {
      type: "bank-transfer",
      currency: "EUR",
      iban: "DE89 3704 0044 0532 0130 00",
    });

    return recipient;
  }

  it("basic create", async () => {
    const { nockDone } = await nockBack('create.json')
    const batch = await client.batch.create({
      sourceCurrency: "USD",
      description: "Integration Test Create",
    });

    assert.ok(batch);
    assert.ok(batch.id);

    const all = await client.batch.all();

    nockDone();

    assert.ok(all.length > 0);
  }).timeout(30000);

  it("update", async () => {
    const { nockDone } = await nockBack('update.json')
    const batch = await client.batch.create({
      sourceCurrency: "USD",
      description: "Integration Test Create",
    });

    assert.ok(batch);
    assert.ok(batch.id);

    const all = await client.batch.all();
    assert.ok(all.length > 0);

    const response = await client.batch.update(batch.id, {
      description: "Integration Update",
    });
    assert.ok(response);

    const findBatch = await client.batch.find(batch.id);
    assert.equal("Integration Update", findBatch.description);
    assert.equal("open", findBatch.status);

    const removeResponse = await client.batch.remove(batch.id);

    assert.ok(removeResponse);

    nockDone();
  }).timeout(30000);

  //tslint:disable-next-line:mocha-no-side-effect-code
  it("create with payments", async () => {
    const { nockDone } = await nockBack('create-with-payments.json')

    const recipientAlpha = await createRecipient('test@example.com');
    const recipientBeta = await createRecipient('test2@example.com');

    const batch = await client.batch.create(
        {
          sourceCurrency: "USD",
          description: "Integration Test Payments",
        },
        [
          {
            targetAmount: "10.00",
            targetCurrency: "EUR",
            recipient: { id: recipientAlpha.id },
          },
          {
            sourceAmount: "10.00",
            recipient: { id: recipientBeta.id },
          },
        ],
    );

    assert.ok(batch);
    assert.ok(batch.id);
    const findBatch = await client.batch.find(batch.id);

    assert.ok(findBatch);
    assert.equal(batch.totalPayments, 2);

    const payments = await client.batch.paymentList(batch.id);
    for (const item of payments) {
      assert.equal(item.status, "pending");
    }

    nockDone();
  }).timeout(30000);

  //tslint:disable-next-line:mocha-no-side-effect-code
  it.only("test processing", async () => {
    const { nockDone } = await nockBack('test-processing.json')

    const recipientAlpha = await createRecipient('processing-recipient@example.com');
    const recipientBeta = await createRecipient('processing-recipient2@example.com');

    const batch = await client.batch.create(
        {
          sourceCurrency: "USD",
          description: "Integration Test Payments",
        },
        [
          {
            targetAmount: "10.00",
            targetCurrency: "EUR",
            recipient: { id: recipientAlpha.id },
          },
          {
            sourceAmount: "10.00",
            recipient: { id: recipientBeta.id },
          },
        ],
    );

    assert.ok(batch);
    assert.ok(batch.id);

    const summary = await client.batch.summary(batch.id);
    assert.equal(2, summary.detail["bank-transfer"].count, "Bad Count");

    const quote = await client.batch.generateQuote(batch.id);
    assert.ok(quote, "failed to get quote");

    // There's an issue here when it runs too quick. It returns "Operation In Progress"
    // Sleep when running against real API
    const start = await client.batch.startProcessing(batch.id);
    assert.ok(start, "Failed to start");

    nockDone();
  }).timeout(30000);

  /*
  it("test all - smoke test", async () => {
    const all = Recipient.all();

    assert.ok(all.length > 0);
  });
  */

  /*
  it("add ", async () => {
    const payload = {
      type: "individual",
      email: "test672@paymentrails.com",
      name: "John Smith",
      firstName: "John",
      lastName: "Smith",
    };
    const response = await Recipient.create(payload);

    const body = {
      type: "bank-transfer",
      primary: "true",
      country: "CA",
      currency: "CAD",
      accountNum: "6022847",
      bankId: "004",
      branchId: "47261",
      accountHolderName: "John Smith",
    };
    const response1 = RecipientAccount.create(response.recipient.id, body);
    const body1 = {
      payments: [
        {
          recipient: {
            id: "R-RLaenm8MGPRGRybqzLcgtL",
          },
          sourceAmount: "975",
          sourceCurrency: "CAD",
          description: "test",
        },
      ],
    };
    const response2 = await Batch.create(body1);
    const body2 = {
      recipient: {
        id: "R-RLaenm8MGPRGRybqzLcgtL",
      },
      sourceAmount: "100.10",
      sourceCurrency: "CAD",
      memo: "Freelance Payment",
    };
    const response3 = await Payment.create(response2.batch.id, body2);
    assert.equal(response3.payment.sourceAmount, "100.10");
  });

  it("process", async () => {
    const payload = {
      type: "individual",
      email: "test7@paymentrails.com",
      name: "John Smith",
      firstName: "John",
      lastName: "Smith",
    };
    const response = await Recipient.create(payload);

    const body = {
      type: "bank-transfer",
      primary: "true",
      country: "CA",
      currency: "CAD",
      accountNum: "6022847",
      bankId: "004",
      branchId: "47261",
      accountHolderName: "John Smith",
    };

    const response1 = await RecipientAccount.create(
      response.recipient.id,
      body,
    );
    const body1 = {
      payment: [
        {
          recipient: {
            id: "R-PWAEMx64EWNag6e4Yh8YKn",
          },
          sourceAmount: "975",
          sourceCurrency: "USD",
          description: "test",
        },
      ],
    };
    const response2 = await Batch.create(body1);
    Batch.generateQuote(response2.batch.id);
    const response3 = await Batch.processBatch(response2.batch.id);
    assert.equal("processing", response3.batch.status);
  });

  it("delete", async () => {
    Configuration.setApiKey("YOUR_PUBLIC_KEY");
    Configuration.setApiSecret("YOUR_PRIVATE_KEY");

    const payload = {
      type: "individual",
      email: "test8@paymentrails.com",
      name: "John Smith",
      firstName: "John",
      lastName: "Smith",
    };
    const response = await Recipient.create(payload);

    const body = {
      type: "bank-transfer",
      primary: "true",
      country: "CA",
      currency: "CAD",
      accountNum: "6022847",
      bankId: "004",
      branchId: "47261",
      accountHolderName: "John Smith",
    };

    const response1 = await RecipientAccount.create(
      response.recipient.id,
      body,
    );
    const body1 = {
      payment: [
        {
          recipient: {
            id: "R-PWAEMx64EWNag6e4Yh8YKn",
          },
          sourceAmount: "975",
          sourceCurrency: "USD",
          description: "test",
        },
      ],
    };
    const response2 = await Batch.create(body1);
    const response3 = await Batch.remove(response2.batch.id);
    assert.equal(response, '{"ok":true}');
  });

  it("create", async () => {
    const payload = {
      type: "individual",
      email: "test9@paymentrails.com",
      name: "John Smith",
      firstName: "John",
      lastName: "Smith",
    };
    const response = await Recipient.create(payload);

    const body = {
      type: "bank-transfer",
      primary: "true",
      country: "CA",
      currency: "CAD",
      accountNum: "6022847",
      bankId: "004",
      branchId: "47261",
      accountHolderName: "John Smith",
    };

    const response2 = await RecipientAccount.create(
      response.recipient.id,
      body,
    );
    const body1 = {
      payment: [
        {
          recipient: {
            id: "R-PWAEMx64EWNag6e4Yh8YKn",
          },
          sourceAmount: "975",
          sourceCurrency: "USD",
          description: "test",
        },
      ],
    };
    const response3 = await Batch.create(body1);
    assert.equal(response3.batch.currency, "USD");
  });
  */
});
