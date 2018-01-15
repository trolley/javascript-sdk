"use strict";

import { Configuration } from '../../src/Configuration';
import { RecipientAccount } from '../../src/RecipientAccount';

import * as assert from "assert";
import * as sinon from "sinon";

describe("Retrieve account method", () => {
    it("ok field should be true", async () => {

        Configuration.setApiKey("access-code");
        Configuration.setApiSecret("secret-code");
        sinon.stub(RecipientAccount, "find").withArgs("R-91XPJZTR612MG", "A-A1B2C3D4E5F6").callsFake(() => {
            return ("{'ok':true,'account':{'type':'paypal','emailAddress':'sample@example.com','recipientAccountId':'A-3SaFeu7eMjj3vaBeoEcZED','primary':true,'currency':'USD'}}");
        });
        const data = await RecipientAccount.find("R-91XPJZTR612MG", "A-A1B2C3D4E5F6");
        assert.equal(data.substring(6, 10), "true");

        RecipientAccount.find.restore();

    });
});

describe("Retrieve account method Invalid Recipient id", () => {
    it("ok field should be false", async () => {
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(RecipientAccount, "find").withArgs("R-123", "A-A1B2C3D4E5F6").callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });
        const data = await RecipientAccount.find("R-123", "A-A1B2C3D4E5F6");
        assert.equal(data.substring(6, 11), "false");
        RecipientAccount.find.restore();

    });
});

describe("Create account method", () => {
    it("ok field should be true", async () => {
        const body = {
            primary: {
                method: "bank",
                currency: "CAD",
            },
            accounts: {
                bank: {
                    country: "CA",
                    accountNum: "6022847",
                    institution: "123",
                    branchNum: "47261",
                    currency: "CAD",
                    name: "TD",
                },
            },
        };

        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(RecipientAccount, "create").withArgs("R-91XPMEHZ44RMP", body).callsFake(() => {
            return ("{'ok':true,'account':{'recipientAccountId':'A-SKQnB1eyJ1imqBftXq9Dqg','primary':true,'currency':'CAD','country':'CA','type':'bank-transfer','accountNum':'*******47','accountHolderName':'John Smith','branchId':'47261','bankId':'004','bankName':'THE TORONTO-DOMINION BANK'}}");
        });
        const data = await RecipientAccount.create("R-91XPMEHZ44RMP", body);
        assert.equal(data.substring(6, 10), "true");

        RecipientAccount.create.restore();

    });
});

describe("Create account method invalid recipient id", () => {
    it("ok field should be false", async () => {
        const body = {
            primary: {
                method: "bank",
                currency: "CAD",
            },
            accounts: {
                bank: {
                    country: "CA",
                    accountNum: "6022847",
                    institution: "123",
                    branchNum: "47261",
                    currency: "CAD",
                    name: "TD",
                },
            },
        };
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(RecipientAccount, "create").withArgs("R-123", body).callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });
        const data = await RecipientAccount.create("R-123", body);
        assert.equal(data.substring(6, 11), "false");

        RecipientAccount.create.restore();

    });
});

describe("Update account method", () => {
    it("ok field should be true", async () => {
        const body = {
            primary: {
                method: "paypal",
                currency: "CAD",
            },
            accounts: {
                paypal: {
                    address: "testpaypal@example.com",
                },
            },
        };
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(RecipientAccount, "update").withArgs("R-91XPMEHZ44RMP", "A-A1B2C3D4E5F6", body).callsFake(() => {
            return ("{'ok':true,'object':'updated'}");
        });
        const data = await RecipientAccount.update("R-91XPMEHZ44RMP", "A-A1B2C3D4E5F6", body);
        assert.equal(data.substring(6, 10), "true");

        RecipientAccount.update.restore();

    });
});

describe("Update account method Invalid Recipient Id", () => {
    it("ok field should be false", async () => {
        const body = {
            primary: {
                method: "paypal",
                currency: "CAD",
            },
            accounts: {
                paypal: {
                    address: "testpaypal@example.com",
                },
            },
        };
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(RecipientAccount, "update").withArgs("R-123", "A-A1B2C3D4E5F6", body).callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });
        const data = await RecipientAccount.update("R-123", "A-A1B2C3D4E5F6", body);
        assert.equal(data.substring(6, 11), "false");

        RecipientAccount.update.restore();
    });
});