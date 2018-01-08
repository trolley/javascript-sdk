import * as types from "./types";

import { Configuration } from './src/Configuration';
import { Recipient } from './src/Recipient';
import { RecipientAccount } from './src/RecipientAccount';
import { Balances } from './src/Balances';
import { Batch } from './src/Batch';
import { Payment } from './src/Payment';

Configuration.setApiKey("ALFc1R5zXZADHFEWR0HDFZ0P");
Configuration.setApiSecret("0m7y4rh1xfnj12t0rjg7xdtguw5h0aabjutndztu");
Configuration.setEnviroment("integration");

async function main() {
  let response = await Recipient.find("R-BdTs1oed3PuUA5TXxGzDYE");
  console.log(response.recipient);

}

main();

// let response = Promise.resolve(
//     Batch.processBatch("B-GELiBAfvzxfE41JtuY2VVq"));
// response.then(function (result: any) {
//     console.log(result);
// })
// Configuration.setApiBase("api.railz.io");
// Configuration.setApiKey("ALJVaAj4JPZ97G9W9AYE49JG");
// Configurat.setApiSecret("pkzxvxuz5yzt1u95zt69mfwr0rvk8tz9h9mmg5z5");

// let response = Promise.resolve(Recipient.find("R-BdTs1oed3PuUA5TXxGzDYE"));

// response.then(function (result: types.Recipient.Recipient) {
//     console.log(result.recipient.id)
// });

// var body = {
//     type: "individual",
//     email: "testddg7@amwple.com",
//     name: "Fred Flinstones",
//     lastName: "Flinstones",
//     firstName: "Fred"
// };

// let response = Promise.resolve(Recipient.create(body));
// response.then(function (result: any) {
//     console.log(result.recipient.id)
// });

// var body2 = {
//     firstName: "George",
//     lastName: "Jetson"
// };
// let response = Promise.resolve(Recipient.update("R-5GUUhQ5ACGhAGMHyps38ZQ", body2));
// response.then(function (result: any) {
//     console.log(result)
// });

// let response = Promise.resolve();
// response.then(function (result: any) {
//     console.log(result);
// }

// let response = Promise.resolve(RecipientAccount.find("R-5zNAnsbDhNMMehdiidCvjA", "A-AfVfXyJn89geqHynF9Adbp"));
// response.then(function (result: any) {
//     console.log(result.account.type);
// }
// var body3 = {
//     "type": "bank-transfer",
//     "primary": "true",
//     "country": "CA",
//     "currency": "CAD",
//     "accountNum": "6022847",
//     "bankId": "004",
//     "branchId": "47261",
//     "accountHolderName": "John Smith"
// }
// let response = Promise.resolve(RecipientAccount.create("R-5zNAnsbDhNMMehdiidCvjA", body3));
// response.then(function (result: any) {
//     console.log(result.account.primary);
// })


// let response = Promise.resolve(Payment.find("P-8DuK6Wh8xErxzUyyivT2sW"));
// response.then(function (result: any) {
//     console.log(result.payment.id);
// });


// var body = { "payments": [{ "recipient": { "id": "R-BdTs1oed3PuUA5TXxGzDYE" }, "sourceAmount": "65", "memo": "", "sourceCurrency": "USD" }] };
// let response = Promise.resolve(Batch.create(body));
// response.then(function (result: any) {
//     console.log(result);
// })

// let response = Promise.resolve(Batch.generateQuote("B-5WpEdn971CgFGn2jPUAueF"));
// response.then(function (result: any) {
//     console.log(result);
// })

// let response = Promise.resolve(Batch.summary("B-5WpEdn971CgFGn2jPUAueF"));
// response.then(function (result: types.BatchSummary.BatchSummary) {
//     console.log(result.batchSummary.id);
// })
