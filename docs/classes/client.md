[Payment Rails JavaScript SDK](../README.md) > [Client](../classes/client.md)



# Class: Client

## Index

### Constructors

* [constructor](client.md#constructor)


### Properties

* [config](client.md#config)


### Methods

* [generateAuthorization](client.md#generateauthorization)
* [get](client.md#get)
* [patch](client.md#patch)
* [post](client.md#post)
* [remove](client.md#remove)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Client**(config: *[Configuration](configuration.md)*): [Client](client.md)


*Defined in [Client.ts:7](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Client.ts#L7)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| config | [Configuration](configuration.md)   |  - |





**Returns:** [Client](client.md)

---


## Properties
<a id="config"></a>

###  config

**●  config**:  *[Configuration](configuration.md)* 

*Defined in [Client.ts:7](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Client.ts#L7)*





___


## Methods
<a id="generateauthorization"></a>

###  generateAuthorization

► **generateAuthorization**(timestamp: *`number`*, endPoint: *`string`*, method: *`string`*, body?: *`string`*): `string`



*Defined in [Client.ts:162](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Client.ts#L162)*



Generates an authoriztion code


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| timestamp | `number`  | - |   - |
| endPoint | `string`  | - |   - |
| method | `string`  | - |   - |
| body | `string`  | &quot;&quot; |   (optional) |





**Returns:** `string`





___

<a id="get"></a>

###  get

► **get**T(endPoint: *`string`*): `Promise`.<`T`>



*Defined in [Client.ts:17](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Client.ts#L17)*



Makes an HTTP GET request to the API


**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| endPoint | `string`   |  - |





**Returns:** `Promise`.<`T`>





___

<a id="patch"></a>

###  patch

► **patch**T(endPoint: *`string`*, payload: *`any`*): `Promise`.<`T`>



*Defined in [Client.ts:90](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Client.ts#L90)*



Makes an HTTP PATCH request to the API


**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| endPoint | `string`   |  - |
| payload | `any`   |  - |





**Returns:** `Promise`.<`T`>





___

<a id="post"></a>

###  post

► **post**T(endPoint: *`string`*, payload?: *`any`*): `Promise`.<`T`>



*Defined in [Client.ts:48](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Client.ts#L48)*



Makes an HTTP POST request to the API


**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| endPoint | `string`   |  - |
| payload | `any`   |  - |





**Returns:** `Promise`.<`T`>





___

<a id="remove"></a>

###  remove

► **remove**T(endPoint: *`string`*): `Promise`.<`T`>



*Defined in [Client.ts:126](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Client.ts#L126)*



Makes an HTTP DELETE request to the API


**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| endPoint | `string`   |  - |





**Returns:** `Promise`.<`T`>





___

