import { connect } from "../../lib";
import { Errors } from "../../lib/errors";

import * as assert from "assert";
import * as nock from "nock";

const API_BASE = "https://api.trolley.com";

describe("Client error handling", () => {
  const unhandled: unknown[] = [];
  const onUnhandled = (reason: unknown) => unhandled.push(reason);
  const client = connect({ key: "access-code", secret: "secret-code" });

  // Asserts the request rejects (rather than hanging until the mocha
  // timeout) and that nothing escaped as an unhandled rejection.
  async function assertRejects(promise: Promise<unknown>, check: (err: any) => void) {
    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("request never settled")), 1000),
    );
    await assert.rejects(Promise.race([promise, timeout]), (err: any) => {
      check(err);
      return true;
    });
    await new Promise((resolve) => setImmediate(resolve));
    assert.deepEqual(unhandled, []);
  }

  beforeEach(() => {
    unhandled.length = 0;
    process.on("unhandledRejection", onUnhandled);
  });

  afterEach(() => {
    process.off("unhandledRejection", onUnhandled);
    nock.cleanAll();
  });

  it("rejects with the transport error when there is no response", async () => {
    nock(API_BASE)
      .get("/v1/recipients/R-1")
      .replyWithError({ code: "ECONNRESET", message: "socket hang up" });

    await assertRejects(client.recipient.find("R-1"), (err) => {
      assert.equal(err.code, "ECONNRESET");
    });
  });

  it("rejects by status when the body has no errors array", async () => {
    nock(API_BASE)
      .get("/v1/recipients/R-1")
      .reply(502, "<html>502 Bad Gateway</html>", { "Content-Type": "text/html" });

    await assertRejects(client.recipient.find("R-1"), (err) => {
      assert.ok(err instanceof Errors.UnexpectedError);
      assert.equal(err.message, "Unexpected HTTP_RESPONSE #502");
      assert.deepEqual(err.validationErrors, []);
    });
  });

  it("still maps API validation errors", async () => {
    nock(API_BASE)
      .get("/v1/recipients/R-1")
      .reply(404, { ok: false, errors: [{ code: "not_found", field: "id", message: "Not found" }] });

    await assertRejects(client.recipient.find("R-1"), (err) => {
      assert.ok(err instanceof Errors.NotFoundError);
      assert.deepEqual(err.validationErrors, [
        { code: "not_found", field: "id", message: "Not found" },
      ]);
    });
  });
});
