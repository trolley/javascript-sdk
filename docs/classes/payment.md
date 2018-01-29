[paymentrails](../README.md) > [Payment](../classes/payment.md)



# Class: Payment

*__name__*: Payment


## Index

### Interfaces

* [ListResult](../interfaces/payment.listresult.md)
* [Payment](../interfaces/payment.payment-1.md)
* [Result](../interfaces/payment.result.md)


### Properties

* [createdAt](payment.md#createdat)
* [exchangeRate](payment.md#exchangerate)
* [fees](payment.md#fees)
* [fxRate](payment.md#fxrate)
* [id](payment.md#id)
* [isSupplyPayment](payment.md#issupplypayment)
* [memo](payment.md#memo)
* [merchantFees](payment.md#merchantfees)
* [payoutMethod](payment.md#payoutmethod)
* [processedAt](payment.md#processedat)
* [recipient](payment.md#recipient)
* [recipientFees](payment.md#recipientfees)
* [returnedAmount](payment.md#returnedamount)
* [sourceAmount](payment.md#sourceamount)
* [sourceCurrency](payment.md#sourcecurrency)
* [status](payment.md#status)
* [targetAmount](payment.md#targetamount)
* [targetCurrency](payment.md#targetcurrency)
* [updatedAt](payment.md#updatedat)


### Methods

* [_initialize](payment.md#_initialize)
* [create](payment.md#create)
* [factory](payment.md#factory)
* [find](payment.md#find)
* [remove](payment.md#remove)
* [search](payment.md#search)
* [update](payment.md#update)


### Object literals

* [compliance](payment.md#compliance)



---
## Properties
<a id="createdat"></a>

###  createdAt

**●  createdAt**:  *`string`*  = ""

*Defined in [Payment.ts:23](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L23)*





___

<a id="exchangerate"></a>

###  exchangeRate

**●  exchangeRate**:  *`string`*  = ""

*Defined in [Payment.ts:15](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L15)*





___

<a id="fees"></a>

###  fees

**●  fees**:  *`string`*  = ""

*Defined in [Payment.ts:16](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L16)*





___

<a id="fxrate"></a>

###  fxRate

**●  fxRate**:  *`string`*  = ""

*Defined in [Payment.ts:20](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L20)*





___

<a id="id"></a>

###  id

**●  id**:  *`string`*  = ""

*Defined in [Payment.ts:10](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L10)*





___

<a id="issupplypayment"></a>

###  isSupplyPayment

**●  isSupplyPayment**:  *`boolean`*  = false

*Defined in [Payment.ts:34](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L34)*





___

<a id="memo"></a>

###  memo

**●  memo**:  *`string`*  = ""

*Defined in [Payment.ts:21](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L21)*





___

<a id="merchantfees"></a>

###  merchantFees

**●  merchantFees**:  *`string`*  = ""

*Defined in [Payment.ts:26](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L26)*





___

<a id="payoutmethod"></a>

###  payoutMethod

**●  payoutMethod**:  *`string`*  = ""

*Defined in [Payment.ts:35](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L35)*





___

<a id="processedat"></a>

###  processedAt

**●  processedAt**:  *`string`*  = ""

*Defined in [Payment.ts:22](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L22)*





___

<a id="recipient"></a>

###  recipient

**●  recipient**:  *`Recipient`*  =  {} as any

*Defined in [Payment.ts:11](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L11)*





___

<a id="recipientfees"></a>

###  recipientFees

**●  recipientFees**:  *`string`*  = ""

*Defined in [Payment.ts:17](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L17)*





___

<a id="returnedamount"></a>

###  returnedAmount

**●  returnedAmount**:  *`string`*  = ""

*Defined in [Payment.ts:18](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L18)*





___

<a id="sourceamount"></a>

###  sourceAmount

**●  sourceAmount**:  *`string`*  = ""

*Defined in [Payment.ts:14](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L14)*





___

<a id="sourcecurrency"></a>

###  sourceCurrency

**●  sourceCurrency**:  *`string`⎮`null`*  =  null

*Defined in [Payment.ts:32](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L32)*





___

<a id="status"></a>

###  status

**●  status**:  *`string`*  = ""

*Defined in [Payment.ts:13](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L13)*





___

<a id="targetamount"></a>

###  targetAmount

**●  targetAmount**:  *`string`*  = ""

*Defined in [Payment.ts:19](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L19)*





___

<a id="targetcurrency"></a>

###  targetCurrency

**●  targetCurrency**:  *`string`⎮`null`*  =  null

*Defined in [Payment.ts:33](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L33)*





___

<a id="updatedat"></a>

###  updatedAt

**●  updatedAt**:  *`string`*  = ""

*Defined in [Payment.ts:24](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L24)*





___


## Methods
<a id="_initialize"></a>

### «Private» _initialize

► **_initialize**(payment: *[Payment](../interfaces/payment.payment-1.md)*): `void`



*Defined in [Payment.ts:111](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L111)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| payment | [Payment](../interfaces/payment.payment-1.md)   |  - |





**Returns:** `void`





___

<a id="create"></a>

### «Static» create

► **create**(batchId: *`string`*, body: *`any`*): `Promise`.<`Payment`>



*Defined in [Payment.ts:54](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L54)*



Creates a payment based on the batch id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string`   |  - |
| body | `any`   |  - |





**Returns:** `Promise`.<`Payment`>





___

<a id="factory"></a>

### «Static» factory

► **factory**(payment: *[Payment](../interfaces/payment.payment-1.md)*): `Payment`



*Defined in [Payment.ts:104](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L104)*



Should only be called by the Gateway


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| payment | [Payment](../interfaces/payment.payment-1.md)   |  - |





**Returns:** `Payment`





___

<a id="find"></a>

### «Static» find

► **find**(paymentId: *`string`*): `Promise`.<[Result](../interfaces/payment.result.md)>



*Defined in [Payment.ts:42](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L42)*



Retrieves a payment based on the payment id and or the batch id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paymentId | `string`   |  - |





**Returns:** `Promise`.<[Result](../interfaces/payment.result.md)>





___

<a id="remove"></a>

### «Static» remove

► **remove**(paymentId: *`string`*, batchId: *`string`*): `Promise`.<`boolean`>



*Defined in [Payment.ts:73](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L73)*



Delete a payment based on the paymentId id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paymentId | `string`   |  - |
| batchId | `string`   |  - |





**Returns:** `Promise`.<`boolean`>





___

<a id="search"></a>

### «Static» search

► **search**(batchId: *`string`*, page?: *`number`*, pageSize?: *`number`*, term?: *`string`*): `Promise`.<[ListResult](../interfaces/payment.listresult.md)>



*Defined in [Payment.ts:84](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L84)*



List all payments based on the batch id and (optional) a given wildcard, page amount and page size


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| batchId | `string`  | - |   - |
| page | `number`  | 1 |   - |
| pageSize | `number`  | 10 |   - |
| term | `string`  | &quot;&quot; |   - |





**Returns:** `Promise`.<[ListResult](../interfaces/payment.listresult.md)>





___

<a id="update"></a>

### «Static» update

► **update**(paymentId: *`string`*, batchId: *`string`*, body: *`any`*): `Promise`.<`boolean`>



*Defined in [Payment.ts:64](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L64)*



Updates a payment based on the payment id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paymentId | `string`   |  - |
| batchId | `string`   |  - |
| body | `any`   |  - |





**Returns:** `Promise`.<`boolean`>





___


<a id="compliance"></a>

## Object literal: compliance


<a id="compliance.checkedat"></a>

###  checkedAt

**●  checkedAt**:  *`string`*  = ""

*Defined in [Payment.ts:30](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L30)*





___
<a id="compliance.status-1"></a>

###  status

**●  status**:  *`string`*  = ""

*Defined in [Payment.ts:30](https://github.com/PaymentRails/javascript-sdk/blob/9b4ee77/lib/Payment.ts#L30)*





___


