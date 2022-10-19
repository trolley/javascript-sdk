import { Recipient } from "../../lib";
import * as assert from "assert";
import {startNockRec, testingApiClient} from "./helpers/integrationTestsHelpers";
import {RecipientFactory} from "./factories/RecipientFactory";

const recipientFactory = new RecipientFactory();

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
});
