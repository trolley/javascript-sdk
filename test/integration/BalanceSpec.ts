import {startNockRec, testingApiClient} from "./helpers/integrationTestsHelpers";
import * as assert from "assert";

describe("Balance", () => {
    it("lists all balances", async () => {
        const nockDone = await startNockRec('balance-all.json');

        const balances = await testingApiClient.balances.all();

        assert.ok(balances);
        assert.strictEqual(2, balances.length);
        assert.strictEqual("paymentrails", balances[0].type);
        assert.strictEqual("paypal", balances[1].type);

        nockDone();
    });

    it("lists balances for a given kind", async () => {
        const nockDone = await startNockRec('balance-find.json');

        const balances = await testingApiClient.balances.find("paypal");

        assert.ok(balances);
        assert.strictEqual(1, balances.length);
        assert.strictEqual("paypal", balances[0].type);

        nockDone();
    });
});