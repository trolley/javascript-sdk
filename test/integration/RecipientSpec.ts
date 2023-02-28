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
    assert.ok(recipient.id);
    assert.strictEqual(recipient.constructor, Recipient);
    assert.strictEqual(recipientFactory.defaultAttrs.firstName, "Tom");
    assert.strictEqual(recipientFactory.defaultAttrs.lastName, "Jones");

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

  it("searches for a recipient", async () => {
    const nockDone = await startNockRec('recipient-search.json');

    const recipient = await recipientFactory.createResource();
    const recipientsCollection: Recipient[] = await testingApiClient.recipient.search();

    nockDone();

    assert.ok(recipientsCollection);
    assert.strictEqual(recipientsCollection.length, 1);
    assert.strictEqual(recipient.id, recipientsCollection[0].id);
    });
  });
