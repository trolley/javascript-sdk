[Payment Rails JavaScript SDK](../README.md) > [Batch](../classes/batch.md)



# Class: Batch

## Index

### Interfaces

* [Batch](../interfaces/batch.batch-1.md)
* [ListResult](../interfaces/batch.listresult.md)
* [Result](../interfaces/batch.result.md)


### Properties

* [amount](batch.md#amount)
* [completedAt](batch.md#completedat)
* [createdAt](batch.md#createdat)
* [currency](batch.md#currency)
* [description](batch.md#description)
* [id](batch.md#id)
* [payments](batch.md#payments)
* [quoteExpiredAt](batch.md#quoteexpiredat)
* [sentAt](batch.md#sentat)
* [status](batch.md#status)
* [totalPayments](batch.md#totalpayments)
* [updatedAt](batch.md#updatedat)


### Methods

* [_initialize](batch.md#_initialize)
* [all](batch.md#all)
* [create](batch.md#create)
* [factory](batch.md#factory)
* [find](batch.md#find)
* [generateQuote](batch.md#generatequote)
* [paymentList](batch.md#paymentlist)
* [remove](batch.md#remove)
* [search](batch.md#search)
* [startProcessing](batch.md#startprocessing)
* [summary](batch.md#summary)
* [update](batch.md#update)



---
## Properties
<a id="amount"></a>

###  amount

**●  amount**:  *`string`*  = "0.00"

*Defined in [Batch.ts:36](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L36)*





___

<a id="completedat"></a>

###  completedAt

**●  completedAt**:  *`string`*  = ""

*Defined in [Batch.ts:41](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L41)*





___

<a id="createdat"></a>

###  createdAt

**●  createdAt**:  *`string`*  = ""

*Defined in [Batch.ts:42](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L42)*





___

<a id="currency"></a>

###  currency

**●  currency**:  *`string`*  = ""

*Defined in [Batch.ts:38](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L38)*





___

<a id="description"></a>

###  description

**●  description**:  *`string`*  = ""

*Defined in [Batch.ts:39](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L39)*





___

<a id="id"></a>

###  id

**●  id**:  *`string`*  = ""

*Defined in [Batch.ts:34](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L34)*





___

<a id="payments"></a>

### «Optional» payments

**●  payments**:  *`Payment`[]*  =  []

*Defined in [Batch.ts:44](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L44)*





___

<a id="quoteexpiredat"></a>

### «Optional» quoteExpiredAt

**●  quoteExpiredAt**:  *`undefined`⎮`string`* 

*Defined in [Batch.ts:45](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L45)*





___

<a id="sentat"></a>

###  sentAt

**●  sentAt**:  *`string`*  = ""

*Defined in [Batch.ts:40](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L40)*





___

<a id="status"></a>

###  status

**●  status**:  *`string`*  = ""

*Defined in [Batch.ts:35](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L35)*





___

<a id="totalpayments"></a>

###  totalPayments

**●  totalPayments**:  *`number`*  = 0

*Defined in [Batch.ts:37](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L37)*





___

<a id="updatedat"></a>

###  updatedAt

**●  updatedAt**:  *`string`*  = ""

*Defined in [Batch.ts:43](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L43)*





___


## Methods
<a id="_initialize"></a>

### «Private» _initialize

► **_initialize**(account: *[Batch](../interfaces/batch.batch-1.md)*): `void`



*Defined in [Batch.ts:164](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L164)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| account | [Batch](../interfaces/batch.batch-1.md)   |  - |





**Returns:** `void`





___

<a id="all"></a>

### «Static» all

► **all**(): `Promise`.<`Batch`[]>



*Defined in [Batch.ts:51](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L51)*



Retrieves a batch based on the batch id




**Returns:** `Promise`.<`Batch`[]>





___

<a id="create"></a>

### «Static» create

► **create**(batch: *[BatchInput](../interfaces/batchinput.md)*, payments?: *[PaymentInput](../interfaces/paymentinput.md)[]*): `Promise`.<`Batch`>



*Defined in [Batch.ts:70](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L70)*



Creates a batch or generates quote based on batch id or process batch based on batch id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batch | [BatchInput](../interfaces/batchinput.md)   |  - |
| payments | [PaymentInput](../interfaces/paymentinput.md)[]   |  - |





**Returns:** `Promise`.<`Batch`>





___

<a id="factory"></a>

### «Static» factory

► **factory**(batch: *[Batch](../interfaces/batch.batch-1.md)*): `Batch`



*Defined in [Batch.ts:157](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L157)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batch | [Batch](../interfaces/batch.batch-1.md)   |  - |





**Returns:** `Batch`





___

<a id="find"></a>

### «Static» find

► **find**(batchId: *`string`*): `Promise`.<`Batch`>



*Defined in [Batch.ts:59](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L59)*



Retrieves a batch based on the batch id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  - |





**Returns:** `Promise`.<`Batch`>





___

<a id="generatequote"></a>

### «Static» generateQuote

► **generateQuote**(batchId: *`string`*): `Promise`.<`Batch`>



*Defined in [Batch.ts:110](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L110)*



Generate quote for a batch based on the batch id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  - |





**Returns:** `Promise`.<`Batch`>





___

<a id="paymentlist"></a>

### «Static» paymentList

► **paymentList**(batchId: *`string`*, page?: *`number`*, pageSize?: *`number`*): `Promise`.<`Payment`[]>



*Defined in [Batch.ts:149](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L149)*



Retrieve a summary of a batch based on the batch id


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| batchId | `string`  | - |   - |
| page | `number`  | 1 |   - |
| pageSize | `number`  | 10 |   - |





**Returns:** `Promise`.<`Payment`[]>





___

<a id="remove"></a>

### «Static» remove

► **remove**(batchId: *`string`*): `Promise`.<`boolean`>



*Defined in [Batch.ts:87](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L87)*



Delete a batch based on the batch id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  - |





**Returns:** `Promise`.<`boolean`>





___

<a id="search"></a>

### «Static» search

► **search**(page?: *`number`*, pageSize?: *`number`*, term?: *`string`*): `Promise`.<`Batch`[]>



*Defined in [Batch.ts:98](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L98)*



List all batches based on the batch id and (optional) a given wildcard, page amount and page size


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| page | `number`  | 1 |   - |
| pageSize | `number`  | 10 |   - |
| term | `string`  | &quot;&quot; |   - |





**Returns:** `Promise`.<`Batch`[]>





___

<a id="startprocessing"></a>

### «Static» startProcessing

► **startProcessing**(batchId: *`string`*): `Promise`.<`Batch`>



*Defined in [Batch.ts:118](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L118)*



Process a batch based on batch id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  - |





**Returns:** `Promise`.<`Batch`>





___

<a id="summary"></a>

### «Static» summary

► **summary**(batchId: *`string`*): `Promise`.<[BatchSummary](../interfaces/batchsummary.batchsummary-1.md)>



*Defined in [Batch.ts:126](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L126)*



Retrieve a summary of a batch based on the batch id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  - |





**Returns:** `Promise`.<[BatchSummary](../interfaces/batchsummary.batchsummary-1.md)>





___

<a id="update"></a>

### «Static» update

► **update**(batchId: *`string`*, body: *`any`*): `Promise`.<`boolean`>



*Defined in [Batch.ts:79](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Batch.ts#L79)*



Updates a batch based on the batch id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  - |
| body | `any`   |  - |





**Returns:** `Promise`.<`boolean`>





___


