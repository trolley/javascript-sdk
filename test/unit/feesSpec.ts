import { Configuration, Gateway } from "../../lib";
import { FeesGateway } from "../../lib/FeesGateway";

import * as assert from "assert";
import * as sinon from "sinon";

describe("FeesGateway", () => {
  let sandbox: sinon.SinonSandbox;
  let client: {
    post: sinon.SinonStub;
  };
  let fees: FeesGateway;

  const revenueStream = {
    currencyCode: "USD",
    integration: "bank-transfer",
    routeType: "ach",
    merchantAmountType: "percentage",
    merchantAmount: "8.00",
    guardrails: {
      fixed: { min: "0.00", max: "2.00" },
      percentage: { min: "0.00", max: "10.00" },
    },
    percentCap: { min: "2.00", max: "75.00" },
    revenueShareId: "RSRC-123",
  };

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    client = {
      post: sandbox.stub(),
    };
    fees = new FeesGateway({
      client,
      config: {},
    } as any);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("searches route pricing with an optional body and maps fees", async () => {
    const routePricing = [{
      currencyCode: "USD",
      revenueStream: {
        bankTransfer: {
          ach: revenueStream,
        },
      },
    }];
    client.post.resolves({ ok: true, fees: routePricing });

    assert.strictEqual(await fees.searchRoutePricing(), routePricing);
    assert.strictEqual(
      await fees.searchRoutePricing({ currency: "USD" }),
      routePricing,
    );
    assert.deepStrictEqual(client.post.getCall(0).args, [
      "/v1/fees/route-pricing/search",
      {},
    ]);
    assert.deepStrictEqual(client.post.getCall(1).args, [
      "/v1/fees/route-pricing/search",
      { currency: "USD" },
    ]);
  });

  it("creates a revenue stream and maps the response", async () => {
    const body = {
      currencyCode: "USD",
      integration: "bank-transfer",
      routeType: "ach",
      merchantAmountType: "percentage",
      merchantAmount: "8.00",
      minPercentCapAmount: "2.00",
      maxPercentCapAmount: "75.00",
    } as const;
    client.post.resolves({ ok: true, revenueStream });

    assert.strictEqual(await fees.createRevenueStream(body), revenueStream);
    assert.deepStrictEqual(client.post.getCall(0).args, [
      "/v1/fees/revenue-stream/create",
      body,
    ]);
  });

  it("passes null caps through when updating a revenue stream", async () => {
    const body = {
      revenueShareId: "RSRC-123",
      currencyCode: "USD",
      integration: "bank-transfer",
      routeType: "ach",
      merchantAmountType: "percentage",
      merchantAmount: "9.00",
      minPercentCapAmount: null,
      maxPercentCapAmount: null,
    } as const;
    client.post.resolves({ ok: true, revenueStream });

    assert.strictEqual(await fees.updateRevenueStream(body), revenueStream);
    assert.deepStrictEqual(client.post.getCall(0).args, [
      "/v1/fees/revenue-stream/update",
      body,
    ]);
  });

  it("is available on the main gateway", () => {
    const gateway = new Gateway(new Configuration({ key: "key", secret: "secret" }));

    assert.ok(gateway.fees instanceof FeesGateway);
  });
});
