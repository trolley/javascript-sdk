import { Configuration } from '../../src/dist/src/Configuration';
import { Recipient } from '../../src/dist/src/Recipient';
import { RecipientAccount } from '../../src/dist/src/RecipientAccount';
import { Batch } from '../../src/dist/src/Batch';
import { Payment } from '../../src/dist/src/Payment';
import * as types from "../../types";
import * as assert from "assert";

describe("Add Payment", () => {
    it("", async () => {
        Configuration.setApiKey("YOUR_PUBLIC_KEY");
        Configuration.setApiSecret("YOUR_PRIVATE_KEY");

        const payload = {
            type: "individual",
            email: "test6@paymentrails.com",
            name: "John Smith",
            firstName: "John",
            lastName: "Smith",
        };
        let response = await Recipient.create(payload);

        const body = {
            type: "bank-transfer",
            primary: "true",
            country: "CA",
            currency: "CAD",
            accountNum: "6022847",
            bankId: "004",
            branchId: "47261",
            accountHolderName: "John Smith",
        };

        response = RecipientAccount.create(response.recipient.id, body);
        const body1 = {
            payments: [{
                recipient: {
                    id: "R-PWAEMx64EWNag6e4Yh8YKn",
                },
                sourceAmount: "975",
                sourceCurrency: "USD",
                description: "test",
            }],
        };
        response = await Batch.create(body1);
        const body2 = {
            recipient: {
                id: "R-PWAEMx64EWNag6e4Yh8YKn",
            },
            sourceAmount: "100.10",
            sourceCurrency: "CAD",
            memo: "Freelance Payment",
        };
        response = await Payment.create(response.batch.id, body2);
        assert.equal(response.payment.sourceAmount, "100.10");

    });
});

describe("Process Batch", () => {
    it("", async () => {
        Configuration.setApiKey("YOUR_PUBLIC_KEY");
        Configuration.setApiSecret("YOUR_PRIVATE_KEY");

        const payload = {
            type: "individual",
            email: "test7@paymentrails.com",
            name: "John Smith",
            firstName: "John",
            lastName: "Smith",
        };
        let response = await Recipient.create(payload);

        const body = {
            type: "bank-transfer",
            primary: "true",
            country: "CA",
            currency: "CAD",
            accountNum: "6022847",
            bankId: "004",
            branchId: "47261",
            accountHolderName: "John Smith",
        };

        response = await RecipientAccount.create(response.recipient.id, body);
        const body1 = {
            payment: [{
                recipient: {
                    id: "R-PWAEMx64EWNag6e4Yh8YKn",
                },
                sourceAmount: "975",
                sourceCurrency: "USD",
                description: "test",
            }],
        };
        response = await Batch.create(body1);
        Batch.generateQuote(response.batch.id);
        response = await Batch.processBatch(response.batch.id);
        assert.equal("processing", response.batch.status);
    });
});

describe("Delete Batch", () => {
    it("", async () => {
        Configuration.setApiKey("YOUR_PUBLIC_KEY");
        Configuration.setApiSecret("YOUR_PRIVATE_KEY");

        const payload = {
            type: "individual",
            email: "test8@paymentrails.com",
            name: "John Smith",
            firstName: "John",
            lastName: "Smith",
        };
        let response = await Recipient.create(payload);

        const body = {
            type: "bank-transfer",
            primary: "true",
            country: "CA",
            currency: "CAD",
            accountNum: "6022847",
            bankId: "004",
            branchId: "47261",
            accountHolderName: "John Smith",
        };

        response = await RecipientAccount.create(response.recipient.id, body);
        const body1 = {
            payment: [{
                recipient: {
                    id: "R-PWAEMx64EWNag6e4Yh8YKn",
                },
                sourceAmount: "975",
                sourceCurrency: "USD",
                description: "test",
            }],
        };
        response = await Batch.create(body1);
        response = await Batch.remove(response.batch.id);
        assert.equal(response, "{\"ok\":true}");
    });
});

describe("Create Batch", () => {
    it("", async () => {
        Configuration.setApiKey("YOUR_PUBLIC_KEY");
        Configuration.setApiSecret("YOUR_PRIVATE_KEY");
        const payload = {
            type: "individual",
            email: "test9@paymentrails.com",
            name: "John Smith",
            firstName: "John",
            lastName: "Smith",
        };
        let response = await Recipient.create(payload);

        const body = {
            type: "bank-transfer",
            primary: "true",
            country: "CA",
            currency: "CAD",
            accountNum: "6022847",
            bankId: "004",
            branchId: "47261",
            accountHolderName: "John Smith",
        };

        response = await RecipientAccount.create(response.recipient.id, body);
        const body1 = {
            payment: [{
                recipient: {
                    id: "R-PWAEMx64EWNag6e4Yh8YKn",
                },
                sourceAmount: "975",
                sourceCurrency: "USD",
                description: "test",
            }],
        };
        response = await Batch.create(body1);
        assert.equal(response.batch.currency, "USD");
    });
});
