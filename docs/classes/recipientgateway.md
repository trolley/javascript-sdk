[paymentrails](../README.md) > [RecipientGateway](../classes/recipientgateway.md)



# Class: RecipientGateway

## Index

### Constructors

* [constructor](recipientgateway.md#constructor)


### Properties

* [config](recipientgateway.md#config)
* [gateway](recipientgateway.md#gateway)


### Methods

* [create](recipientgateway.md#create)
* [find](recipientgateway.md#find)
* [remove](recipientgateway.md#remove)
* [search](recipientgateway.md#search)
* [update](recipientgateway.md#update)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new RecipientGateway**(gateway: *[Gateway](gateway.md)*): [RecipientGateway](recipientgateway.md)


*Defined in [RecipientGateway.ts:9](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/RecipientGateway.ts#L9)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gateway | [Gateway](gateway.md)   |  - |





**Returns:** [RecipientGateway](recipientgateway.md)

---


## Properties
<a id="config"></a>

###  config

**●  config**:  *[Configuration](configuration.md)* 

*Defined in [RecipientGateway.ts:9](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/RecipientGateway.ts#L9)*





___

<a id="gateway"></a>

###  gateway

**●  gateway**:  *[Gateway](gateway.md)* 

*Defined in [RecipientGateway.ts:8](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/RecipientGateway.ts#L8)*





___


## Methods
<a id="create"></a>

###  create

► **create**(body: *`any`*): `Promise`.<`Recipient`>



*Defined in [RecipientGateway.ts:28](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/RecipientGateway.ts#L28)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| body | `any`   |  - |





**Returns:** `Promise`.<`Recipient`>





___

<a id="find"></a>

###  find

► **find**(recipientId: *`string`*): `Promise`.<`Recipient`>



*Defined in [RecipientGateway.ts:16](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/RecipientGateway.ts#L16)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |





**Returns:** `Promise`.<`Recipient`>





___

<a id="remove"></a>

###  remove

► **remove**(recipientId: *`string`*): `Promise`.<`boolean`>



*Defined in [RecipientGateway.ts:52](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/RecipientGateway.ts#L52)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |





**Returns:** `Promise`.<`boolean`>





___

<a id="search"></a>

###  search

► **search**(page: *`number`*, pageSize: *`number`*, search: *`string`*): `Promise`.<`Recipient`[]>



*Defined in [RecipientGateway.ts:63](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/RecipientGateway.ts#L63)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| page | `number`   |  - |
| pageSize | `number`   |  - |
| search | `string`   |  - |





**Returns:** `Promise`.<`Recipient`[]>





___

<a id="update"></a>

###  update

► **update**(recipientId: *`string`*, body: *`any`*): `Promise`.<`boolean`>



*Defined in [RecipientGateway.ts:40](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/RecipientGateway.ts#L40)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |
| body | `any`   |  - |





**Returns:** `Promise`.<`boolean`>





___


