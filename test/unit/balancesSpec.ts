import { Configuration, Balance } from "../../lib";
import { BalancesGateway } from "../../lib/BalancesGateway";

import * as assert from "assert";
import * as sinon from "sinon";

describe("Balance", () => {
  let sandbox: sinon.SinonSandbox;

  before(() => {
    sandbox = sinon.sandbox.create();
    Configuration.setApiKey("access-code");
    Configuration.setApiSecret("secret-code");
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("Retrieve all balances", async () => {
    sandbox.stub(BalancesGateway.prototype, "all").callsFake(async () => {
      return {
        ok: true,
        balances: {},
      };
    });

    const data = await Balance.all();

    assert.deepEqual(data, {});
  });

  it("Retrieve paymentrails balance", async () => {
    sandbox
      .stub(BalancesGateway.prototype, "find")
      .withArgs("paymentrails")
      .callsFake(async () => {
        return {
          ok: true,
          balance: {},
        };
      });

    const data = await Balance.find("paymentrails");

    assert.deepEqual(data, {});
  });

  it("Retreive paypal balance", async () => {
    sandbox
      .stub(BalancesGateway.prototype, "find")
      .withArgs("paypal")
      .callsFake(async () => {
        return {
          ok: true,
          balance: {},
        };
      });

    const data = await Balance.find("paypal");

    assert.deepEqual(data, {});
  });
});
