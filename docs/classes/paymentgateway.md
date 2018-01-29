[Payment Rails JavaScript SDK](../README.md) > [PaymentGateway](../classes/paymentgateway.md)



# Class: PaymentGateway

## Index

### Constructors

* [constructor](paymentgateway.md#constructor)


### Properties

* [config](paymentgateway.md#config)
* [gateway](paymentgateway.md#gateway)


### Methods

* [create](paymentgateway.md#create)
* [find](paymentgateway.md#find)
* [remove](paymentgateway.md#remove)
* [search](paymentgateway.md#search)
* [update](paymentgateway.md#update)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new PaymentGateway**(gateway: *[Gateway](gateway.md)*): [PaymentGateway](paymentgateway.md)


*Defined in [PaymentGateway.ts:9](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/PaymentGateway.ts#L9)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gateway | [Gateway](gateway.md)   |  - |





**Returns:** [PaymentGateway](paymentgateway.md)

---


## Properties
<a id="config"></a>

###  config

**●  config**:  *[Configuration](configuration.md)* 

*Defined in [PaymentGateway.ts:9](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/PaymentGateway.ts#L9)*





___

<a id="gateway"></a>

###  gateway

**●  gateway**:  *[Gateway](gateway.md)* 

*Defined in [PaymentGateway.ts:8](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/PaymentGateway.ts#L8)*





___


## Methods
<a id="create"></a>

###  create

► **create**(batchId: *`string`*, body: *`any`*): `Promise`.<`Payment`>



*Defined in [PaymentGateway.ts:28](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/PaymentGateway.ts#L28)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  - |
| body | `any`   |  - |





**Returns:** `Promise`.<`Payment`>





___

<a id="find"></a>

###  find

► **find**(paymentId: *`string`*): `Promise`.<`Payment`>



*Defined in [PaymentGateway.ts:16](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/PaymentGateway.ts#L16)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paymentId | `string`   |  - |





**Returns:** `Promise`.<`Payment`>





___

<a id="remove"></a>

###  remove

► **remove**(paymentId: *`string`*, batchId: *`string`*): `Promise`.<`boolean`>



*Defined in [PaymentGateway.ts:52](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/PaymentGateway.ts#L52)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paymentId | `string`   |  - |
| batchId | `string`   |  - |





**Returns:** `Promise`.<`boolean`>





___

<a id="search"></a>

###  search

► **search**(batchId: *`string`*, page?: *`number`*, pageSize?: *`number`*, term?: *`string`*): `Promise`.<`Payment`[]>



*Defined in [PaymentGateway.ts:64](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/PaymentGateway.ts#L64)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| batchId | `string`  | - |   - |
| page | `number`  | 1 |   - |
| pageSize | `number`  | 10 |   - |
| term | `string`  | &quot;&quot; |   - |





**Returns:** `Promise`.<`Payment`[]>





___

<a id="update"></a>

###  update

► **update**(paymentId: *`string`*, batchId: *`string`*, body: *`any`*): `Promise`.<`boolean`>



*Defined in [PaymentGateway.ts:40](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/PaymentGateway.ts#L40)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paymentId | `string`   |  - |
| batchId | `string`   |  - |
| body | `any`   |  - |





**Returns:** `Promise`.<`boolean`>





___


