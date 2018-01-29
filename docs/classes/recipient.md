[Payment Rails JavaScript SDK](../README.md) > [Recipient](../classes/recipient.md)



# Class: Recipient

*__name__*: Recipient


## Index

### Interfaces

* [Account](../interfaces/recipient.account.md)
* [AccountListResponse](../interfaces/recipient.accountlistresponse.md)
* [AccountResponse](../interfaces/recipient.accountresponse.md)
* [ListResponse](../interfaces/recipient.listresponse.md)
* [Recipient](../interfaces/recipient.recipient-1.md)
* [RecipientPayoutMethod](../interfaces/recipient.recipientpayoutmethod.md)
* [Response](../interfaces/recipient.response.md)


### Properties

* [accounts](recipient.md#accounts)
* [complianceStatus](recipient.md#compliancestatus)
* [createdAt](recipient.md#createdat)
* [dob](recipient.md#dob)
* [email](recipient.md#email)
* [estimatedFees](recipient.md#estimatedfees)
* [firstName](recipient.md#firstname)
* [governmentId](recipient.md#governmentid)
* [gravatarUrl](recipient.md#gravatarurl)
* [id](recipient.md#id)
* [language](recipient.md#language)
* [lastName](recipient.md#lastname)
* [name](recipient.md#name)
* [passport](recipient.md#passport)
* [primaryCurrency](recipient.md#primarycurrency)
* [referenceId](recipient.md#referenceid)
* [routeType](recipient.md#routetype)
* [ssn](recipient.md#ssn)
* [status](recipient.md#status)
* [taxType](recipient.md#taxtype)
* [type](recipient.md#type)
* [updatedAt](recipient.md#updatedat)


### Methods

* [_initialize](recipient.md#_initialize)
* [all](recipient.md#all)
* [create](recipient.md#create)
* [factory](recipient.md#factory)
* [find](recipient.md#find)
* [remove](recipient.md#remove)
* [search](recipient.md#search)
* [update](recipient.md#update)


### Object literals

* [address](recipient.md#address)
* [compliance](recipient.md#compliance)



---
## Properties
<a id="accounts"></a>

###  accounts

**●  accounts**:  *[RecipientAccount](recipientaccount.md)[]*  =  []

*Defined in [Recipient.ts:52](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L52)*





___

<a id="compliancestatus"></a>

###  complianceStatus

**●  complianceStatus**:  *`string`*  = ""

*Defined in [Recipient.ts:20](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L20)*





___

<a id="createdat"></a>

###  createdAt

**●  createdAt**:  *`string`*  = ""

*Defined in [Recipient.ts:24](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L24)*





___

<a id="dob"></a>

###  dob

**●  dob**:  *`null`⎮`string`*  = ""

*Defined in [Recipient.ts:21](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L21)*





___

<a id="email"></a>

###  email

**●  email**:  *`string`*  = ""

*Defined in [Recipient.ts:12](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L12)*





___

<a id="estimatedfees"></a>

###  estimatedFees

**●  estimatedFees**:  *`string`⎮`null`*  =  null

*Defined in [Recipient.ts:56](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L56)*





___

<a id="firstname"></a>

###  firstName

**●  firstName**:  *`string`*  = ""

*Defined in [Recipient.ts:15](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L15)*





___

<a id="governmentid"></a>

###  governmentId

**●  governmentId**:  *`null`⎮`string`*  =  null

*Defined in [Recipient.ts:50](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L50)*





___

<a id="gravatarurl"></a>

###  gravatarUrl

**●  gravatarUrl**:  *`string`*  = ""

*Defined in [Recipient.ts:48](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L48)*





___

<a id="id"></a>

###  id

**●  id**:  *`string`*  = ""

*Defined in [Recipient.ts:10](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L10)*





___

<a id="language"></a>

###  language

**●  language**:  *`string`*  = ""

*Defined in [Recipient.ts:19](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L19)*





___

<a id="lastname"></a>

###  lastName

**●  lastName**:  *`string`*  = ""

*Defined in [Recipient.ts:14](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L14)*





___

<a id="name"></a>

###  name

**●  name**:  *`string`*  = ""

*Defined in [Recipient.ts:13](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L13)*





___

<a id="passport"></a>

###  passport

**●  passport**:  *`string`*  = ""

*Defined in [Recipient.ts:22](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L22)*





___

<a id="primarycurrency"></a>

###  primaryCurrency

**●  primaryCurrency**:  *`null`⎮`string`*  =  null

*Defined in [Recipient.ts:54](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L54)*





___

<a id="referenceid"></a>

###  referenceId

**●  referenceId**:  *`string`*  = ""

*Defined in [Recipient.ts:11](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L11)*





___

<a id="routetype"></a>

###  routeType

**●  routeType**:  *`string`⎮`null`*  =  null

*Defined in [Recipient.ts:55](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L55)*





___

<a id="ssn"></a>

###  ssn

**●  ssn**:  *`null`⎮`string`*  =  null

*Defined in [Recipient.ts:51](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L51)*





___

<a id="status"></a>

###  status

**●  status**:  *`string`*  = ""

*Defined in [Recipient.ts:18](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L18)*





___

<a id="taxtype"></a>

###  taxType

**●  taxType**:  *`null`⎮`string`*  = ""

*Defined in [Recipient.ts:17](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L17)*





___

<a id="type"></a>

###  type

**●  type**:  *`string`*  = ""

*Defined in [Recipient.ts:16](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L16)*





___

<a id="updatedat"></a>

###  updatedAt

**●  updatedAt**:  *`string`*  = ""

*Defined in [Recipient.ts:23](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L23)*





___


## Methods
<a id="_initialize"></a>

### «Private» _initialize

► **_initialize**(recipient: *[Recipient](../interfaces/recipient.recipient-1.md)*): `void`



*Defined in [Recipient.ts:127](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L127)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipient | [Recipient](../interfaces/recipient.recipient-1.md)   |  - |





**Returns:** `void`





___

<a id="all"></a>

### «Static» all

► **all**(): `Promise`.<`boolean`>



*Defined in [Recipient.ts:58](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L58)*





**Returns:** `Promise`.<`boolean`>





___

<a id="create"></a>

### «Static» create

► **create**(body: *`any`*): `Promise`.<`Recipient`>



*Defined in [Recipient.ts:76](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L76)*



Creates a recipient based on the body given to the client


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| body | `any`   |  - |





**Returns:** `Promise`.<`Recipient`>





___

<a id="factory"></a>

### «Static» factory

► **factory**(recipient: *[Recipient](../interfaces/recipient.recipient-1.md)*): `Recipient`



*Defined in [Recipient.ts:120](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L120)*



Should only be called by the Gateway


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipient | [Recipient](../interfaces/recipient.recipient-1.md)   |  - |





**Returns:** `Recipient`





___

<a id="find"></a>

### «Static» find

► **find**(recipientId: *`string`*): `Promise`.<`Recipient`>



*Defined in [Recipient.ts:68](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L68)*



Retrieves a recipient based on the recipient id given or retrieves a list of payments or logs depending on the term


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |





**Returns:** `Promise`.<`Recipient`>





___

<a id="remove"></a>

### «Static» remove

► **remove**(recipientId: *`string`*): `Promise`.<`boolean`>



*Defined in [Recipient.ts:94](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L94)*



Delete a recipient based on the recipient id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |





**Returns:** `Promise`.<`boolean`>





___

<a id="search"></a>

### «Static» search

► **search**(page?: *`number`*, pageSize?: *`number`*, term?: *`string`*): `Promise`.<`Recipient`[]>



*Defined in [Recipient.ts:105](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L105)*



List all recipients based on the recipient id and (optional) a given wildcard, page amount and page size


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| page | `number`  | 1 |   - |
| pageSize | `number`  | 10 |   - |
| term | `string`  | &quot;&quot; |   - |





**Returns:** `Promise`.<`Recipient`[]>





___

<a id="update"></a>

### «Static» update

► **update**(recipientId: *`string`*, body: *`any`*): `Promise`.<`boolean`>



*Defined in [Recipient.ts:86](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L86)*



Updates a recipient based on the body given to the client and the recipient id


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |
| body | `any`   |  - |





**Returns:** `Promise`.<`boolean`>





___


<a id="address"></a>

## Object literal: address


<a id="address.city"></a>

###  city

**●  city**:  *`string`*  = ""

*Defined in [Recipient.ts:37](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L37)*





___
<a id="address.country"></a>

###  country

**●  country**:  *`string`*  = ""

*Defined in [Recipient.ts:39](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L39)*





___
<a id="address.phone"></a>

###  phone

**●  phone**:  *`string`*  = ""

*Defined in [Recipient.ts:41](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L41)*





___
<a id="address.phonevalidated"></a>

###  phoneValidated

**●  phoneValidated**:  *`boolean`*  = false

*Defined in [Recipient.ts:42](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L42)*





___
<a id="address.postalcode"></a>

###  postalCode

**●  postalCode**:  *`string`*  = ""

*Defined in [Recipient.ts:38](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L38)*





___
<a id="address.region"></a>

###  region

**●  region**:  *`string`*  = ""

*Defined in [Recipient.ts:40](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L40)*





___
<a id="address.street1"></a>

###  street1

**●  street1**:  *`string`*  = ""

*Defined in [Recipient.ts:35](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L35)*





___
<a id="address.street2"></a>

###  street2

**●  street2**:  *`string`*  = ""

*Defined in [Recipient.ts:36](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L36)*





___

<a id="compliance"></a>

## Object literal: compliance


<a id="compliance.checkedat"></a>

###  checkedAt

**●  checkedAt**:  *`string`*  = ""

*Defined in [Recipient.ts:47](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L47)*





___
<a id="compliance.status-1"></a>

###  status

**●  status**:  *`string`*  = ""

*Defined in [Recipient.ts:47](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Recipient.ts#L47)*





___


