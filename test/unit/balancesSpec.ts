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

  it("Retrieve all balances", async (done) => {
    const response = buildApiResponse("balances/all.json");

    sandbox.stub(Client.prototype, "get")
      .callsFake(async () => {
        done();

        return response;
      });

    const balances = await Balance.all();

    assert.strictEqual(balances.length, 1);
    assert.strictEqual(balances[0] instanceof Balance, true);

    assert.strictEqual(balances[0].primary, true);
    assert.strictEqual(balances[0].type, "paymentrails");
  });

  // it("Retrieve paymentrails balance", async () => {
  //   sandbox
  //     .stub(BalancesGateway.prototype, "find")
  //     .withArgs("paymentrails")
  //     .callsFake(async () => {
  //       return {
  //         ok: true,
  //         balance: {},
  //       };
  //     });
  //
  //   const data = await Balance.find("paymentrails");
  //
  //   assert.deepEqual(data, {});
  // });

  // it("Retreive paypal balance", async () => {
  //   sandbox
  //     .stub(BalancesGateway.prototype, "find")
  //     .withArgs("paypal")
  //     .callsFake(async () => {
  //       return {
  //         ok: true,
  //         balance: {},
  //       };
  //     });
  //
  //   const data = await Balance.find("paypal");
  //
  //   assert.deepEqual(data, {});
  // });
});
