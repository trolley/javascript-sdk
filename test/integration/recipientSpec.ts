import { Configuration } from '../../src/Configuration';
import { Recipient } from '../../src/Recipient';
import { RecipientAccount } from '../../src/RecipientAccount';
import * as types from "../../types";
import * as assert from "assert";
import {} from 'jasmine';

describe("Update Recipient", () => {
    it("Name should be George", async () => {
        Configuration.setApiKey("YOUR_PUBLIC_KEY");
        Configuration.setApiSecret("YOUR_PRIVATE_KEY");

        const payload = {
            type: "individual",
            email: "test@paymentrails.com",
            name: "John Smith",
            firstName: "John",
            lastName: "Smith",
        };
        const response = await Recipient.create(payload);

        const recipientId = response.recipient.id;
        assert.equal("John", response.recipient.firstName);

        const payload1 = {
            firstName: "George",
            lastName: "Jetson",
        };

        const response1 = await Recipient.update(recipientId, payload1);
        assert.equal(response1.ok, true);
    });
});

describe("Delete Recipient", () => {
    it("", async () => {
        Configuration.setApiKey("YOUR_PUBLIC_KEY");
        Configuration.setApiSecret("YOUR_PRIVATE_KEY");

        const payload = {
            type: "individual",
            email: "test1@paymentrails.com",
            name: "John Smith",
            firstName: "John",
            lastName: "Smith",
        };
        const response = await Recipient.create(payload);

        assert.equal(response.recipient.email, "test1@paymentrails.com");
        const recipientId = response.recipient.id;
        const response1 = await Recipient.remove(recipientId);
        assert.equal(response1, "{\"ok\":true}");
    });
});

describe("Create Account", () => {
    it("", async () => {
        Configuration.setApiKey("YOUR_PUBLIC_KEY");
        Configuration.setApiSecret("YOUR_PRIVATE_KEY");

        const payload = {
            type: "individual",
            email: "test2@paymentrails.com",
            name: "John Smith",
            firstName: "John",
            lastName: "Smith",
        };

        const response = await Recipient.create(payload);
        const recipientId = response.recipient.id;
        assert.equal(response.recipient.firstName, "John");

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

        const response1 = await RecipientAccount.create(recipientId, body);
        assert.equal(response1.account.type, "bank-transfer");
    });
});

describe("Delete Account", () => {
    it("", async () => {

        Configuration.setApiKey("YOUR_PUBLIC_KEY");
        Configuration.setApiSecret("YOUR_PRIVATE_KEY");
        const payload = {
            type: "individual",
            email: "test3@paymentrails.com",
            name: "John Smith",
            firstName: "John",
            lastName: "Smith",
        };

        const response = await Recipient.create(payload);
        const recipientId = response.recipient.id;
        assert.equal(response.recipient.firstName, "John");

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

        const response1 = await RecipientAccount.create(recipientId, body);
        assert.equal(response1.account.type, "bank-transfer");
        const recipientAccountId = response1.account.recipientAccountId;
        const response2 = await RecipientAccount.remove(recipientId, recipientAccountId);
        assert.equal(response2, "{\"ok\":false,\"errors\":[{\"code\":\"invalid_status\",\"message\":\"Cannot delete primary account\",\"field\":\"primary\"}]}");
    });
});
