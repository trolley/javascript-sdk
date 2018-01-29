[paymentrails](../README.md) > ["RecipientAccountGateway"](../modules/_recipientaccountgateway_.md) > [RecipientAccountGateway](../classes/_recipientaccountgateway_.recipientaccountgateway.md)



# Class: RecipientAccountGateway

## Index

### Constructors

* [constructor](_recipientaccountgateway_.recipientaccountgateway.md#constructor)


### Properties

* [config](_recipientaccountgateway_.recipientaccountgateway.md#config)
* [gateway](_recipientaccountgateway_.recipientaccountgateway.md#gateway)


### Methods

* [all](_recipientaccountgateway_.recipientaccountgateway.md#all)
* [create](_recipientaccountgateway_.recipientaccountgateway.md#create)
* [find](_recipientaccountgateway_.recipientaccountgateway.md#find)
* [remove](_recipientaccountgateway_.recipientaccountgateway.md#remove)
* [update](_recipientaccountgateway_.recipientaccountgateway.md#update)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new RecipientAccountGateway**(gateway: *[Gateway](_gateway_.gateway.md)*): [RecipientAccountGateway](_recipientaccountgateway_.recipientaccountgateway.md)


*Defined in [RecipientAccountGateway.ts:9](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/RecipientAccountGateway.ts#L9)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gateway | [Gateway](_gateway_.gateway.md)   |  - |





**Returns:** [RecipientAccountGateway](_recipientaccountgateway_.recipientaccountgateway.md)

---


## Properties
<a id="config"></a>

###  config

**●  config**:  *[Configuration](_configuration_.configuration.md)* 

*Defined in [RecipientAccountGateway.ts:9](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/RecipientAccountGateway.ts#L9)*





___

<a id="gateway"></a>

###  gateway

**●  gateway**:  *[Gateway](_gateway_.gateway.md)* 

*Defined in [RecipientAccountGateway.ts:8](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/RecipientAccountGateway.ts#L8)*





___


## Methods
<a id="all"></a>

###  all

► **all**(recipientId: *`string`*): `Promise`.<[RecipientAccount](_recipientaccount_.recipientaccount.md)[]>



*Defined in [RecipientAccountGateway.ts:16](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/RecipientAccountGateway.ts#L16)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |





**Returns:** `Promise`.<[RecipientAccount](_recipientaccount_.recipientaccount.md)[]>





___

<a id="create"></a>

###  create

► **create**(recipientId: *`string`*, body: *`any`*): `Promise`.<[RecipientAccount](_recipientaccount_.recipientaccount.md)>



*Defined in [RecipientAccountGateway.ts:44](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/RecipientAccountGateway.ts#L44)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |
| body | `any`   |  - |





**Returns:** `Promise`.<[RecipientAccount](_recipientaccount_.recipientaccount.md)>





___

<a id="find"></a>

###  find

► **find**(recipientId: *`string`*, recipientAccountId: *`string`*): `Promise`.<[RecipientAccount](_recipientaccount_.recipientaccount.md)>



*Defined in [RecipientAccountGateway.ts:30](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/RecipientAccountGateway.ts#L30)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |
| recipientAccountId | `string`   |  - |





**Returns:** `Promise`.<[RecipientAccount](_recipientaccount_.recipientaccount.md)>





___

<a id="remove"></a>

###  remove

► **remove**(recipientId: *`string`*, recipientAccountId: *`string`*): `Promise`.<`boolean`>



*Defined in [RecipientAccountGateway.ts:72](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/RecipientAccountGateway.ts#L72)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |
| recipientAccountId | `string`   |  - |





**Returns:** `Promise`.<`boolean`>





___

<a id="update"></a>

###  update

► **update**(recipientId: *`string`*, recipientAccountId: *`string`*, body: *`any`*): `Promise`.<[RecipientAccount](_recipientaccount_.recipientaccount.md)>



*Defined in [RecipientAccountGateway.ts:58](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/RecipientAccountGateway.ts#L58)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |
| recipientAccountId | `string`   |  - |
| body | `any`   |  - |





**Returns:** `Promise`.<[RecipientAccount](_recipientaccount_.recipientaccount.md)>





___


