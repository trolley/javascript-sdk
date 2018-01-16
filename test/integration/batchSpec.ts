import { Configuration } from '../../src/Configuration';
import { Recipient } from '../../src/Recipient';
import { RecipientAccount } from '../../src/RecipientAccount';
import { Batch } from '../../src/Batch';
import { Payment } from '../../src/Payment';
import * as types from "../../types";
import * as assert from "assert";
import {} from 'jasmine';

describe("Add Payment", () => {
    it("", async () => {
        Configuration.setApiKey("YOUR_PUBLIC_KEY");
        Configuration.setApiSecret("YOUR_PRIVATE_KEY");

        const payload = {
            type: "individual",
            email: "test672@paymentrails.com",
            name: "John Smith",
            firstName: "John",
            lastName: "Smith",
        };
        const response = await Recipient.create(payload);

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
        const response1 = RecipientAccount.create(response.recipient.id, body);
        const body1 = {
            payments: [{
                recipient: {
                    id: "R-RLaenm8MGPRGRybqzLcgtL",
                },
                sourceAmount: "975",
                sourceCurrency: "CAD",
                description: "test",
            }],
        };
        const response2 = await Batch.create(body1);
        const body2 = {
            recipient: {
                id: "R-RLaenm8MGPRGRybqzLcgtL",
            },
            sourceAmount: "100.10",
            sourceCurrency: "CAD",
            memo: "Freelance Payment",
        };
        const response3 = await Payment.create(response2.batch.id, body2);
        assert.equal(response3.payment.sourceAmount, "100.10");

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
        const response = await Recipient.create(payload);

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

        const response1 = await RecipientAccount.create(response.recipient.id, body);
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
        const response2 = await Batch.create(body1);
        Batch.generateQuote(response2.batch.id);
        const response3 = await Batch.processBatch(response2.batch.id);
        assert.equal("processing", response3.batch.status);
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
        const response = await Recipient.create(payload);

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

        const response1 = await RecipientAccount.create(response.recipient.id, body);
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
        const response2 = await Batch.create(body1);
        const response3 = await Batch.remove(response2.batch.id);
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
        const response = await Recipient.create(payload);

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

        const response2 = await RecipientAccount.create(response.recipient.id, body);
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
        const response3 = await Batch.create(body1);
        assert.equal(response3.batch.currency, "USD");
    });
});
