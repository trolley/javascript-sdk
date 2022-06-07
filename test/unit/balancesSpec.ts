import { Configuration, Balance } from "../../lib";
import { BalancesGateway } from "../../lib/BalancesGateway";

import * as assert from "assert";
import * as sinon from "sinon";
import { Client } from "../../lib/Client";
import * as types from "../../lib/types";

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
    sandbox.stub(Client.prototype, "get")
      .callsFake(async () => {
        done();

        return {
          ok: true,
          balances: [
            {
              primary: true,
              type: "paymentrails",
              accountNumber: "BL-He8PPEvr4ZKx6pK7NtbTU6",
              display: true,
              amount: "98801.36",
              currency: "USD",
              pendingCredit: "0.00",
              pendingDebit: "0.00",
              amountPending: "98801.36",
              amountCleared: "98801.36",
              provider: "sandbox",
              providerId: undefined,
              providerAcct: "03362348950",
            },
          ],
        };
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
