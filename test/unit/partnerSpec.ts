import { Configuration, Gateway } from "../../lib";

import * as assert from "assert";
import * as sinon from "sinon";

describe("Partner", () => {
  let sandbox: sinon.SinonSandbox;
  let gateway: Gateway;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    gateway = new Gateway(new Configuration({ key: "access-code", secret: "secret-code" }));
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("calls each partner endpoint through a dedicated method", async () => {
    const get = sandbox.stub(gateway.client, "get").resolves({ ok: true });
    const patch = sandbox.stub(gateway.client, "patch").resolves({ ok: true });
    const post = sandbox.stub(gateway.client, "post").resolves({ ok: true });
    const remove = sandbox.stub(gateway.client, "remove").resolves({ ok: true });
    const body = { enabled: true };

    await gateway.partner.getFees();
    await gateway.partner.updateFees(body);
    await gateway.partner.listPayoutMethods();
    await gateway.partner.getPayoutMethod("bank-transfer");
    await gateway.partner.updatePayoutMethod("bank-transfer", body);
    await gateway.partner.getProcessingSettings();
    await gateway.partner.updateProcessingSettings(body);
    await gateway.partner.getWhiteLabelDnsRecords();
    await gateway.partner.verifyWhiteLabelDnsRecords();
    await gateway.partner.deleteWhiteLabelEmail();
    await gateway.partner.updateWhiteLabelIcon(body);
    await gateway.partner.getWhiteLabelSettings();
    await gateway.partner.updateWhiteLabelSettings(body);
    await gateway.partner.getWidgetConfiguration();
    await gateway.partner.updateWidgetConfiguration(body);

    assert(get.calledWithExactly("/v1/fees"));
    assert(get.calledWithExactly("/v1/payout-methods"));
    assert(get.calledWithExactly("/v1/payout-methods/bank-transfer"));
    assert(get.calledWithExactly("/v1/processing-settings"));
    assert(get.calledWithExactly("/v1/white-label/dns-records"));
    assert(get.calledWithExactly("/v1/white-label"));
    assert(get.calledWithExactly("/v1/iframe/config"));
    assert(patch.calledWithExactly("/v1/fees", body));
    assert(patch.calledWithExactly("/v1/payout-methods/bank-transfer", body));
    assert(patch.calledWithExactly("/v1/processing-settings", body));
    assert(patch.calledWithExactly("/v1/white-label/icon", body));
    assert(patch.calledWithExactly("/v1/white-label", body));
    assert(post.calledWithExactly("/v1/white-label/dns-records/verify", {}));
    assert(post.calledWithExactly("/v1/iframe/config", body));
    assert(remove.calledWithExactly("/v1/white-label/email"));
  });
});
