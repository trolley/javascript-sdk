[paymentrails](../README.md) > ["PaymentGateway"](../modules/_paymentgateway_.md) > [PaymentGateway](../classes/_paymentgateway_.paymentgateway.md)



# Class: PaymentGateway

## Index

### Constructors

* [constructor](_paymentgateway_.paymentgateway.md#constructor)


### Properties

* [config](_paymentgateway_.paymentgateway.md#config)
* [gateway](_paymentgateway_.paymentgateway.md#gateway)


### Methods

* [create](_paymentgateway_.paymentgateway.md#create)
* [find](_paymentgateway_.paymentgateway.md#find)
* [remove](_paymentgateway_.paymentgateway.md#remove)
* [search](_paymentgateway_.paymentgateway.md#search)
* [update](_paymentgateway_.paymentgateway.md#update)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new PaymentGateway**(gateway: *[Gateway](_gateway_.gateway.md)*): [PaymentGateway](_paymentgateway_.paymentgateway.md)


*Defined in [PaymentGateway.ts:9](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/PaymentGateway.ts#L9)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gateway | [Gateway](_gateway_.gateway.md)   |  - |





**Returns:** [PaymentGateway](_paymentgateway_.paymentgateway.md)

---


## Properties
<a id="config"></a>

###  config

**●  config**:  *[Configuration](_configuration_.configuration.md)* 

*Defined in [PaymentGateway.ts:9](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/PaymentGateway.ts#L9)*





___

<a id="gateway"></a>

###  gateway

**●  gateway**:  *[Gateway](_gateway_.gateway.md)* 

*Defined in [PaymentGateway.ts:8](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/PaymentGateway.ts#L8)*





___


## Methods
<a id="create"></a>

###  create

► **create**(batchId: *`string`*, body: *`any`*): `Promise`.<[Payment](_payment_.payment.md)>



*Defined in [PaymentGateway.ts:28](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/PaymentGateway.ts#L28)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  - |
| body | `any`   |  - |





**Returns:** `Promise`.<[Payment](_payment_.payment.md)>





___

<a id="find"></a>

###  find

► **find**(paymentId: *`string`*): `Promise`.<[Payment](_payment_.payment.md)>



*Defined in [PaymentGateway.ts:16](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/PaymentGateway.ts#L16)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paymentId | `string`   |  - |





**Returns:** `Promise`.<[Payment](_payment_.payment.md)>





___

<a id="remove"></a>

###  remove

► **remove**(paymentId: *`string`*, batchId: *`string`*): `Promise`.<`boolean`>



*Defined in [PaymentGateway.ts:52](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/PaymentGateway.ts#L52)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paymentId | `string`   |  - |
| batchId | `string`   |  - |





**Returns:** `Promise`.<`boolean`>





___

<a id="search"></a>

###  search

► **search**(batchId: *`string`*, page?: *`number`*, pageSize?: *`number`*, term?: *`string`*): `Promise`.<[Payment](_payment_.payment.md)[]>



*Defined in [PaymentGateway.ts:64](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/PaymentGateway.ts#L64)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| batchId | `string`  | - |   - |
| page | `number`  | 1 |   - |
| pageSize | `number`  | 10 |   - |
| term | `string`  | &quot;&quot; |   - |





**Returns:** `Promise`.<[Payment](_payment_.payment.md)[]>





___

<a id="update"></a>

###  update

► **update**(paymentId: *`string`*, batchId: *`string`*, body: *`any`*): `Promise`.<`boolean`>



*Defined in [PaymentGateway.ts:40](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/PaymentGateway.ts#L40)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paymentId | `string`   |  - |
| batchId | `string`   |  - |
| body | `any`   |  - |





**Returns:** `Promise`.<`boolean`>





___


