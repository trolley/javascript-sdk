[Payment Rails JavaScript SDK](../README.md) > [RecipientAccountGateway](../classes/recipientaccountgateway.md)



# Class: RecipientAccountGateway

## Index

### Methods

* [all](recipientaccountgateway.md#all)
* [create](recipientaccountgateway.md#create)
* [find](recipientaccountgateway.md#find)
* [remove](recipientaccountgateway.md#remove)
* [update](recipientaccountgateway.md#update)



---


## Methods
<a id="all"></a>

###  all

► **all**(recipientId: *`string`*): `Promise`.<[RecipientAccount](recipientaccount.md)[]>



*Defined in [RecipientAccountGateway.ts:33](https://github.com/PaymentRails/javascript-sdk/blob/0e7d5e5/lib/RecipientAccountGateway.ts#L33)*



Fetch all of the accounts for a given Payment Rails recipient

    const accounts = await client.recipientAccount.all('R-1234');
*__throws__*: {NotFound} if recipient doesn't exist



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  The Payment Rails recipient ID (e.g. R-xyzzy) |





**Returns:** `Promise`.<[RecipientAccount](recipientaccount.md)[]>





___

<a id="create"></a>

###  create

► **create**(recipientId: *`string`*, body: *`any`*): `Promise`.<[RecipientAccount](recipientaccount.md)>



*Defined in [RecipientAccountGateway.ts:79](https://github.com/PaymentRails/javascript-sdk/blob/0e7d5e5/lib/RecipientAccountGateway.ts#L79)*



Create a new recipient account

    const account = await client.recipientAccount.create('R-1234', {
      type: "bank-transfer",
      primary: true,
      country: "CA",
      currency: "CAD",
      accountNum: "012345678",
      bankId: "004",
      branchId: "47261",
      accountHolderName: "John Smith",
    });


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  The Payment Rails recipient ID (e.g. R-xyzzy) |
| body | `any`   |  Account information |





**Returns:** `Promise`.<[RecipientAccount](recipientaccount.md)>





___

<a id="find"></a>

###  find

► **find**(recipientId: *`string`*, accountId: *`string`*): `Promise`.<[RecipientAccount](recipientaccount.md)>



*Defined in [RecipientAccountGateway.ts:52](https://github.com/PaymentRails/javascript-sdk/blob/0e7d5e5/lib/RecipientAccountGateway.ts#L52)*



Fetch a specific account for a given Payment Rails recipient

    const account = await client.recipientAccount.find('R-1234', 'A-789');
*__throws__*: {NotFound} if account or recipient don't exist



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  The Payment Rails recipient ID (e.g. R-xyzzy) |
| accountId | `string`   |  The Payment Rails account ID (e.g. A-xyzzy) |





**Returns:** `Promise`.<[RecipientAccount](recipientaccount.md)>





___

<a id="remove"></a>

###  remove

► **remove**(recipientId: *`string`*, accountId: *`string`*): `Promise`.<`boolean`>



*Defined in [RecipientAccountGateway.ts:121](https://github.com/PaymentRails/javascript-sdk/blob/0e7d5e5/lib/RecipientAccountGateway.ts#L121)*



Delete the given recipient account. This will only return success, otherwise it will throw an exception (e.g. NotFound)

    const success = await client.recipientAccount.remove('R-1234', 'A-789');


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  The Payment Rails recipient ID (e.g. R-xyzzy) |
| accountId | `string`   |  The Payment Rails account ID (e.g. A-xyzzy) |





**Returns:** `Promise`.<`boolean`>





___

<a id="update"></a>

###  update

► **update**(recipientId: *`string`*, accountId: *`string`*, body: *`any`*): `Promise`.<[RecipientAccount](recipientaccount.md)>



*Defined in [RecipientAccountGateway.ts:102](https://github.com/PaymentRails/javascript-sdk/blob/0e7d5e5/lib/RecipientAccountGateway.ts#L102)*



Update a recipient account. Note: Updating an account will create a new account ID if it contains any property that isn't just "primary"

    const account = await client.recipientAccount.update('R-1234', 'A-789', {
      accountHolderName: "Tom Jones",
    });


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  The Payment Rails recipient ID (e.g. R-xyzzy) |
| accountId | `string`   |  The Payment Rails account ID (e.g. A-xyzzy) |
| body | `any`   |  Account information |





**Returns:** `Promise`.<[RecipientAccount](recipientaccount.md)>





___


