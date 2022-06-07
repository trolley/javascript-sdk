import { Configuration, Batch } from "../../lib";
import { BatchGateway } from "../../lib/BatchGateway";

import * as assert from "assert";
import * as sinon from "sinon";

describe("Batch", () => {
  let sandbox: sinon.SinonSandbox;

  before(() => {
    sandbox = sinon.sandbox.create();
    Configuration.setApiKey("access-code");
    Configuration.setApiSecret("secret-code");
  });

  afterEach(() => {
    sandbox.restore();
  });

  // it("Retreive batch", async () => {
  //   sandbox
  //     .stub(BatchGateway.prototype, "find")
  //     .withArgs("B-912PWJGD8RZ7J")
  //     .callsFake(async () => {
  //       return {
  //         ok: true,
  //         batch: {
  //           id: "B-LfoeSofUYdPpZBULbezULe",
  //           status: "open",
  //           amount: "200.20",
  //           totalPayments: "2",
  //           currency: "USD",
  //           description: "Weekly Payouts on 2017-8-2",
  //           sentAt: null,
  //           completedAt: null,
  //           createdAt: "2017-08-02T18:46:45.957Z",
  //           updatedAt: "2017-08-02T20:10:05.991Z",
  //           payments: {
  //             payments: [
  //               {
  //                 id: "P-KQwH3fcJsPddRNkYspAhMV",
  //                 recipient: {
  //                   id: "R-PuzPJLVYQXBbPSMQKwmJ5G",
  //                   referenceId: "U6734f8912345",
  //                   email: "philipsace@example.com",
  //                   name: "Fred Flinstones",
  //                   status: "active",
  //                   countryCode: "CA",
  //                 },
  //                 method: "paypal",
  //                 methodDisplay: "PayPal",
  //                 status: "pending",
  //                 sourceAmount: "100.10",
  //                 tarfindAmount: "100.10",
  //                 isSupplyPayment: false,
  //                 memo: "Freelance payment",
  //                 fees: "0.00",
  //                 recipientFees: "0.00",
  //                 exchangeRate: "1.000000",
  //                 processedAt: null,
  //                 merchantFees: "0.00",
  //                 sourceCurrency: "USD",
  //                 sourceCurrencyName: "US Dollar",
  //                 tarfindCurrency: "USD",
  //                 tarfindCurrencyName: "US Dollar",
  //                 compliance: {
  //                   status: "pending",
  //                   checkedAt: null,
  //                 },
  //               },
  //               {
  //                 id: "P-VdBwE9sQfnWUL3qYPjj86U",
  //                 recipient: {
  //                   id: "R-PuzPJLVYQXBbPSMQKwmJ5G",
  //                   referenceId: "U6734f8912345",
  //                   email: "philipsace@example.com",
  //                   name: "Fred Flinstones",
  //                   status: "active",
  //                   countryCode: "CA",
  //                 },
  //                 method: "paypal",
  //                 methodDisplay: "PayPal",
  //                 status: "pending",
  //                 sourceAmount: "100.10",
  //                 tarfindAmount: "100.10",
  //                 isSupplyPayment: false,
  //                 memo: "Freelance payment",
  //                 fees: "0.00",
  //                 recipientFees: "0.00",
  //                 exchangeRate: "1.000000",
  //                 processedAt: null,
  //                 merchantFees: "0.00",
  //                 sourceCurrency: "USD",
  //                 sourceCurrencyName: "US Dollar",
  //                 tarfindCurrency: "USD",
  //                 tarfindCurrencyName: "US Dollar",
  //                 compliance: {
  //                   status: "pending",
  //                   checkedAt: null,
  //                 },
  //               },
  //             ],
  //             meta: {
  //               page: 0,
  //               pages: 1,
  //               records: 10,
  //             },
  //           },
  //         },
  //       };
  //     });
  //
  //   const data = await Batch.find("B-912PWJGD8RZ7J");
  //   assert.equal(data.id, "B-LfoeSofUYdPpZBULbezULe");
  // });

  // it("Retrieve Batch Invalid Batch Id", async () => {
  //   sandbox
  //     .stub(BatchGateway.prototype, "find")
  //     .withArgs("B-123")
  //     .callsFake(async () => {
  //       return {
  //         ok: false,
  //         errors: [{ code: "not_found", message: "Object not found" }],
  //       };
  //     });
  //
  //   try {
  //     await Batch.find("B-123");
  //     assert.fail("Should have thrown");
  //   } catch {
  //     true;
  //   }
  // });

  // it("Update Batch", async () => {
  //   const body = {
  //     update_payments: [
  //       {
  //         id: "P-91XPMB3BC9PQY",
  //         sourceAmount: 99,
  //       },
  //     ],
  //   };
  //
  //   sandbox
  //     .stub(BatchGateway.prototype, "update")
  //     .withArgs("B-912PWJGD8RZ7J", body)
  //     .callsFake(async () => {
  //       return { ok: true, object: "updated" };
  //     });
  //   const data = await Batch.update("B-912PWJGD8RZ7J", body);
  //   assert.equal(data, undefined);
  // });

  // it("Update Batch Invalid Batch Id", async () => {
  //   const body = {
  //     update_payments: [
  //       {
  //         id: "P-91XPMB3BC9PQY",
  //         sourceAmount: 99,
  //       },
  //     ],
  //   };
  //   sandbox
  //     .stub(BatchGateway.prototype, "update")
  //     .withArgs("B-123", body)
  //     .callsFake(async () => {
  //       return {
  //         ok: false,
  //         errors: [{ code: "not_found", message: "Object not found" }],
  //       };
  //     });
  //   try {
  //     await Batch.update("B-123", body);
  //     assert.fail("expected to throw");
  //   } catch {
  //     true;
  //   }
  // });

  // it("Delete Batch", async () => {
  //   sandbox
  //     .stub(BatchGateway.prototype, "remove")
  //     .withArgs("B-912PWJGD8RZ7J")
  //     .callsFake(async () => {
  //       return { ok: true, object: "updated" };
  //     });
  //   const result = await Batch.remove("B-912PWJGD8RZ7J");
  //   assert.ok(result);
  // });

  // it("Delete Batch Invalid Batch Id", async () => {
  //   sandbox
  //     .stub(BatchGateway.prototype, "remove")
  //     .withArgs("B-123")
  //     .callsFake(async () => {
  //       return {
  //         ok: false,
  //         errors: [{ code: "not_found", message: "Object not found" }],
  //       };
  //     });
  //   try {
  //     await Batch.remove("B-123");
  //     assert.fail("should have thrown");
  //   } catch {
  //     true;
  //   }
  // });

  // it("List Batches", async () => {
  //   sandbox
  //     .stub(BatchGateway.prototype, "search")
  //     .withArgs()
  //     .callsFake(async () => {
  //       return {
  //         ok: true,
  //         batch: {
  //           id: "B-LfoeSofUYdPpZBULbezULe",
  //           status: "open",
  //           amount: "200.20",
  //           totalPayments: "2",
  //           currency: "USD",
  //           description: "Weekly Payouts on 2017-8-2",
  //           sentAt: null,
  //           completedAt: null,
  //           createdAt: "2017-08-02T18:46:45.957Z",
  //           updatedAt: "2017-08-02T20:10:05.991Z",
  //           payments: {
  //             payments: [
  //               {
  //                 id: "P-VdBwE9sQfnWUL3qYPjj86U",
  //                 recipient: {
  //                   id: "R-PuzPJLVYQXBbPSMQKwmJ5G",
  //                   referenceId: "U6734f8912345",
  //                   email: "philipsace@example.com",
  //                   name: "Fred Flinstones",
  //                   status: "active",
  //                   countryCode: "CA",
  //                 },
  //                 method: "paypal",
  //                 methodDisplay: "PayPal",
  //                 status: "pending",
  //                 sourceAmount: "100.10",
  //                 tarfindAmount: "100.10",
  //                 isSupplyPayment: false,
  //                 memo: "Freelance payment",
  //                 fees: "0.00",
  //                 recipientFees: "0.00",
  //                 exchangeRate: "1.000000",
  //                 processedAt: null,
  //                 merchantFees: "0.00",
  //                 sourceCurrency: "USD",
  //                 sourceCurrencyName: "US Dollar",
  //                 tarfindCurrency: "USD",
  //                 tarfindCurrencyName: "US Dollar",
  //                 compliance: { status: "pending", checkedAt: null },
  //               },
  //             ],
  //             meta: { page: 0, pages: 10, records: 10 },
  //           },
  //         },
  //       };
  //     });
  //
  //   const data = await Batch.search();
  //   assert.equal(data.length, 1);
  // });

  // it("List Batch with queries ", async () => {
  //   sandbox
  //     .stub(BatchGateway.prototype, "search")
  //     .withArgs(1, 10)
  //     .callsFake(async () => {
  //       return {
  //         ok: true,
  //         batches: {
  //           id: "B-LfoeSofUYdPpZBULbezULe",
  //           status: "open",
  //           amount: "200.20",
  //           totalPayments: "2",
  //           currency: "USD",
  //           description: "Weekly Payouts on 2017-8-2",
  //           sentAt: null,
  //           completedAt: null,
  //           createdAt: "2017-08-02T18:46:45.957Z",
  //           updatedAt: "2017-08-02T20:10:05.991Z",
  //           payments: {
  //             payments: [
  //               {
  //                 id: "P-VdBwE9sQfnWUL3qYPjj86U",
  //                 recipient: {
  //                   id: "R-PuzPJLVYQXBbPSMQKwmJ5G",
  //                   referenceId: "U6734f8912345",
  //                   email: "philipsace@example.com",
  //                   name: "Fred Flinstones",
  //                   status: "active",
  //                   countryCode: "CA",
  //                 },
  //                 method: "paypal",
  //                 methodDisplay: "PayPal",
  //                 status: "pending",
  //                 sourceAmount: "100.10",
  //                 tarfindAmount: "100.10",
  //                 isSupplyPayment: false,
  //                 memo: "Freelance payment",
  //                 fees: "0.00",
  //                 recipientFees: "0.00",
  //                 exchangeRate: "1.000000",
  //                 processedAt: null,
  //                 merchantFees: "0.00",
  //                 sourceCurrency: "USD",
  //                 sourceCurrencyName: "US Dollar",
  //                 tarfindCurrency: "USD",
  //                 tarfindCurrencyName: "US Dollar",
  //                 compliance: { status: "pending", checkedAt: null },
  //               },
  //             ],
  //             meta: { page: 0, pages: 10, records: 10 },
  //           },
  //         },
  //       };
  //     });
  //   const data = await Batch.search(1, 10);
  //   assert.equal(data.batches.length, 1);
  // });

  // it("Create Batch", async () => {
  //   const body = {
  //     payments: [
  //       {
  //         recipient: {
  //           id: "R-91XPJZTR612MG",
  //         },
  //         sourceAmount: "66",
  //       },
  //     ],
  //     sourceCurrency: "USD",
  //   };
  //
  //   sandbox
  //     .stub(BatchGateway.prototype, "create")
  //     .withArgs(body)
  //     .callsFake(() => {
  //       return "B-912PWJGD8RZ7J";
  //     });
  //
  //   const batch = await Batch.create(body);
  //   const batchId = batch.id;
  //
  //   sandbox
  //     .stub(BatchGateway.prototype, "generateQuote")
  //     .withArgs(batchId)
  //     .callsFake(async () => {
  //       return {
  //         ok: true,
  //         batch: {
  //           id: "B-912PWJGD8RZ7J",
  //           status: "open",
  //           amount: "0.00",
  //           totalPayments: "1",
  //           currency: "USD",
  //           description: "Weekly Payouts on 2017-7-19",
  //           sentAt: null,
  //           completedAt: null,
  //           createdAt: "2017-07-19T20:30:31.399Z",
  //           updatedAt: "2017-07-19T20:30:31.477Z",
  //           payments: { payemnts: [], meta: { page: 0, pages: 1, records: 1 } },
  //         },
  //       };
  //     });
  //
  //   const data = await Batch.generateQuote(batchId);
  //   assert.ok(data);
  //
  //   sandbox
  //     .stub(BatchGateway.prototype, "processBatch")
  //     .withArgs(batchId)
  //     .callsFake(async () => {
  //       return {
  //         ok: true,
  //         batch: {
  //           id: "B-912PWJGD8RZ7J",
  //           status: "open",
  //           amount: "0.00",
  //           totalPayments: "1",
  //           currency: "USD",
  //           description: "Weekly Payouts on 2017-7-19",
  //           sentAt: null,
  //           completedAt: null,
  //           createdAt: "2017-07-19T20:30:31.399Z",
  //           updatedAt: "2017-07-19T20:30:31.477Z",
  //           payments: { payemnts: [], meta: { page: 0, pages: 1, records: 1 } },
  //         },
  //       };
  //     });
  //
  //   const data2 = await Batch.processBatch(batchId);
  //   assert.ok(data2);
  // });

  // it("Create Batch, Invalid Recipient Id", async () => {
  //   const body = {
  //     payments: [
  //       {
  //         recipient: {
  //           id: "R-ewf",
  //         },
  //         sourceAmount: "66",
  //       },
  //     ],
  //     sourceCurrency: "USD",
  //   };
  //
  //   sandbox
  //     .stub(BatchGateway.prototype, "create")
  //     .withArgs(body)
  //     .callsFake(async () => {
  //       return {
  //         ok: false,
  //         errors: [{ code: "not_found", message: "Object not found" }],
  //       };
  //     });
  //
  //   try {
  //     await Batch.create(body);
  //     assert.fail("should have thrown");
  //   } catch {
  //     true;
  //   }
  // });
});
