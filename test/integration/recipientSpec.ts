import { Configuration } from '../../src/dist/src/Configuration';
import { Recipient } from '../../src/dist/src/Recipient';
import { RecipientAccount } from '../../src/dist/src/RecipientAccount';
import * as types from "../../types";
import * as assert from "assert";

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
        let response = await Recipient.create(payload);

        const recipientId = response.recipient.id;
        assert.equal("John", response.recipient.firstName);

        const payload1 = {
            firstName: "George",
            lastName: "Jetson",
        };

        response = await Recipient.update(recipientId, payload1);
        assert.equal(response.ok, true);
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
        let response = await Recipient.create(payload);

        assert.equal(response.recipient.email, "test1@paymentrails.com");
        const recipientId = response.recipient.id;
        response = await Recipient.remove(recipientId);
        assert.equal(response, "{\"ok\":true}");
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

        let response = await Recipient.create(payload);
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

        response = await RecipientAccount.create(recipientId, body);
        assert.equal(response.account.type, "bank-transfer");
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

        let response = await Recipient.create(payload);
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

        response = await RecipientAccount.create(recipientId, body);
        assert.equal(response.account.type, "bank-transfer");
        const recipientAccountId = response.account.recipientAccountId;
        response = await RecipientAccount.remove(recipientId, recipientAccountId);
        assert.equal(response, "{\"ok\":false,\"errors\":[{\"code\":\"invalid_status\",\"message\":\"Cannot delete primary account\",\"field\":\"primary\"}]}");
    });
});
