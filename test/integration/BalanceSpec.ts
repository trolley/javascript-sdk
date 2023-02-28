import { startNockRec, testingApiClient } from "./helpers/integrationTestsHelpers";
import * as assert from "assert";
import { Balance } from "../../lib";

describe("Balance", () => {
    it("lists all balances", async () => {
        const nockDone = await startNockRec('balance-all.json');

        const balances = await testingApiClient.balances.all();

        nockDone();

        assert.ok(balances);
        assert.strictEqual(balances.length, 1);
        assert.strictEqual(balances[0].constructor, Balance);
        assert.strictEqual(balances[0].type, "paymentrails");
    });

    it("lists balances for a given kind", async () => {
        const nockDone = await startNockRec('balance-find.json');

        const balances = await testingApiClient.balances.find("paymentrails");

        nockDone();

        assert.ok(balances);
        assert.strictEqual(balances.length, 1);
        assert.strictEqual(balances[0].constructor, Balance);
        assert.strictEqual(balances[0].type, "paymentrails");
    });
});
