[paymentrails](../README.md) > [RecipientAccountGateway](../classes/recipientaccountgateway.md)



# Class: RecipientAccountGateway

## Index

### Constructors

* [constructor](recipientaccountgateway.md#constructor)


### Properties

* [config](recipientaccountgateway.md#config)
* [gateway](recipientaccountgateway.md#gateway)


### Methods

* [all](recipientaccountgateway.md#all)
* [create](recipientaccountgateway.md#create)
* [find](recipientaccountgateway.md#find)
* [remove](recipientaccountgateway.md#remove)
* [update](recipientaccountgateway.md#update)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new RecipientAccountGateway**(gateway: *[Gateway](gateway.md)*): [RecipientAccountGateway](recipientaccountgateway.md)


*Defined in [RecipientAccountGateway.ts:9](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/RecipientAccountGateway.ts#L9)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gateway | [Gateway](gateway.md)   |  - |





**Returns:** [RecipientAccountGateway](recipientaccountgateway.md)

---


## Properties
<a id="config"></a>

###  config

**●  config**:  *[Configuration](configuration.md)* 

*Defined in [RecipientAccountGateway.ts:9](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/RecipientAccountGateway.ts#L9)*





___

<a id="gateway"></a>

###  gateway

**●  gateway**:  *[Gateway](gateway.md)* 

*Defined in [RecipientAccountGateway.ts:8](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/RecipientAccountGateway.ts#L8)*





___


## Methods
<a id="all"></a>

###  all

► **all**(recipientId: *`string`*): `Promise`.<[RecipientAccount](recipientaccount.md)[]>



*Defined in [RecipientAccountGateway.ts:16](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/RecipientAccountGateway.ts#L16)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |





**Returns:** `Promise`.<[RecipientAccount](recipientaccount.md)[]>





___

<a id="create"></a>

###  create

► **create**(recipientId: *`string`*, body: *`any`*): `Promise`.<[RecipientAccount](recipientaccount.md)>



*Defined in [RecipientAccountGateway.ts:44](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/RecipientAccountGateway.ts#L44)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |
| body | `any`   |  - |





**Returns:** `Promise`.<[RecipientAccount](recipientaccount.md)>





___

<a id="find"></a>

###  find

► **find**(recipientId: *`string`*, recipientAccountId: *`string`*): `Promise`.<[RecipientAccount](recipientaccount.md)>



*Defined in [RecipientAccountGateway.ts:30](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/RecipientAccountGateway.ts#L30)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |
| recipientAccountId | `string`   |  - |





**Returns:** `Promise`.<[RecipientAccount](recipientaccount.md)>





___

<a id="remove"></a>

###  remove

► **remove**(recipientId: *`string`*, recipientAccountId: *`string`*): `Promise`.<`boolean`>



*Defined in [RecipientAccountGateway.ts:72](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/RecipientAccountGateway.ts#L72)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |
| recipientAccountId | `string`   |  - |





**Returns:** `Promise`.<`boolean`>





___

<a id="update"></a>

###  update

► **update**(recipientId: *`string`*, recipientAccountId: *`string`*, body: *`any`*): `Promise`.<[RecipientAccount](recipientaccount.md)>



*Defined in [RecipientAccountGateway.ts:58](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/RecipientAccountGateway.ts#L58)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |
| recipientAccountId | `string`   |  - |
| body | `any`   |  - |





**Returns:** `Promise`.<[RecipientAccount](recipientaccount.md)>





___


