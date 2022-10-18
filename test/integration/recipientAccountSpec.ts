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

    const dummyIban = "DE89 3704 0044 0532 0130 00"
    const account = await recipientAccountFactory.createResource({
        recipient: {id: recipient.id},
        type: "bank-transfer",
        currency: "EUR",
        iban: dummyIban,
    });

    assert.ok(account);

    const otherDummyIban = "DE91 1000 0000 0123 4567 89"
    const account2 = await testingApiClient.recipientAccount.update(recipient.id, account.id, {
        iban: otherDummyIban,
    });

    assert.ok(account2);
    assert.notStrictEqual(account.id, account2.id);
    assert.ok(account2.iban && account2.iban.includes("**89"));

    const accountList = await testingApiClient.recipientAccount.all(recipient.id);

    assert.strictEqual(accountList.length, 1);
    assert.ok((accountList as any)[0].iban.includes("**89"));
    assert.strictEqual(accountList[0].id, account2.id);

    nockDone();
});