[Payment Rails JavaScript SDK](../README.md) > [PaymentGateway](../classes/paymentgateway.md)



# Class: PaymentGateway

## Index

### Methods

* [create](paymentgateway.md#create)
* [find](paymentgateway.md#find)
* [remove](paymentgateway.md#remove)
* [search](paymentgateway.md#search)
* [update](paymentgateway.md#update)



---
## Methods
<a id="create"></a>

###  create

► **create**(batchId: *`string`*, body: *`any`*): `Promise`.<`Payment`>



*Defined in [PaymentGateway.ts:55](https://github.com/PaymentRails/javascript-sdk/blob/0e7d5e5/lib/PaymentGateway.ts#L55)*



Create a new payment in a batch

    const payment = await client.payment.create('B-xx99bb', {
      recipient: {
        email: 'tom.jones@example.com',
      },
      sourceAmount: '10.99',
    });


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  Payment Rails payment id (e.g. "B-xx999bb") |
| body | `any`   |  Payment information |





**Returns:** `Promise`.<`Payment`>





___

<a id="find"></a>

###  find

► **find**(paymentId: *`string`*): `Promise`.<`Payment`>



*Defined in [PaymentGateway.ts:34](https://github.com/PaymentRails/javascript-sdk/blob/0e7d5e5/lib/PaymentGateway.ts#L34)*



Find a specific payment

    const payment = await client.payment.find('P-aabbccc');


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paymentId | `string`   |  Payment Rails payment id (e.g. "P-aabccc") |





**Returns:** `Promise`.<`Payment`>





___

<a id="remove"></a>

###  remove

► **remove**(paymentId: *`string`*, batchId: *`string`*): `Promise`.<`boolean`>



*Defined in [PaymentGateway.ts:90](https://github.com/PaymentRails/javascript-sdk/blob/0e7d5e5/lib/PaymentGateway.ts#L90)*



Delete a given payment -- Note you can only delete non processed payments

    const success = await client.payment.remove('P-aabbccc', 'B-xx99bb');


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paymentId | `string`   |  Payment Rails payment id (e.g. "P-aabccc") |
| batchId | `string`   |  Payment Rails payment id (e.g. "B-xx999bb") |





**Returns:** `Promise`.<`boolean`>





___

<a id="search"></a>

###  search

► **search**(batchId: *`string`*, page?: *`number`*, pageSize?: *`number`*, term?: *`string`*): `Promise`.<`Payment`[]>



*Defined in [PaymentGateway.ts:105](https://github.com/PaymentRails/javascript-sdk/blob/0e7d5e5/lib/PaymentGateway.ts#L105)*



Search for payments in a given batch


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| batchId | `string`  | - |   Payment Rails payment id (e.g. "B-xx999bb") |
| page | `number`  | 1 |   Page number (1 based) |
| pageSize | `number`  | 10 |   Page size (0...1000) |
| term | `string`  | &quot;&quot; |   Any search terms to look for |





**Returns:** `Promise`.<`Payment`[]>





___

<a id="update"></a>

###  update

► **update**(paymentId: *`string`*, batchId: *`string`*, body: *`any`*): `Promise`.<`boolean`>



*Defined in [PaymentGateway.ts:74](https://github.com/PaymentRails/javascript-sdk/blob/0e7d5e5/lib/PaymentGateway.ts#L74)*



Update a given payment

    const success = await client.payment.update('P-aabbccc', 'B-xx99bb', {
      sourceAmount: '99.99',
    });


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paymentId | `string`   |  Payment Rails payment id (e.g. "P-aabccc") |
| batchId | `string`   |  Payment Rails payment id (e.g. "B-xx999bb") |
| body | `any`   |  Payment update information |





**Returns:** `Promise`.<`boolean`>





___


