import * as assert from "assert";
import * as sinon from "sinon";

import { Configuration, Balance } from "../../lib";
import { Client } from "../../lib/Client";
import { buildApiResponse } from "../test_helpers";

describe("Balance", () => {
  let sandbox: sinon.SinonSandbox;

  before(() => {
    sandbox = sinon.createSandbox();
    Configuration.setApiKey("access-code");
    Configuration.setApiSecret("secret-code");
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("retrieves all balances", async (done) => {
    const response = buildApiResponse("balances/all.json");

    sandbox.stub(Client.prototype, "get")
      .callsFake(async () => {
        done();

        return response;
      });

    const balances = await Balance.all();

    assert.strictEqual(balances.length, 2);
    assert.strictEqual(balances[0] instanceof Balance, true);
    assert.strictEqual(balances[1] instanceof Balance, true);
    assert.strictEqual(balances[0].type, "paymentrails");
    assert.strictEqual(balances[1].type, "paypal");
  });

  it("retrieves paymentrails balance", async (done) => {
    const response = buildApiResponse("balances/paymentrails.json");

    sandbox.stub(Client.prototype, "get")
      .callsFake(async () => {
        done();

        return response;
      });

    const balances = await Balance.find("paymentrails");

    assert.strictEqual(balances.length, 1);
    assert.strictEqual(balances[0] instanceof Balance, true);
    assert.strictEqual(balances[0].type, "paymentrails");
  });

  it("retrieves paypal balance", async (done) => {
    const response = buildApiResponse("balances/paypal.json");

    sandbox.stub(Client.prototype, "get")
      .callsFake(async () => {
        done();

        return response;
      });

    const balances = await Balance.find("paypal");

    assert.strictEqual(balances.length, 1);
    assert.strictEqual(balances[0] instanceof Balance, true);
    assert.strictEqual(balances[0].type, "paypal");
  });
});
