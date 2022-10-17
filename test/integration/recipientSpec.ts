import { Configuration, RecipientAccount, Recipient } from "../../lib";
import * as assert from "assert";
import {RecipientFactory} from "./factories/ApiFactory";
import {startNockRec, testingApiClient} from "./helpers/integrationTestsHelpers";

const recipientFactory = new RecipientFactory();
const apiClient = testingApiClient

describe("Recipient", () => {
  it("creates a recipient", async () => {
    const nockDone = await startNockRec('recipient-create.json');

    const recipient = await recipientFactory.createResource();

    assert.ok(recipient);
    assert.strictEqual("Tom", recipientFactory.defaultAttrs.firstName);
    assert.strictEqual("Jones", recipientFactory.defaultAttrs.lastName);
    assert.ok(recipient.id);

    nockDone();
  });

  it("life cycle", async () => {
    const nockDone = await startNockRec('recipient-life-cycle.json');

    const recipient = await recipientFactory.createResource(
        {
          type: "individual",
          firstName: "Tom",
          lastName: "Jones",
          email: `test.lifecycle@example.com`,
        }
    );

    assert.ok(recipient);
    assert.strictEqual("Tom", recipient.firstName);
    assert.strictEqual("Jones", recipient.lastName);
    assert.ok(recipient.id);

    assert.strictEqual("incomplete", recipient.status);

    const updateResult = await testingApiClient.recipient.update(recipient.id, {
      firstName: "Bob",
    });

    assert.ok(updateResult);

    const fetchResult = await testingApiClient.recipient.find(recipient.id);
    assert.strictEqual("Bob", fetchResult.firstName);

    const deleteResult = await testingApiClient.recipient.remove(recipient.id);
    assert.strictEqual(deleteResult, true);

    const fetchDeletedResult = await testingApiClient.recipient.find(recipient.id);
    assert.strictEqual("archived", fetchDeletedResult.status);

    nockDone();
  });

  // //
  // //  Recipient Account testing
  // //
  // // tslint:disable-next-line:mocha-no-side-effect-code
  // it("test account", async () => {
  //   const id = uuid.v4();
  //
  //   const recipient = await Recipient.create({
  //     type: "individual",
  //     firstName: "Tom",
  //     lastName: "Jones",
  //     email: `test.create+${id}@example.com`,
  //     address: {
  //       street1: "123 Wolfstrasse",
  //       city: "Berlin",
  //       country: "DE",
  //       postalCode: "123123",
  //     },
  //   });
  //
  //   assert.ok(recipient);
  //   assert.equal("Tom", recipient.firstName);
  //   assert.equal("Jones", recipient.lastName);
  //   assert.ok(recipient.email.includes(id));
  //   assert.ok(recipient.id);
  //
  //   const account = await RecipientAccount.create(recipient.id, {
  //     type: "bank-transfer",
  //     currency: "EUR",
  //     iban: "DE89 3704 0044 0532 0130 00",
  //   });
  //
  //   assert.ok(account);
  //   assert.ok(account.primary);
  //
  //   const account2 = await RecipientAccount.create(recipient.id, {
  //     type: "bank-transfer",
  //     currency: "EUR",
  //     iban: "FR14 2004 1010 0505 0001 3M02 606",
  //     primary: true,
  //   });
  //
  //   assert.ok(account2);
  //   assert.ok(account2.primary);
  //
  //   const findAccount = await RecipientAccount.find(recipient.id, account.id);
  //
  //   assert.equal(account.iban, findAccount.iban);
  //
  //   const accountList = await RecipientAccount.all(recipient.id);
  //   assert.equal(accountList.length, 2);
  //   assert.equal(accountList[0].currency, "EUR");
  //
  //   const result = await RecipientAccount.remove(recipient.id, account.id);
  //   assert.equal(true, result);
  //
  //   const accountList2 = await RecipientAccount.all(recipient.id);
  //   assert.equal(accountList2.length, 1);
  //   assert.ok(accountList2[0].primary);
  // }).timeout(5000);

  // it("account update", async () => {
  //   const id = uuid.v4();
  //
  //   const recipient = await Recipient.create({
  //     type: "individual",
  //     firstName: "Tom",
  //     lastName: "Jones",
  //     email: `test.account+${id}@example.com`,
  //     address: {
  //       street1: "123 Wolfstrasse",
  //       city: "Berlin",
  //       country: "DE",
  //       postalCode: "123123",
  //     },
  //   });
  //
  //   assert.ok(recipient);
  //
  //   const account = await RecipientAccount.create(recipient.id, {
  //     type: "bank-transfer",
  //     currency: "EUR",
  //     iban: "DE89 3704 0044 0532 0130 00",
  //   });
  //
  //   assert.ok(account);
  //
  //   const account2 = await RecipientAccount.update(recipient.id, account.id, {
  //     iban: "FR14 2004 1010 0505 0001 3M02 606",
  //   });
  //
  //   assert.ok(account2);
  //   assert.notEqual(account.id, account2.id);
  //   assert.ok(account2.iban && account2.iban.includes("**06"));
  //
  //   const accountList = await RecipientAccount.all(recipient.id);
  //
  //   assert.equal(accountList.length, 1);
  //   assert.ok((accountList as any)[0].iban.includes("**06"));
  //   assert.equal(accountList[0].id, account2.id);
  // });

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
