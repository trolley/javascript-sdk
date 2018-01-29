[paymentrails](../README.md) > ["Batch"](../modules/_batch_.md) > [Batch](../classes/_batch_.batch.md)



# Class: Batch

## Index

### Properties

* [amount](_batch_.batch.md#amount)
* [completedAt](_batch_.batch.md#completedat)
* [createdAt](_batch_.batch.md#createdat)
* [currency](_batch_.batch.md#currency)
* [description](_batch_.batch.md#description)
* [id](_batch_.batch.md#id)
* [payments](_batch_.batch.md#payments)
* [quoteExpiredAt](_batch_.batch.md#quoteexpiredat)
* [sentAt](_batch_.batch.md#sentat)
* [status](_batch_.batch.md#status)
* [totalPayments](_batch_.batch.md#totalpayments)
* [updatedAt](_batch_.batch.md#updatedat)


### Methods

* [_initialize](_batch_.batch.md#_initialize)
* [all](_batch_.batch.md#all)
* [create](_batch_.batch.md#create)
* [factory](_batch_.batch.md#factory)
* [find](_batch_.batch.md#find)
* [generateQuote](_batch_.batch.md#generatequote)
* [paymentList](_batch_.batch.md#paymentlist)
* [remove](_batch_.batch.md#remove)
* [search](_batch_.batch.md#search)
* [startProcessing](_batch_.batch.md#startprocessing)
* [summary](_batch_.batch.md#summary)
* [update](_batch_.batch.md#update)



---
## Properties
<a id="amount"></a>

###  amount

**●  amount**:  *`string`*  = "0.00"

*Defined in [Batch.ts:36](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L36)*





___

<a id="completedat"></a>

###  completedAt

**●  completedAt**:  *`string`*  = ""

*Defined in [Batch.ts:41](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L41)*





___

<a id="createdat"></a>

###  createdAt

**●  createdAt**:  *`string`*  = ""

*Defined in [Batch.ts:42](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L42)*





___

<a id="currency"></a>

###  currency

**●  currency**:  *`string`*  = ""

*Defined in [Batch.ts:38](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L38)*





___

<a id="description"></a>

###  description

**●  description**:  *`string`*  = ""

*Defined in [Batch.ts:39](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L39)*





___

<a id="id"></a>

###  id

**●  id**:  *`string`*  = ""

*Defined in [Batch.ts:34](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L34)*





___

<a id="payments"></a>

### «Optional» payments

**●  payments**:  *[Payment](_payment_.payment.md)[]*  =  []

*Defined in [Batch.ts:44](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L44)*





___

<a id="quoteexpiredat"></a>

### «Optional» quoteExpiredAt

**●  quoteExpiredAt**:  *`undefined`⎮`string`* 

*Defined in [Batch.ts:45](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L45)*





___

<a id="sentat"></a>

###  sentAt

**●  sentAt**:  *`string`*  = ""

*Defined in [Batch.ts:40](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L40)*





___

<a id="status"></a>

###  status

**●  status**:  *`string`*  = ""

*Defined in [Batch.ts:35](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L35)*





___

<a id="totalpayments"></a>

###  totalPayments

**●  totalPayments**:  *`number`*  = 0

*Defined in [Batch.ts:37](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L37)*





___

<a id="updatedat"></a>

###  updatedAt

**●  updatedAt**:  *`string`*  = ""

*Defined in [Batch.ts:43](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L43)*





___


## Methods
<a id="_initialize"></a>

### «Private» _initialize

► **_initialize**(account: *[Batch](../interfaces/_types_.batch.batch.md)*): `void`



*Defined in [Batch.ts:164](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L164)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| account | [Batch](../interfaces/_types_.batch.batch.md)   |  - |





**Returns:** `void`





___

<a id="all"></a>

### «Static» all

► **all**(): `Promise`.<[Batch](_batch_.batch.md)[]>



*Defined in [Batch.ts:51](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L51)*



Retrieves a batch based on the batch id




**Returns:** `Promise`.<[Batch](_batch_.batch.md)[]>





___

<a id="create"></a>

### «Static» create

► **create**(batch: *[BatchInput](../interfaces/_batch_.batchinput.md)*, payments?: *[PaymentInput](../interfaces/_batch_.paymentinput.md)[]*): `Promise`.<[Batch](_batch_.batch.md)>



*Defined in [Batch.ts:70](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L70)*



Creates a batch or generates quote based on batch id or process batch based on batch id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batch | [BatchInput](../interfaces/_batch_.batchinput.md)   |  - |
| payments | [PaymentInput](../interfaces/_batch_.paymentinput.md)[]   |  - |





**Returns:** `Promise`.<[Batch](_batch_.batch.md)>





___

<a id="factory"></a>

### «Static» factory

► **factory**(batch: *[Batch](../interfaces/_types_.batch.batch.md)*): [Batch](_batch_.batch.md)



*Defined in [Batch.ts:157](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L157)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batch | [Batch](../interfaces/_types_.batch.batch.md)   |  - |





**Returns:** [Batch](_batch_.batch.md)





___

<a id="find"></a>

### «Static» find

► **find**(batchId: *`string`*): `Promise`.<[Batch](_batch_.batch.md)>



*Defined in [Batch.ts:59](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L59)*



Retrieves a batch based on the batch id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  - |





**Returns:** `Promise`.<[Batch](_batch_.batch.md)>





___

<a id="generatequote"></a>

### «Static» generateQuote

► **generateQuote**(batchId: *`string`*): `Promise`.<[Batch](_batch_.batch.md)>



*Defined in [Batch.ts:110](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L110)*



Generate quote for a batch based on the batch id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  - |





**Returns:** `Promise`.<[Batch](_batch_.batch.md)>





___

<a id="paymentlist"></a>

### «Static» paymentList

► **paymentList**(batchId: *`string`*, page?: *`number`*, pageSize?: *`number`*): `Promise`.<[Payment](_payment_.payment.md)[]>



*Defined in [Batch.ts:149](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L149)*



Retrieve a summary of a batch based on the batch id


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| batchId | `string`  | - |   - |
| page | `number`  | 1 |   - |
| pageSize | `number`  | 10 |   - |





**Returns:** `Promise`.<[Payment](_payment_.payment.md)[]>





___

<a id="remove"></a>

### «Static» remove

► **remove**(batchId: *`string`*): `Promise`.<`boolean`>



*Defined in [Batch.ts:87](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L87)*



Delete a batch based on the batch id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  - |





**Returns:** `Promise`.<`boolean`>





___

<a id="search"></a>

### «Static» search

► **search**(page?: *`number`*, pageSize?: *`number`*, term?: *`string`*): `Promise`.<[Batch](_batch_.batch.md)[]>



*Defined in [Batch.ts:98](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L98)*



List all batches based on the batch id and (optional) a given wildcard, page amount and page size


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| page | `number`  | 1 |   - |
| pageSize | `number`  | 10 |   - |
| term | `string`  | &quot;&quot; |   - |





**Returns:** `Promise`.<[Batch](_batch_.batch.md)[]>





___

<a id="startprocessing"></a>

### «Static» startProcessing

► **startProcessing**(batchId: *`string`*): `Promise`.<[Batch](_batch_.batch.md)>



*Defined in [Batch.ts:118](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L118)*



Process a batch based on batch id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  - |





**Returns:** `Promise`.<[Batch](_batch_.batch.md)>





___

<a id="summary"></a>

### «Static» summary

► **summary**(batchId: *`string`*): `Promise`.<[BatchSummary](../interfaces/_types_.batchsummary.batchsummary.md)>



*Defined in [Batch.ts:126](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L126)*



Retrieve a summary of a batch based on the batch id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  - |





**Returns:** `Promise`.<[BatchSummary](../interfaces/_types_.batchsummary.batchsummary.md)>





___

<a id="update"></a>

### «Static» update

► **update**(batchId: *`string`*, body: *`any`*): `Promise`.<`boolean`>



*Defined in [Batch.ts:79](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Batch.ts#L79)*



Updates a batch based on the batch id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  - |
| body | `any`   |  - |





**Returns:** `Promise`.<`boolean`>





___


