import * as assert from "assert";
import {RecipientAccountFactory, RecipientFactory} from "./factories/ApiFactory";
import {startNockRec, testingApiClient} from "./helpers/integrationTestsHelpers";

const recipientFactory = new RecipientFactory();
const recipientAccountFactory = new RecipientAccountFactory();

// tslint:disable-next-line:mocha-no-side-effect-code
it("test account", async () => {
    const nockDone = await startNockRec('recipient-account.json');

    const recipient = await recipientFactory.createResource();

    assert.ok(recipient);
    assert.strictEqual("Tom", recipient.firstName);
    assert.strictEqual("Jones", recipient.lastName);
    assert.ok(recipient.id);

    const account = await recipientAccountFactory.createResource(
        {
            recipient: {id: recipient.id},
        }
    );

    assert.ok(account);
    assert.ok(account.primary);

    const account2 = await recipientAccountFactory.createResource({
        recipient: {
            id: recipient.id
        },
        type: "bank-transfer",
        currency: "EUR",
        iban: "FR14 2004 1010 0505 0001 3M02 606",
        primary: true,
    });

    assert.ok(account2);
    assert.ok(account2.primary);

    const primaryAccount = await testingApiClient.recipientAccount.find(recipient.id, account.id);

    assert.strictEqual(account.iban, primaryAccount.iban);

    const accountList = await testingApiClient.recipientAccount.all(recipient.id);
    assert.strictEqual(accountList.length, 2);
    assert.strictEqual(accountList[0].currency, "EUR");

    const result = await testingApiClient.recipientAccount.remove(recipient.id, account.id);
    assert.strictEqual(true, result);

    const accountList2 = await testingApiClient.recipientAccount.all(recipient.id);
    assert.strictEqual(accountList2.length, 1);
    assert.ok(accountList2[0].primary);

    nockDone();
})

it("account update", async () => {
    const nockDone = await startNockRec('recipient-account-update.json');

    const recipient = await recipientFactory.createResource();
    assert.ok(recipient);

  const account = await recipientAccountFactory.createResource({
      recipient: {id: recipient.id},
      type: "bank-transfer",
      currency: "EUR",
      iban: "DE89 3704 0044 0532 0130 00",
  });

  assert.ok(account);

  const account2 = await testingApiClient.recipientAccount.update(recipient.id, account.id, {
    iban: "FR14 2004 1010 0505 0001 3M02 606",
  });

  assert.ok(account2);
  assert.notStrictEqual(account.id, account2.id);
  assert.ok(account2.iban && account2.iban.includes("**06"));

  const accountList = await testingApiClient.recipientAccount.all(recipient.id);

  assert.strictEqual(accountList.length, 1);
  assert.ok((accountList as any)[0].iban.includes("**06"));
  assert.strictEqual(accountList[0].id, account2.id);

    nockDone();
});

/*
it("Update - Name should be George", async () => {
  const payload = {
    type: "individual",
    email: "test@paymentrails.com",
    name: "John Smith",
    firstName: "John",
    lastName: "Smith",
  };
  const response = await Recipient.create(payload);

  const recipientId = response.recipient.id;
  assert.equal("John", response.recipient.firstName);

  const payload1 = {
    firstName: "George",
    lastName: "Jetson",
  };

  const response1 = await Recipient.update(recipientId, payload1);
  assert.equal(response1.ok, true);
});

it("Delete Recipient", async () => {
  const payload = {
    type: "individual",
    email: "test1@paymentrails.com",
    name: "John Smith",
    firstName: "John",
    lastName: "Smith",
  };
  const response = await Recipient.create(payload);

  assert.equal(response.recipient.email, "test1@paymentrails.com");
  const recipientId = response.recipient.id;
  const response1 = await Recipient.remove(recipientId);
  assert.equal(response1, '{"ok":true}');
});

it("Create Account", async () => {
  const payload = {
    type: "individual",
    email: "test2@paymentrails.com",
    name: "John Smith",
    firstName: "John",
    lastName: "Smith",
  };

  const response = await Recipient.create(payload);
  const recipientId = response.recipient.id;
  assert.equal(response.recipient.firstName, "John");

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

  const response1 = await RecipientAccount.create(recipientId, body);
  assert.equal(response1.account.type, "bank-transfer");
});

it("Delete", async () => {
  const payload = {
    type: "individual",
    email: "test3@paymentrails.com",
    name: "John Smith",
    firstName: "John",
    lastName: "Smith",
  };

  const response = await Recipient.create(payload);
  const recipientId = response.recipient.id;
  assert.equal(response.recipient.firstName, "John");

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

  const response1 = await RecipientAccount.create(recipientId, body);
  assert.equal(response1.account.type, "bank-transfer");
  const recipientAccountId = response1.account.recipientAccountId;
  const response2 = await RecipientAccount.remove(
    recipientId,
    recipientAccountId,
  );
  assert.equal(
    response2,
    '{"ok":false,"errors":[{"code":"invalid_status","message":"Cannot delete primary account","field":"primary"}]}',
  );
});
*/