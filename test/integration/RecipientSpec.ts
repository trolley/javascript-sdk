import { Recipient } from "../../lib";
import * as assert from "assert";
import { startNockRec, testingApiClient } from "./helpers/integrationTestsHelpers";
import { RecipientFactory } from "./factories/RecipientFactory";

let recipientFactory: RecipientFactory;

before(async () => {
    recipientFactory = new RecipientFactory();
});

describe("Recipient", () => {
  it("creates a recipient", async () => {
    const nockDone = await startNockRec('recipient-create.json');

    const recipient = await recipientFactory.createResource();

    assert.ok(recipient);
    assert.strictEqual(recipient.constructor, Recipient);
    assert.strictEqual("Tom", recipientFactory.defaultAttrs.firstName);
    assert.strictEqual("Jones", recipientFactory.defaultAttrs.lastName);
    assert.ok(recipient.id);

    nockDone();
  });

  it("updates a recipient", async () => {
    const nockDone = await startNockRec('recipient-update.json');

    const recipient = await recipientFactory.createResource();
    const updatedRecipient = await testingApiClient.recipient.update(recipient.id, {
      firstName: "John",
      lastName: "Smith",
    });

    nockDone();

    assert.ok(updatedRecipient);
    assert.strictEqual(updatedRecipient.constructor, Recipient);
    assert.strictEqual("John", updatedRecipient.firstName);
    assert.strictEqual("Smith", updatedRecipient.lastName);
    });

  it("deletes a recipient", async () => {
    const nockDone = await startNockRec('recipient-delete.json');

    const recipient = await recipientFactory.createResource();
    const deleted = await testingApiClient.recipient.remove(recipient.id);

    nockDone();

    assert.ok(deleted);
    });

  it("searches for a recipient", async () => {
    const nockDone = await startNockRec('recipient-search.json');

    const recipient = await recipientFactory.createResource();
    const recipientsCollection: Recipient[] = await testingApiClient.recipient.search();

    nockDone();

    assert.ok(recipientsCollection);
    assert.strictEqual(1, recipientsCollection.length);
    assert.strictEqual(recipient.id, recipientsCollection[0].id);
    });
  });
