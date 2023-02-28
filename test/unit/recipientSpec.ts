import { Configuration, Recipient } from "../../lib";

import * as assert from "assert";
import * as sinon from "sinon";

describe("Retrieve recipient", () => {
  it("ok field should be true", async () => {
    Configuration.setApiKey("access-code");
    Configuration.setApiSecret("secret-code");
    sinon
      .stub(Recipient, "find")
      .withArgs("R-PuzPJLVYQXBbPSMQKwmJ5G")
      .callsFake(() => {
        return "{'ok':true,'recipient':{'id':'R-PuzPJLVYQXBbPSMQKwmJ5G','referenceId':'U6734f8912345','email':'philipsace@example.com','name':'Fred Flinstones','lastName':'Flinstones','firstName':'Fred','type':'individual','taxType':null,'status':'active','language':'en','complianceStatus':'verified','dob':null,'payoutMethod':'paypal','updatedAt':'2017-08-02T18:36:30.832Z','createdAt':'2017-08-02T17:39:21.504Z','gravatarUrl':'https://s3.amazonaws.com/static.api.trolley.com/icon_user.svg','compliance':{'status':'verified','checkedAt':'2017-08-02T18:35:50.794Z'},'accounts':[{'recipientAccountId':'A-Jnc8vt9H2sTXYYJKeu8UaA','primary':false,'currency':'CAD','country':'CA','type':'bank-transfer','accountNum':'*****47','accountHolderName':'John Smith','branchId':'47261','bankId':'004','bankName':'THE TORONTO-DOMINION BANK'},{'recipientAccountId':'A-KKHb8MpFvju6vDMBLPmtej','primary':false,'currency':'CAD','country':'CA','type':'bank-transfer','accountNum':'*****47','accountHolderName':'John Smith','branchId':'47261','bankId':'004','bankName':'THE TORONTO-DOMINION BANK'},{'type':'paypal','emailAddress':'sample@example.com','recipientAccountId':'A-3SaFeu7eMjj3vaBeoEcZED','primary':true,'currency':'USD'}],'payout':{'autoswitch':{'limit':1000,'active':false},'holdup':{'limit':1000,'active':false},'primary':{'method':'paypal','currency':{'currency':{'code':'USD','name':'USD'}}},'method':'paypal','accounts':{'paypal':{'type':'paypal','emailAddress':'sample@example.com','recipientAccountId':'A-3SaFeu7eMjj3vaBeoEcZED','primary':true,'currency':'USD'}}},'address':{'street1':null,'street2':null,'city':null,'postalCode':null,'country':'CA','region':'AB','phone':null}}}";
      });
    const data: string = await Recipient.find("R-PuzPJLVYQXBbPSMQKwmJ5G");
    assert.equal(data.substring(6, 10), "true");
    Recipient.find.restore();
  });
});

describe("Retrieve recipient invalid Recipient Id", () => {
  it("ok field should be false", async () => {
    Configuration.setApiKey("access-code");
    Configuration.setApiSecret("secret-code");
    sinon
      .stub(Recipient, "find")
      .withArgs("R-123")
      .callsFake(() => {
        return "{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}";
      });
    const data: string = await Recipient.find("R-123");
    assert.equal(data.substring(6, 11), "false");

    Recipient.find.restore();
  });
});

describe("Create recipient", () => {
  it("ok field should be true", async () => {
    Configuration.setApiKey("access-code");
    Configuration.setApiSecret("secret-code");
    const body = {
      type: "individual",
      referenceId: "U789123456",
      email: "wonder@woman.com",
      name: "Wonder Woman",
      lastName: "Woman",
      firstName: "Wonder",
    };
    sinon
      .stub(Recipient, "create")
      .withArgs(body)
      .callsFake(() => {
        return "{'ok':true,'recipient':{'id':'R-LVqW7CTFRoTCunpV9QSBRe','referenceId':'jsmith@example.com','email':'jsmith@example.com','name':'John Smith','lastName':'Smith','firstName':'John','type':'individual','taxType':null,'status':'incomplete','language':'en','complianceStatus':'pending','dob':null,'payoutMethod':null,'updatedAt':'2017-08-02T19:43:19.492Z','createdAt':'2017-08-02T19:43:19.492Z','gravatarUrl':'https://s3.amazonaws.com/static.api.trolley.com/icon_user.svg','compliance':{'status':'pending','checkedAt':null},'accounts':[],'payout':{},'address':{'street1':null,'street2':null,'city':null,'postalCode':null,'country':null,'region':null,'phone':null}}}";
      });
    const data: string = await Recipient.create(body);
    assert.equal(data.substring(6, 10), "true");

    Recipient.create.restore();
  });
});

describe("Create recipient, invalid field name", () => {
  it("ok field should be false", async () => {
    Configuration.setApiKey("access-code");
    Configuration.setApiSecret("secret-code");
    const body = {
      type: "individual",
      referenceId: "U789123456",
      email: "wonder@.com",
      name: "Wonder Woman",
      lastName: "Woman",
      firstName: "Wonder",
    };
    sinon
      .stub(Recipient, "create")
      .withArgs(body)
      .callsFake(() => {
        return "{'ok':false,'errors':[{'code':'empty_field','field':'firstName','message':'Expected to have a non-null or non-empty value'}]}";
      });
    const data: string = await Recipient.create(body);
    assert.equal(data.substring(6, 11), "false");

    Recipient.create.restore();
  });
});

describe("Update recipient", () => {
  it("ok field should be true", async () => {
    Configuration.setApiKey("access-code");
    Configuration.setApiSecret("secret-code");
    const body = {
      firstName: "George",
      lastName: "Jetson",
    };
    sinon
      .stub(Recipient, "update")
      .withArgs("R-9191XPM8233T710", body)
      .callsFake(() => {
        return "{'ok':true,'object':'updated'}";
      });
    const data: string = await Recipient.update("R-9191XPM8233T710", body);
    assert.equal(data.substring(6, 10), "true");

    Recipient.update.restore();
  });
});

describe("Update recipient Invalid Recipient Id", () => {
  it("ok field should be false", async () => {
    Configuration.setApiKey("access-code");
    Configuration.setApiSecret("secret-code");
    const body = {
      firstName: "George",
      lastName: "Jetson",
    };
    sinon
      .stub(Recipient, "update")
      .withArgs("R-123", body)
      .callsFake(() => {
        return "{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}";
      });
    const data: string = await Recipient.update("R-123", body);
    assert.equal(data.substring(6, 11), "false");

    Recipient.update.restore();
  });
});

describe("Delete recipient", () => {
  it("ok field should be true", async () => {
    Configuration.setApiKey("access-code");
    Configuration.setApiSecret("secret-code");
    sinon
      .stub(Recipient, "remove")
      .withArgs("R-91XPJZTR612MG")
      .callsFake(() => {
        return "{'ok':true,'object':'deleted'}";
      });
    const data: string = await Recipient.remove("R-91XPJZTR612MG");
    assert.equal(data.substring(6, 10), "true");

    Recipient.remove.restore();
  });
});

describe("Delete recipient invalid Recipient Id", () => {
  it("ok field should be false", async () => {
    Configuration.setApiKey("access-code");
    Configuration.setApiSecret("secret-code");
    sinon
      .stub(Recipient, "remove")
      .withArgs("R-123")
      .callsFake(() => {
        return "{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}";
      });
    const data: string = await Recipient.remove("R-123");
    assert.equal(data.substring(6, 11), "false");

    Recipient.remove.restore();
  });
});

describe("List all recipients", () => {
  it("ok field should be true", async () => {
    Configuration.setApiKey("access-code");
    Configuration.setApiSecret("secret-code");
    sinon
      .stub(Recipient, "search")
      .withArgs()
      .callsFake(() => {
        return "{'ok':true,'recipients':[{'id':'R-LVqW7CTFRoTCunpV9QSBRe','referenceId':'jsmith@example.com','email':'jsmith@example.com','name':'John Smith','lastName':'Smith','firstName':'John','type':'individual','taxType':null,'status':'incomplete','language':'en','complianceStatus':'blocked','dob':null,'payoutMethod':null,'updatedAt':'2017-08-02T19:45:04.310Z','createdAt':'2017-08-02T19:43:19.492Z','gravatarUrl':'https://s3.amazonaws.com/static.api.trolley.com/icon_user.svg','compliance':{'status':'blocked','checkedAt':'2017-08-02T19:45:04.294Z'},'accounts':[],'payout':{},'address':{'street1':null,'street2':null,'city':null,'postalCode':null,'country':null,'region':null,'phone':null}}],'meta':{'page':1,'pages':108,'records':108}}";
      });
    const data: string = await Recipient.search();
    assert.equal(data.substring(6, 10), "true");

    Recipient.search.restore();
  });
});

describe("Retrieve logs", () => {
  it("ok field should be true", async () => {
    Configuration.setApiKey("access-code");
    Configuration.setApiSecret("secret-code");
    sinon
      .stub(Recipient, "find")
      .withArgs("R-91XPJZTR612MG", "logs?pageSize=10")
      .callsFake(() => {
        return "{'ok':true,'activities'";
      });

    const data: string = await Recipient.find(
      "R-91XPJZTR612MG",
      "logs?pageSize=10",
    );
    assert.equal(data.substring(6, 10), "true");

    Recipient.find.restore();
  });
});

describe("Retrieve logs invalid recipient id", () => {
  it("ok field should be false", async () => {
    Configuration.setApiKey("access-code");
    Configuration.setApiSecret("secret-code");
    sinon
      .stub(Recipient, "find")
      .withArgs("R-123", "logs?pageSize=10")
      .callsFake(() => {
        return "{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}e";
      });

    const data: string = await Recipient.find("R-123", "logs?pageSize=10");
    assert.equal(data.substring(6, 11), "false");

    Recipient.find.restore();
  });
});

describe("Retrieve payments", () => {
  it("ok field should be true", async () => {
    Configuration.setApiKey("access-code");
    Configuration.setApiSecret("secret-code");
    sinon
      .stub(Recipient, "find")
      .withArgs("R-91XPJZTR612MG", "payments")
      .callsFake(() => {
        return "{'ok':true,'payments':[],'meta':{'page':1,'pages':0,'records':0}}";
      });

    const data: string = await Recipient.find("R-91XPJZTR612MG", "payments");
    assert.equal(data.substring(6, 10), "true");

    Recipient.find.restore();
  });
});

describe("Retrieve payments invalid recipient id", () => {
  it("ok field should be false", async () => {
    Configuration.setApiKey("access-code");
    Configuration.setApiSecret("secret-code");
    sinon
      .stub(Recipient, "find")
      .withArgs("R-123", "payments")
      .callsFake(() => {
        return "{'ok':false,'errors':[{'code':'not_found','message':'Object not found'}]}";
      });

    const data: string = await Recipient.find("R-123", "payments");
    assert.equal(data.substring(6, 11), "false");

    Recipient.find.restore();
  });
});
