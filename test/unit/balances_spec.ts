"use strict";

import { Configuration } from '../../src/dist/src/Configuration';
import { Balances } from '../../src/dist/src/Balances';

import * as assert from "assert";
import * as sinon from "sinon";

describe("Retrieve Balances", () => {
    it("ok field should be true yes", async () => {

        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Balances, "find").callsFake(() => {
            return ("{'ok':true,'balances':{}}");
        });
        const data = Balances.find();
        assert.equal(data.substring(6, 10), "true");

        Balances.find.restore();
    });
});

describe("Retrieve paymentrails balance", () => {
    it("ok field should be true", async () => {
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Balances, "find").withArgs("paymentrails").callsFake(() => {
            return ("{'ok':true,'balances':{}}");
        });
        const data = Balances.find("paymentrails");
        assert.equal(data.substring(6, 10), "true");

        Balances.find.restore();
    });
});

describe("Retrieve paypal balances", () => {
    it("ok field should be true", async () => {
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Balances, "find").withArgs("paypal").callsFake(() => {
            return ("{'ok':true,'balances':{}}");
        });
        const data = Balances.find("paypal");
        assert.equal(data.substring(6, 10), "true");

        Balances.find.restore();
    });
});
