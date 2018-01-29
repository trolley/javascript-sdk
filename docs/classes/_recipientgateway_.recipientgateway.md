[paymentrails](../README.md) > ["RecipientGateway"](../modules/_recipientgateway_.md) > [RecipientGateway](../classes/_recipientgateway_.recipientgateway.md)



# Class: RecipientGateway

## Index

### Constructors

* [constructor](_recipientgateway_.recipientgateway.md#constructor)


### Properties

* [config](_recipientgateway_.recipientgateway.md#config)
* [gateway](_recipientgateway_.recipientgateway.md#gateway)


### Methods

* [create](_recipientgateway_.recipientgateway.md#create)
* [find](_recipientgateway_.recipientgateway.md#find)
* [remove](_recipientgateway_.recipientgateway.md#remove)
* [search](_recipientgateway_.recipientgateway.md#search)
* [update](_recipientgateway_.recipientgateway.md#update)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new RecipientGateway**(gateway: *[Gateway](_gateway_.gateway.md)*): [RecipientGateway](_recipientgateway_.recipientgateway.md)


*Defined in [RecipientGateway.ts:9](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/RecipientGateway.ts#L9)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gateway | [Gateway](_gateway_.gateway.md)   |  - |





**Returns:** [RecipientGateway](_recipientgateway_.recipientgateway.md)

---


## Properties
<a id="config"></a>

###  config

**●  config**:  *[Configuration](_configuration_.configuration.md)* 

*Defined in [RecipientGateway.ts:9](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/RecipientGateway.ts#L9)*





___

<a id="gateway"></a>

###  gateway

**●  gateway**:  *[Gateway](_gateway_.gateway.md)* 

*Defined in [RecipientGateway.ts:8](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/RecipientGateway.ts#L8)*





___


## Methods
<a id="create"></a>

###  create

► **create**(body: *`any`*): `Promise`.<[Recipient](_recipient_.recipient.md)>



*Defined in [RecipientGateway.ts:28](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/RecipientGateway.ts#L28)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| body | `any`   |  - |





**Returns:** `Promise`.<[Recipient](_recipient_.recipient.md)>





___

<a id="find"></a>

###  find

► **find**(recipientId: *`string`*): `Promise`.<[Recipient](_recipient_.recipient.md)>



*Defined in [RecipientGateway.ts:16](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/RecipientGateway.ts#L16)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |





**Returns:** `Promise`.<[Recipient](_recipient_.recipient.md)>





___

<a id="remove"></a>

###  remove

► **remove**(recipientId: *`string`*): `Promise`.<`boolean`>



*Defined in [RecipientGateway.ts:52](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/RecipientGateway.ts#L52)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |





**Returns:** `Promise`.<`boolean`>





___

<a id="search"></a>

###  search

► **search**(page: *`number`*, pageSize: *`number`*, search: *`string`*): `Promise`.<[Recipient](_recipient_.recipient.md)[]>



*Defined in [RecipientGateway.ts:63](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/RecipientGateway.ts#L63)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| page | `number`   |  - |
| pageSize | `number`   |  - |
| search | `string`   |  - |





**Returns:** `Promise`.<[Recipient](_recipient_.recipient.md)[]>





___

<a id="update"></a>

###  update

► **update**(recipientId: *`string`*, body: *`any`*): `Promise`.<`boolean`>



*Defined in [RecipientGateway.ts:40](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/RecipientGateway.ts#L40)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |
| body | `any`   |  - |





**Returns:** `Promise`.<`boolean`>





___


