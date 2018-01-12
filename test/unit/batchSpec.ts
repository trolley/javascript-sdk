"use strict";

import { Configuration } from '../../src/dist/src/Configuration';
import { Batch } from '../../src/dist/src/Batch';

import * as assert from "assert";
import * as sinon from "sinon";

describe("Retrieve Batch", () => {
    it("ok field should be true", async () => {

        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Batch, "find").withArgs("B-912PWJGD8RZ7J").callsFake(() => {
            return ("{'ok':true,'batch':{'id':'B-LfoeSofUYdPpZBULbezULe','status':'open','amount':'200.20','totalPayments':'2','currency':'USD','description':'Weekly Payouts on 2017-8-2','sentAt':null,'completedAt':null,'createdAt':'2017-08-02T18:46:45.957Z','updatedAt':'2017-08-02T20:10:05.991Z','payments':{'payments':[{'id':'P-KQwH3fcJsPddRNkYspAhMV','recipient':{'id':'R-PuzPJLVYQXBbPSMQKwmJ5G','referenceId':'U6734f8912345','email':'philipsace@example.com','name':'Fred Flinstones','status':'active','countryCode':'CA'},'method':'paypal','methodDisplay':'PayPal','status':'pending','sourceAmount':'100.10','tarfindAmount':'100.10','isSupplyPayment':false,'memo':'Freelance payment','fees':'0.00','recipientFees':'0.00','exchangeRate':'1.000000','processedAt':null,'merchantFees':'0.00','sourceCurrency':'USD','sourceCurrencyName':'US Dollar','tarfindCurrency':'USD','tarfindCurrencyName':'US Dollar','compliance':{'status':'pending','checkedAt':null}},{'id':'P-VdBwE9sQfnWUL3qYPjj86U','recipient':{'id':'R-PuzPJLVYQXBbPSMQKwmJ5G','referenceId':'U6734f8912345','email':'philipsace@example.com','name':'Fred Flinstones','status':'active','countryCode':'CA'},'method':'paypal','methodDisplay':'PayPal','status':'pending','sourceAmount':'100.10','tarfindAmount':'100.10','isSupplyPayment':false,'memo':'Freelance payment','fees':'0.00','recipientFees':'0.00','exchangeRate':'1.000000','processedAt':null,'merchantFees':'0.00','sourceCurrency':'USD','sourceCurrencyName':'US Dollar','tarfindCurrency':'USD','tarfindCurrencyName':'US Dollar','compliance':{'status':'pending','checkedAt':null}}],'meta':{'page':0,'pages':1,'records':10}}}}");
        });
        const data = await Batch.find("B-912PWJGD8RZ7J");
        assert.equal(data.substring(6, 10), "true");

        Batch.find.restore();
    });
});

describe("Retrieve Batch Invalid Batch Id", () => {
    it("ok field should be false", async () => {
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Batch, "find").withArgs("B-123").callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });
        const data = await Batch.find("B-123");
        assert.equal(data.substring(6, 11), "false");

        Batch.find.restore();
    });
});

describe("Update Batch", () => {
    it("ok field should be true yes", async () => {
        const body = {
            update_payments: [{
                id: "P-91XPMB3BC9PQY",
                sourceAmount: 99,
            }],
        };

        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Batch, "update").withArgs("B-912PWJGD8RZ7J", body).callsFake(() => {
            return ("{'ok':true,'object':'updated'}");
        });
        const data = await Batch.update("B-912PWJGD8RZ7J", body);
        assert.equal(data.substring(6, 10), "true");

        Batch.update.restore();
    });
});

describe("Update Batch Invalid Batch Id", () => {
    it("ok field should be false", async () => {
        const body = {
            update_payments: [{
                id: "P-91XPMB3BC9PQY",
                sourceAmount: 99,
            }],
        };
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Batch, "update").withArgs("B-123", body).callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });
        const data = await Batch.update("B-123", body);
        assert.equal(data.substring(6, 11), "false");

        Batch.update.restore();
    });
});

describe("Delete Batch", () => {
    it("ok field should be true", async () => {
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Batch, "remove").withArgs("B-912PWJGD8RZ7J").callsFake(() => {
            return ("{'ok':true,'object':'updated'}");
        });
        const data = await Batch.remove("B-912PWJGD8RZ7J");
        assert.equal(data.substring(6, 10), "true");

        Batch.remove.restore();
    });
});

describe("Delete Batch Invalid Batch Id", () => {
    it("ok field should be false", async () => {
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Batch, "remove").withArgs("B-123").callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });
        const data = await Batch.remove("B-123");
        assert.equal(data.substring(6, 11), "false");

        Batch.remove.restore();
    });
});

describe("List Batches", () => {
    it("ok field should be true", async () => {
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Batch, "search").withArgs().callsFake(() => {
            return ("{'ok':true,'batch':{'id':'B-LfoeSofUYdPpZBULbezULe','status':'open','amount':'200.20','totalPayments':'2','currency':'USD','description':'Weekly Payouts on 2017-8-2','sentAt':null,'completedAt':null,'createdAt':'2017-08-02T18:46:45.957Z','updatedAt':'2017-08-02T20:10:05.991Z','payments':{'payments':[{'id':'P-VdBwE9sQfnWUL3qYPjj86U','recipient':{'id':'R-PuzPJLVYQXBbPSMQKwmJ5G','referenceId':'U6734f8912345','email':'philipsace@example.com','name':'Fred Flinstones','status':'active','countryCode':'CA'},'method':'paypal','methodDisplay':'PayPal','status':'pending','sourceAmount':'100.10','tarfindAmount':'100.10','isSupplyPayment':false,'memo':'Freelance payment','fees':'0.00','recipientFees':'0.00','exchangeRate':'1.000000','processedAt':null,'merchantFees':'0.00','sourceCurrency':'USD','sourceCurrencyName':'US Dollar','tarfindCurrency':'USD','tarfindCurrencyName':'US Dollar','compliance':{'status':'pending','checkedAt':null}}],'meta':{'page':0,'pages':10,'records':10}}}}");
        });
        const data = await Batch.search();
        assert.equal(data.substring(6, 10), "true");

        Batch.search.restore();
    });
});

describe("List Batch with queries ", () => {
    it("ok field should be true", async () => {
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Batch, "search").withArgs(1, 10).callsFake(() => {
            return ("{'ok':true,'batch':{'id':'B-LfoeSofUYdPpZBULbezULe','status':'open','amount':'200.20','totalPayments':'2','currency':'USD','description':'Weekly Payouts on 2017-8-2','sentAt':null,'completedAt':null,'createdAt':'2017-08-02T18:46:45.957Z','updatedAt':'2017-08-02T20:10:05.991Z','payments':{'payments':[{'id':'P-VdBwE9sQfnWUL3qYPjj86U','recipient':{'id':'R-PuzPJLVYQXBbPSMQKwmJ5G','referenceId':'U6734f8912345','email':'philipsace@example.com','name':'Fred Flinstones','status':'active','countryCode':'CA'},'method':'paypal','methodDisplay':'PayPal','status':'pending','sourceAmount':'100.10','tarfindAmount':'100.10','isSupplyPayment':false,'memo':'Freelance payment','fees':'0.00','recipientFees':'0.00','exchangeRate':'1.000000','processedAt':null,'merchantFees':'0.00','sourceCurrency':'USD','sourceCurrencyName':'US Dollar','tarfindCurrency':'USD','tarfindCurrencyName':'US Dollar','compliance':{'status':'pending','checkedAt':null}}],'meta':{'page':0,'pages':10,'records':10}}}}");
        });
        const data = await Batch.search(1, 10);
        assert.equal(data.substring(6, 10), "true");

        Batch.search.restore();
    });
});

describe("Create Batch", () => {
    it("ok field should be true", async () => {
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        const body = {
            payments: [{
                recipient: {
                    id: "R-91XPJZTR612MG",
                },
                sourceAmount: "66",
            }],
            sourceCurrency: "USD",
        };
        sinon.stub(Batch, "create").withArgs(body).callsFake(() => {
            return ("B-912PWJGD8RZ7J");
        });
        const batchId = await Batch.create(body);

        sinon.stub(Batch, "generateQuote").withArgs(batchId).callsFake(() => {
            return ("{'ok':true,'batch':{'id':'B-WAh3t3RitzjtuMDBJhvjfZ','status':'open','amount':'0.00','totalPayments':'1','currency':'USD','description':'Weekly Payouts on 2017-7-19','sentAt':null,'completedAt':null,'createdAt':'2017-07-19T20:30:31.399Z','updatedAt':'2017-07-19T20:30:31.477Z','payments':{'payemnts':[],'meta':{'page':0,'pages':1,'records':1}}}}");
        });
        let data = await Batch.generateQuote(batchId);
        assert.equal(data.substring(6, 10), "true");

        sinon.stub(Batch, "processBatch").withArgs(batchId).callsFake(() => {
            return ("{'ok':true,'batch':{'id':'B-WAh3t3RitzjtuMDBJhvjfZ','status':'open','amount':'0.00','totalPayments':'1','currency':'USD','description':'Weekly Payouts on 2017-7-19','sentAt':null,'completedAt':null,'createdAt':'2017-07-19T20:30:31.399Z','updatedAt':'2017-07-19T20:30:31.477Z','payments':{'payemnts':[],'meta':{'page':0,'pages':1,'records':1}}}}");
        });
        data = await Batch.processBatch(batchId);
        assert.equal(data.substring(6, 10), "true");

        Batch.generateQuote.restore();
        Batch.processBatch.restore();

    });
});

describe("Create Batch, Invalid Recipient Id", () => {
    it("ok field should be false", async () => {
        Batch.create.restore();
        const body = {
            payments: [{
                recipient: {
                    id: "R-ewf",
                },
                sourceAmount: "66",
            }],
            sourceCurrency: "USD",
        };
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");

        sinon.stub(Batch, "create").withArgs(body).callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });

        const data = await Batch.create(body);
        assert.equal(data.substring(6, 11), "false");

        Batch.create.restore();
    });
});
