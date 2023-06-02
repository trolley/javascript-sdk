# Trolley JavaScript SDK

Trolley's JavaScript SDK (written in TypeScript) - For more information about the API as well as NodeJS code samples check out the [full API documentation](https://docs.trolley.com)

## Installation

    npm install --save trolleyhq

## Getting Started

The Trolley API is built using promises and all methods except
connect will return a promise. The connect call allows you to setup
your API Key and Secret with a client that can be used for subsequent
calls.

```js
// A simple application using the Trolley/Payment Rails SDK
const trolley = require('trolleyhq');

const client = trolley.connect({
  key: "YOUR-ACCESS-KEY",
  secret: "YOUR-SECRET-SECRET",
});

// Async/Await version

async function main() {
  const recipient = await client.recipient.find("R-G7SXXpm6cs4aTUd9YhmgWC");
  console.log(recipient.id);
}

main();

// Promise version

client.recipient.find("R-G7SXXpm6cs4aTUd9YhmgWC").then(recipient => {
  console.log(recipient.id);
}).catch(err => {
  console.log("ERROR", err);
});

```

### Usage

Methods should all have JSDoc comments to help you understand their usage. As mentioned the [full API documentation](https://docs.trolley.com)
is the best source of information about the API.

For more information please read the [JavaScript API docs](https://github.com/Trolley/javascript-sdk/blob/master/docs/) is available. The best starting point is:

| Data Type | SDK Documentation |
| ----- | ----- |
| Batch | [API Docs for Batch](https://github.com/Trolley/javascript-sdk/blob/master/docs/classes/batchgateway.md) |
| Payment | [API Docs for Payment](https://github.com/Trolley/javascript-sdk/blob/master/docs/classes/paymentgateway.md) |
| Recipient | [API Docs for Recipient](https://github.com/Trolley/javascript-sdk/blob/master/docs/classes/recipientgateway.md) |
| Recipient Account | [API Docs for Recipient Account](https://github.com/Trolley/javascript-sdk/blob/master/docs/classes/recipientaccountgateway.md) |

### Running Integration / Unit tests

If you're working on the library itself, here's easy way to run the tests.

```
// if not already, copy the example env file to create an env file
$ cp .env.test .env

// Set access key and secret in the env file
TROLLEY_ACCESS_KEY="ACCESS_KEY"
TROLLEY_SECRET_KEY="SECRET_KEY"

//Run the fixture based tests
$ npm test
```
