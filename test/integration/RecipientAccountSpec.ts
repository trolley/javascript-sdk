import * as assert from "assert";
import { startNockRec, testingApiClient } from "./helpers/integrationTestsHelpers";
import { RecipientFactory } from "./factories/RecipientFactory";
import { RecipientAccountFactory } from "./factories/RecipientAccountFactory";
import {RecipientAccount} from "../../lib";

let recipientFactory: RecipientFactory;
let recipientAccountFactory: RecipientAccountFactory;

before(async () => {
    recipientFactory = new RecipientFactory();
    recipientAccountFactory = new RecipientAccountFactory();
});

describe("RecipientAccount", () => {
    it("creates account", async () => {
        const nockDone = await startNockRec('recipient-account.json');

        const recipient = await recipientFactory.createResource();
        const account = await recipientAccountFactory.createResource(
            {
                recipient: { id: recipient.id },
            },
        );
        const account2 = await recipientAccountFactory.createResource({
            recipient: {
                id: recipient.id,
            },
            type: "bank-transfer",
            currency: "EUR",
            iban: "FR14 2004 1010 0505 0001 3M02 606",
            primary: true,
        });

        const primaryAccount = await testingApiClient.recipientAccount.find(recipient.id, account.id);
        const accountList = await testingApiClient.recipientAccount.all(recipient.id);
        const deleteResult = await testingApiClient.recipientAccount.remove(recipient.id, account.id);
        const accountList2 = await testingApiClient.recipientAccount.all(recipient.id);

        nockDone();

        assert.ok(account);
        assert.ok(account.primary);
        assert.ok(account2);
        assert.ok(account2.primary);

        assert.strictEqual(account.constructor, RecipientAccount);
        assert.strictEqual(account2.constructor, RecipientAccount);
        assert.strictEqual(account.iban, primaryAccount.iban);

        assert.strictEqual(accountList.length, 2);
        assert.strictEqual(accountList[0].constructor, RecipientAccount);
        assert.strictEqual(accountList[1].constructor, RecipientAccount);

        assert.strictEqual(accountList2.length, 1);
        assert.strictEqual(accountList2[0].id, account2.id);

        assert.strictEqual(deleteResult, true);

        assert.strictEqual(accountList2.length, 1);
        assert.ok(accountList2[0].primary);
    });

    it("updates account", async () => {
        const nockDone = await startNockRec('recipient-account-update.json');

        const recipient = await recipientFactory.createResource();
        const iban = "DE89 3704 0044 0532 0130 00";
        const account = await recipientAccountFactory.createResource({
            recipient: { id: recipient.id },
            type: "bank-transfer",
            currency: "EUR",
            iban: iban,
        });
        const otherIban = "DE91 1000 0000 0123 4567 89";
        const updatedAccount = await testingApiClient.recipientAccount.update(recipient.id, account.id, {
            iban: otherIban,
        });

        const accountList = await testingApiClient.recipientAccount.all(recipient.id);

        nockDone();

        assert.ok(account);
        assert.ok(updatedAccount);
        assert.strictEqual(account.constructor, RecipientAccount);
        assert.strictEqual(updatedAccount.constructor, RecipientAccount);
        assert.ok(updatedAccount.iban && updatedAccount.iban.includes("**89"));

        assert.ok((accountList as any)[0].iban.includes("**89"));
        assert.strictEqual(accountList.length, 1);
        assert.strictEqual(accountList[0].id, updatedAccount.id);
    });

    it("deletes account", async () => {
        const nockDone = await startNockRec('recipient-account-delete.json');

        const recipient = await recipientFactory.createResource();
        const account = await recipientAccountFactory.createResource({
            recipient: { id: recipient.id },
        });
        const deleteResult = await testingApiClient.recipientAccount.remove(recipient.id, account.id);
        const accountList = await testingApiClient.recipientAccount.all(recipient.id);

        nockDone();

        assert.ok(account);
        assert.strictEqual(deleteResult, true);
        assert.strictEqual(accountList.length, 0);
    });

    it("finds account", async () => {
        const nockDone = await startNockRec('recipient-account-find.json');

        const recipient = await recipientFactory.createResource();
        const account = await recipientAccountFactory.createResource({
            recipient: { id: recipient.id },
        });
        const account2 = await testingApiClient.recipientAccount.find(recipient.id, account.id);

        nockDone();

        assert.ok(account);
        assert.ok(account2);
        assert.strictEqual(account.id, account2.id);
    });
});
