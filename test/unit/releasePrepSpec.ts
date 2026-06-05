import { Batch, Balance, Configuration, Gateway, OfflinePayment, Payment, Recipient, RecipientAccount } from "../../lib";
import { BatchGateway } from "../../lib/BatchGateway";
import { BalancesGateway } from "../../lib/BalancesGateway";
import { PaymentGateway } from "../../lib/PaymentGateway";
import { VerificationGateway } from "../../lib/VerificationGateway";

import * as assert from "assert";
import * as sinon from "sinon";

describe("Release prep endpoint coverage", () => {
  let sandbox: sinon.SinonSandbox;
  let client: {
    get: sinon.SinonStub,
    post: sinon.SinonStub,
    patch: sinon.SinonStub,
  };
  let gateway: any;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    client = {
      get: sandbox.stub(),
      post: sandbox.stub(),
      patch: sandbox.stub(),
    };
    gateway = {
      client,
      config: {},
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("uses documented balance endpoints", async () => {
    const balances = new BalancesGateway(gateway);
    const result = {
      ok: true,
      balances: {
        USD: {
          primary: true,
          amount: "10.00",
          currency: "USD",
          type: "paymentrails",
          accountNumber: "BL-123",
          display: true,
        },
      },
    };
    client.get.resolves(result);

    assert.strictEqual((await balances.all())[0].type, "paymentrails");
    assert.strictEqual((await balances.find("paymentrails"))[0].type, "paymentrails");
    assert.strictEqual((await balances.paymentrails())[0].type, "paymentrails");
    assert.strictEqual((await balances.paypal())[0].type, "paymentrails");

    assert.deepStrictEqual(client.get.getCall(0).args, ["/v1/balances"]);
    assert.deepStrictEqual(client.get.getCall(1).args, ["/v1/balances/paymentrails"]);
    assert.deepStrictEqual(client.get.getCall(2).args, ["/v1/balances/paymentrails"]);
    assert.deepStrictEqual(client.get.getCall(3).args, ["/v1/balances/paypal"]);
  });

  it("finds payments by top-level id or batch payment id", async () => {
    const payments = new PaymentGateway(gateway);
    client.get.resolves({
      ok: true,
      payment: {
        id: "P-123",
        recipient: { id: "R-123", accounts: [] },
        visibleToRecipient: false,
      },
    });

    assert.strictEqual((await payments.find("P-123")).id, "P-123");
    assert.strictEqual((await payments.find("P-123", "B-123")).id, "P-123");

    assert.deepStrictEqual(client.get.getCall(0).args, ["/v1/payments/P-123"]);
    assert.deepStrictEqual(client.get.getCall(1).args, ["/v1/batches/B-123/payments/P-123"]);
  });

  it("exposes trust verification helpers", async () => {
    const verifications = new VerificationGateway(gateway);
    const response = {
      ok: true,
      verifications: [{ id: "WV-123", type: "watchlist", recipientId: "R-123", status: "pending" }],
      meta: { page: 1, pages: 1, records: 1 },
    };
    client.get.resolves(response);
    client.patch.resolves(response);
    client.post.resolves(response);

    assert.strictEqual((await verifications.search({ verificationType: "watchlist", page: 1, pageSize: 10 }))[0].id, "WV-123");
    assert.strictEqual((await verifications.all({ page: 1 }))[0].id, "WV-123");
    assert.strictEqual((await verifications.expire({ type: "individual", verificationIds: ["IV-123"] }))[0].id, "WV-123");
    assert.strictEqual((await verifications.trigger("individual", { recipientIds: ["R-123"] }))[0].id, "WV-123");
    assert.strictEqual((await verifications.triggerWatchlist({ recipientIds: ["R-123"] }))[0].id, "WV-123");
    assert.strictEqual((await verifications.trigger_watchlist({ recipientIds: ["R-123"] }))[0].id, "WV-123");

    assert.deepStrictEqual(client.get.getCall(0).args, ["/v1/verifications?verificationType=watchlist&page=1&pageSize=10"]);
    assert.deepStrictEqual(client.get.getCall(1).args, ["/v1/verifications?page=1"]);
    assert.deepStrictEqual(client.patch.getCall(0).args, ["/v1/verifications/expire", { type: "individual", verificationIds: ["IV-123"] }]);
    assert.deepStrictEqual(client.post.getCall(0).args, ["/v1/verifications/individual/trigger", { recipientIds: ["R-123"] }]);
    assert.deepStrictEqual(client.post.getCall(1).args, ["/v1/verifications/watchlist/trigger", { recipientIds: ["R-123"] }]);
    assert.deepStrictEqual(client.post.getCall(2).args, ["/v1/verifications/watchlist/trigger", { recipientIds: ["R-123"] }]);
  });

  it("constructs gateway verification aliases", () => {
    const configured = new Gateway(new Configuration({ key: "key", secret: "secret" }));

    assert.ok(configured.verification instanceof VerificationGateway);
    assert.strictEqual(configured.trust, configured.verification);
  });

  it("passes batch tags through create requests", async () => {
    const batches = new BatchGateway(gateway);
    client.post.resolves({
      ok: true,
      batch: { id: "B-123", sourceCurrency: "USD", tags: ["weekly-payouts"] },
    });

    const batch = await batches.create({
      sourceCurrency: "USD",
      tags: ["weekly-payouts"],
    });

    assert.deepStrictEqual(client.post.getCall(0).args, [
      "/v1/batches",
      { sourceCurrency: "USD", tags: ["weekly-payouts"] },
    ]);
    assert.deepStrictEqual(batch.tags, ["weekly-payouts"]);
  });

  it("maps documented response fields", () => {
    const batch = Batch.factory({ id: "B-123", tags: ["tag"] } as any);
    const payment = Payment.factory({
      id: "P-123",
      recipient: { id: "R-123", accounts: [] },
      sourceCurrencyName: "US Dollar",
      targetCurrencyName: "Canadian Dollar",
      visibleToRecipient: false,
      withholdingAmount: "1.00",
      withholdingCurrency: "USD",
      equivalentWithholdingAmount: "1.00",
      equivalentWithholdingCurrency: "CAD",
      taxBasisAmount: "10.00",
      taxBasisCurrency: "USD",
    } as any);
    const recipient = Recipient.factory({ id: "R-123", accounts: [], payoutMethod: "bank-transfer", tags: ["tag"] } as any);
    const account = RecipientAccount.factory({ id: "A-123", cardDetails: { brand: "visa" }, mailing: { city: "Toronto" }, phoneNumber: "+15555550123" } as any);
    const offlinePayment = OfflinePayment.factory({
      id: "OP-123",
      recipientId: "R-123",
      activityCount: "2",
      equivalentWithholdingAmount: "1.00",
      equivalentWithholdingCurrency: "CAD",
      createdAt: "2026-01-01T00:00:00Z",
      updatedAt: "2026-01-01T00:00:00Z",
      deletedAt: null,
    } as any);

    assert.deepStrictEqual(batch.tags, ["tag"]);
    assert.strictEqual(payment.sourceCurrencyName, "US Dollar");
    assert.strictEqual(payment.targetCurrencyName, "Canadian Dollar");
    assert.strictEqual(payment.visibleToRecipient, false);
    assert.strictEqual(payment.equivalentWithholdingCurrency, "CAD");
    assert.strictEqual(payment.taxBasisAmount, "10.00");
    assert.strictEqual(recipient.payoutMethod, "bank-transfer");
    assert.deepStrictEqual(recipient.tags, ["tag"]);
    assert.deepStrictEqual(account.cardDetails, { brand: "visa" });
    assert.deepStrictEqual(account.mailing, { city: "Toronto" });
    assert.strictEqual(account.phoneNumber, "+15555550123");
    assert.strictEqual(offlinePayment.activityCount, "2");
    assert.strictEqual(offlinePayment.equivalentWithholdingCurrency, "CAD");
  });
});
