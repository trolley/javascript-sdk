"use strict";

import { Configuration } from '../../src/dist/src/Configuration';
import { Payment } from '../../src/dist/src/Payment';

import * as assert from "assert";
import * as sinon from "sinon";

describe("Retrieve Payment", () => {
    it("update", async () => {
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Payment, "find").withArgs("P-91XPJV99EWX48").callsFake(() => {
            return ("{'ok':true,'payment':{'id':'P-KQwH3fcJsPddRNkYspAhMV','recipient':{'id':'R-PuzPJLVYQXBbPSMQKwmJ5G','referenceId':'U6734f8912345','email':'philipsace@example.com','name':'Fred Flinstones','lastName':'Flinstones','firstName':'Fred','type':'individual','taxType':null,'status':'incomplete','language':'en','complianceStatus':'verified','dob':null,'payoutMethod':'bank-transfer','updatedAt':'2017-08-02T19:57:17.037Z','createdAt':'2017-08-02T17:39:21.504Z','merchantId':'M-JVaAj4uPcfWGUReqcGUUBY','gravatarUrl':'https://s3.amazonaws.com/static.api.paymentrails.com/icon_user.svg','compliance':{'status':'verified','checkedAt':'2017-08-02T18:35:50.794Z'},'accounts':[],'payout':{},'address':{'street1':null,'street2':null,'city':null,'postalCode':null,'country':'CA','region':'AB','phone':null}},'status':'pending','sourceAmount':'100.10','exchangeRate':'1.000000','fees':'0.00','recipientFees':'0.00','tarfindAmount':'100.10','fxRate':'2.000000','memo':'Freelance payment','processedAt':null,'createdAt':'2017-08-02T18:49:20.505Z','updatedAt':'2017-08-02T18:49:20.505Z','merchantFees':'0.00','compliance':{'status':'pending','checkedAt':null},'sourceCurrency':'USD','sourceCurrencyName':'US Dollar','tarfindCurrency':'USD','tarfindCurrencyName':'US Dollar','batch':{'id':'B-LfoeSofUYdPpZBULbezULe','createdAt':'2017-08-02T18:46:45.957Z','updatedAt':'2017-08-02T18:49:54.798Z','sentAt':null,'completedAt':null}}}");
        });
        const data = await Payment.find("P-91XPJV99EWX48");
        assert.equal(data.substring(6, 10), "true");

        Payment.find.restore();

    });
});

describe("Retrieve Payment Invalid Payment Id ", () => {
    it("ok field should be false", async () => {
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Payment, "find").withArgs("P-123").callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });
        const data = await Payment.find("P-123");
        assert.equal(data.substring(6, 11), "false");

        Payment.find.restore();

    });
});

describe("update", () => {
    it("update", async () => {
        const body = {
            recipient: {
                id: "R-91XPET3C8WBJJ",
            },
            sourceAmount: "100.10",
            memo: "test payment",
        };
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Payment, "create").withArgs("B-912PWJGD8RZ7J", body).callsFake(() => {
            return ("{'ok':true,'payment':{'id':'P-VdBwE9sQfnWUL3qYPjj86U','recipient':{'id':'R-PuzPJLVYQXBbPSMQKwmJ5G','referenceId':'U6734f8912345','email':'philipsace@example.com','name':'Fred Flinstones','lastName':'Flinstones','firstName':'Fred','type':'individual','taxType':null,'status':'active','language':'en','complianceStatus':'verified','dob':null,'payoutMethod':'paypal','updatedAt':'2017-08-02T20:10:02.593Z','createdAt':'2017-08-02T17:39:21.504Z','gravatarUrl':'https://s3.amazonaws.com/static.api.paymentrails.com/icon_user.svg','compliance':{'status':'verified','checkedAt':'2017-08-02T18:35:50.794Z'},'accounts':[],'payout':{},'address':{'street1':null,'street2':null,'city':null,'postalCode':null,'country':'CA','region':'AB','phone':null}},'status':'pending','sourceAmount':'100.10','exchangeRate':'1.000000','fees':'0.00','recipientFees':'0.00','tarfindAmount':'100.10','fxRate':'2.000000','memo':'Freelance payment','processedAt':null,'createdAt':'2017-08-02T20:10:05.963Z','updatedAt':'2017-08-02T20:10:05.963Z','merchantFees':'0.00','compliance':{'status':'pending','checkedAt':null},'sourceCurrency':'USD','sourceCurrencyName':'US Dollar','tarfindCurrency':'USD','tarfindCurrencyName':'US Dollar'}}");
        });
        const data = await Payment.create("B-912PWJGD8RZ7J", body);
        assert.equal(data.substring(6, 10), "true");

        Payment.create.restore();
    });
});

describe("Update Payment", () => {
    it("ok field should be true", async () => {
        const body = { sourceAmount: "900.90" };
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Payment, "update").withArgs("P-91XPJV99EWX48", "B-912PWJGD8RZ7J", body).callsFake(() => {
            return ("{'ok':true,'object':'updated'}");
        });
        const data = await Payment.update("P-91XPJV99EWX48", "B-912PWJGD8RZ7J", body);
        assert.equal(data.substring(6, 10), "true");

        Payment.update.restore();

    });
});

describe("Update Payment Invalid Payment Id", () => {
    it("ok field should be false", async () => {
        const body = { sourceAmount: "900.90" };
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Payment, "update").withArgs("P-123", "B-912PWJGD8RZ7J", body).callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });
        const data = await Payment.update("P-123", "B-912PWJGD8RZ7J", body);
        assert.equal(data.substring(6, 11), "false");

        Payment.update.restore();
    });
});

describe("Delete Payment", () => {
    it("update", async () => {
        Configuration.setApiKey("access-code");
        Configuration.setApiSecret("secret-code");
        sinon.stub(Payment, "remove").withArgs("P-91XPJV99EWX48").callsFake(() => {
            return ("{'ok':true,'object':'deleted'}");
        });
        const data = await Payment.remove("P-91XPJV99EWX48", "B-912PWJGD8RZ7J");
        assert.equal(data.substring(6, 10), "true");

        Payment.remove.restore();
    });
});

describe("Delete Payment Invalid Batch Id", () => {
    it("ok field should be false", async () => {
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Payment, "remove").withArgs("P-91XPJV99EWX48").callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });
        const data = await Payment.remove("P-91XPJV99EWX48", "B-123");
        assert.equal(data.substring(6, 11), "false");

        Payment.remove.restore();
    });
});

describe("Delete Payment Invalid Payment Id", () => {
    it("ok field should be false", async () => {
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Payment, "remove").withArgs("P-123").callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });
        const data = await Payment.remove("P-123", "B-912PWJGD8RZ7J");
        assert.equal(data.substring(6, 11), "false");

        Payment.remove.restore();
    });
});

describe("List all Payments", () => {
    it("update", async () => {
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Payment, "search").withArgs("B-912PWJGD8RZ7J").callsFake(() => {
            return ("{'ok':true,'payment':{'id':'P-VdBwE9sQfnWUL3qYPjj86U','recipient':{'id':'R-PuzPJLVYQXBbPSMQKwmJ5G','referenceId':'U6734f8912345','email':'philipsace@example.com','name':'Fred Flinstones','lastName':'Flinstones','firstName':'Fred','type':'individual','taxType':null,'status':'active','language':'en','complianceStatus':'verified','dob':null,'payoutMethod':'paypal','updatedAt':'2017-08-02T20:10:02.593Z','createdAt':'2017-08-02T17:39:21.504Z','gravatarUrl':'https://s3.amazonaws.com/static.api.paymentrails.com/icon_user.svg','compliance':{'status':'verified','checkedAt':'2017-08-02T18:35:50.794Z'},'accounts':[],'payout':{},'address':{'street1':null,'street2':null,'city':null,'postalCode':null,'country':'CA','region':'AB','phone':null}},'status':'pending','sourceAmount':'100.10','exchangeRate':'1.000000','fees':'0.00','recipientFees':'0.00','tarfindAmount':'100.10','fxRate':'2.000000','memo':'Freelance payment','processedAt':null,'createdAt':'2017-08-02T20:10:05.963Z','updatedAt':'2017-08-02T20:10:05.963Z','merchantFees':'0.00','compliance':{'status':'pending','checkedAt':null},'sourceCurrency':'USD','sourceCurrencyName':'US Dollar','tarfindCurrency':'USD','tarfindCurrencyName':'US Dollar'}}");
        });
        const data = await Payment.search("B-912PWJGD8RZ7J");
        assert.equal(data.substring(6, 10), "true");

        Payment.search.restore();
    });
});

describe("List all Payments with queries", () => {
    it("update", async () => {
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Payment, "search").withArgs("B-912PWJGD8RZ7J", 1, 10).callsFake(() => {
            return ("{'ok':true,'payment':{'id':'P-VdBwE9sQfnWUL3qYPjj86U','recipient':{'id':'R-PuzPJLVYQXBbPSMQKwmJ5G','referenceId':'U6734f8912345','email':'philipsace@example.com','name':'Fred Flinstones','lastName':'Flinstones','firstName':'Fred','type':'individual','taxType':null,'status':'active','language':'en','complianceStatus':'verified','dob':null,'payoutMethod':'paypal','updatedAt':'2017-08-02T20:10:02.593Z','createdAt':'2017-08-02T17:39:21.504Z','gravatarUrl':'https://s3.amazonaws.com/static.api.paymentrails.com/icon_user.svg','compliance':{'status':'verified','checkedAt':'2017-08-02T18:35:50.794Z'},'accounts':[],'payout':{},'address':{'street1':null,'street2':null,'city':null,'postalCode':null,'country':'CA','region':'AB','phone':null}},'status':'pending','sourceAmount':'100.10','exchangeRate':'1.000000','fees':'0.00','recipientFees':'0.00','tarfindAmount':'100.10','fxRate':'2.000000','memo':'Freelance payment','processedAt':null,'createdAt':'2017-08-02T20:10:05.963Z','updatedAt':'2017-08-02T20:10:05.963Z','merchantFees':'0.00','compliance':{'status':'pending','checkedAt':null},'sourceCurrency':'USD','sourceCurrencyName':'US Dollar','tarfindCurrency':'USD','tarfindCurrencyName':'US Dollar'}}");
        });
        const data = await Payment.search("B-912PWJGD8RZ7J", 1, 10);
        assert.equal(data.substring(6, 10), "true");

        Payment.search.restore();
    });
});

describe("List all Payments Invalid Batch Id", () => {
    it("ok field should be false", async () => {
        Configuration.setApiKey("access-code"); Configuration.setApiSecret("secret-code");
        sinon.stub(Payment, "search").withArgs("B-123").callsFake(() => {
            return ("{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}");
        });
        const data = await Payment.search("B-123");
        assert.equal(data.substring(6, 11), "false");

        Payment.search.restore();
    });
});
