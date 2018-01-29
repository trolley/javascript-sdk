[Payment Rails JavaScript SDK](../README.md) > [BatchGateway](../classes/batchgateway.md)



# Class: BatchGateway


Gateway class for batcheso
*__class__*: BatchGateway


## Index

### Properties

* [gateway](batchgateway.md#gateway)


### Methods

* [all](batchgateway.md#all)
* [create](batchgateway.md#create)
* [find](batchgateway.md#find)
* [generateQuote](batchgateway.md#generatequote)
* [paymentList](batchgateway.md#paymentlist)
* [remove](batchgateway.md#remove)
* [search](batchgateway.md#search)
* [startProcessing](batchgateway.md#startprocessing)
* [summary](batchgateway.md#summary)
* [update](batchgateway.md#update)



---

## Properties
<a id="gateway"></a>

###  gateway

**●  gateway**:  *[Gateway](gateway.md)* 

*Defined in [BatchGateway.ts:37](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/BatchGateway.ts#L37)*





___


## Methods
<a id="all"></a>

###  all

► **all**(): `Promise`.<`Batch`[]>



*Defined in [BatchGateway.ts:51](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/BatchGateway.ts#L51)*



Fetch batch all batches with an Iterator




**Returns:** `Promise`.<`Batch`[]>





___

<a id="create"></a>

###  create

► **create**(batch: *`BatchInput`*, payments?: *`PaymentInput`[]*): `Promise`.<`Batch`>



*Defined in [BatchGateway.ts:84](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/BatchGateway.ts#L84)*



Creates a batch with optional payments


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batch | `BatchInput`   |  - |
| payments | `PaymentInput`[]   |  (optional) |





**Returns:** `Promise`.<`Batch`>





___

<a id="find"></a>

###  find

► **find**(batchId: *`string`*): `Promise`.<`Batch`>



*Defined in [BatchGateway.ts:67](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/BatchGateway.ts#L67)*



Retrieves a batch based on the batch id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  - |





**Returns:** `Promise`.<`Batch`>





___

<a id="generatequote"></a>

###  generateQuote

► **generateQuote**(batchId: *`string`*): `Promise`.<`Batch`>



*Defined in [BatchGateway.ts:172](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/BatchGateway.ts#L172)*



Generate a FX quote for this batch


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  - |





**Returns:** `Promise`.<`Batch`>





___

<a id="paymentlist"></a>

###  paymentList

► **paymentList**(batchId: *`string`*, page?: *`number`*, pageSize?: *`number`*): `Promise`.<`Payment`[]>



*Defined in [BatchGateway.ts:156](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/BatchGateway.ts#L156)*



Return a paginated list of results for the given batch


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| batchId | `string`  | - |   - |
| page | `number`  | 1 |   - |
| pageSize | `number`  | 10 |   - |





**Returns:** `Promise`.<`Payment`[]>





___

<a id="remove"></a>

###  remove

► **remove**(batchId: *`string`*): `Promise`.<`boolean`>



*Defined in [BatchGateway.ts:120](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/BatchGateway.ts#L120)*



Delete the given batch


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  Batch ID |





**Returns:** `Promise`.<`boolean`>





___

<a id="search"></a>

###  search

► **search**(page?: *`number`*, pageSize?: *`number`*, search?: *`string`*): `Promise`.<`Batch`[]>



*Defined in [BatchGateway.ts:138](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/BatchGateway.ts#L138)*



Search for a batch matching the given term


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| page | `number`  | 1 |   - |
| pageSize | `number`  | 10 |   - |
| search | `string`  | &quot;&quot; |   string search term |





**Returns:** `Promise`.<`Batch`[]>





___

<a id="startprocessing"></a>

###  startProcessing

► **startProcessing**(batchId: *`string`*): `Promise`.<`Batch`>



*Defined in [BatchGateway.ts:188](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/BatchGateway.ts#L188)*



Start processing this batch


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  - |





**Returns:** `Promise`.<`Batch`>





___

<a id="summary"></a>

###  summary

► **summary**(batchId: *`string`*): `Promise`.<[BatchSummary](../interfaces/batchsummary.batchsummary-1.md)>



*Defined in [BatchGateway.ts:204](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/BatchGateway.ts#L204)*



Get a transaction totaled summary for this batch


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  - |





**Returns:** `Promise`.<[BatchSummary](../interfaces/batchsummary.batchsummary-1.md)>





___

<a id="update"></a>

###  update

► **update**(batchId: *`string`*, body: *`BatchInput`*): `Promise`.<`boolean`>



*Defined in [BatchGateway.ts:104](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/BatchGateway.ts#L104)*



Update the batch data


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  - |
| body | `BatchInput`   |  - |





**Returns:** `Promise`.<`boolean`>





___


