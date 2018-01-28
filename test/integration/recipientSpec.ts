import { Configuration, RecipientAccount, Recipient } from "../../lib";
import * as assert from "assert";
import * as uuid from "uuid";

describe("Recipient", () => {
  before(() => {
    Configuration.setApiKey(process.env.PR_ACCESS_KEY);
    Configuration.setApiSecret(process.env.PR_SECRET_KEY);
    Configuration.setEnvironment(process.env.PR_ENVIRONMENT);
  });

  it("create", async () => {
    const id = uuid.v4();

    const recipient = await Recipient.create({
      type: "individual",
      firstName: "Tom",
      lastName: "Jones",
      email: `test.create+${id}@example.com`,
    });

    assert.ok(recipient);
    assert.equal("Tom", recipient.firstName);
    assert.equal("Jones", recipient.lastName);
    assert.ok(recipient.email.includes(id));
    assert.ok(recipient.id);
  });

  it("life cycle", async () => {
    const id = uuid.v4();

    const recipient = await Recipient.create({
      type: "individual",
      firstName: "Tom",
      lastName: "Jones",
      email: `test.lifecycle+${id}@example.com`,
    });

    assert.ok(recipient);
    assert.equal("Tom", recipient.firstName);
    assert.equal("Jones", recipient.lastName);
    assert.ok(recipient.email.includes(id));
    assert.ok(recipient.id);

    assert.equal("incomplete", recipient.status);

    const updateResult = await Recipient.update(recipient.id, {
      firstName: "Bob",
    });

    assert.ok(updateResult);

    const fetchResult = await Recipient.find(recipient.id);
    assert.equal("Bob", fetchResult.firstName);

    const deleteResult = await Recipient.remove(recipient.id);
    assert.equal(deleteResult, true);

    const fetchDeletedResult = await Recipient.find(recipient.id);
    assert.equal("archived", fetchDeletedResult.status);
  });

  //
  //  Recipient Account testing
  //
  // tslint:disable-next-line:mocha-no-side-effect-code
  it("test account", async () => {
    const id = uuid.v4();

    const recipient = await Recipient.create({
      type: "individual",
      firstName: "Tom",
      lastName: "Jones",
      email: `test.create+${id}@example.com`,
      address: {
        street1: "123 Wolfstrasse",
        city: "Berlin",
        country: "DE",
        postalCode: "123123",
      },
    });

    assert.ok(recipient);
    assert.equal("Tom", recipient.firstName);
    assert.equal("Jones", recipient.lastName);
    assert.ok(recipient.email.includes(id));
    assert.ok(recipient.id);

    const account = await RecipientAccount.create(recipient.id, {
      type: "bank-transfer",
      currency: "EUR",
      iban: "DE89 3704 0044 0532 0130 00",
    });

    assert.ok(account);

    const account2 = await RecipientAccount.create(recipient.id, {
      type: "bank-transfer",
      currency: "EUR",
      iban: "FR14 2004 1010 0505 0001 3M02 606",
    });

    assert.ok(account2);

    const findAccount = await RecipientAccount.find(recipient.id, account.id);

    assert.equal(account.iban, findAccount.iban);

    const accountList = await RecipientAccount.all(recipient.id);
    assert.equal(accountList.length, 2);
    assert.equal(accountList[0].currency, "EUR");

    const result = await RecipientAccount.remove(recipient.id, account2.id);
    assert.equal(true, result);

    const accountList2 = await RecipientAccount.all(recipient.id);
    assert.equal(accountList2.length, 1);
  }).timeout(5000);

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
});
