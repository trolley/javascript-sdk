[Payment Rails JavaScript SDK](../README.md) > [Balance](../classes/balance.md)



# Class: Balance

*__name__*: Balance


## Index

### Interfaces

* [Balance](../interfaces/balance.balance-1.md)
* [ListResult](../interfaces/balance.listresult.md)
* [Result](../interfaces/balance.result.md)


### Properties

* [accountNumber](balance.md#accountnumber)
* [amount](balance.md#amount)
* [currency](balance.md#currency)
* [primary](balance.md#primary)
* [type](balance.md#type)


### Methods

* [_initialize](balance.md#_initialize)
* [all](balance.md#all)
* [factory](balance.md#factory)
* [find](balance.md#find)



---
## Properties
<a id="accountnumber"></a>

###  accountNumber

**●  accountNumber**:  *`string`*  = ""

*Defined in [Balance.ts:15](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Balance.ts#L15)*





___

<a id="amount"></a>

###  amount

**●  amount**:  *`string`*  = "0.00"

*Defined in [Balance.ts:12](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Balance.ts#L12)*





___

<a id="currency"></a>

###  currency

**●  currency**:  *`string`*  = ""

*Defined in [Balance.ts:13](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Balance.ts#L13)*





___

<a id="primary"></a>

###  primary

**●  primary**:  *`boolean`*  = false

*Defined in [Balance.ts:11](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Balance.ts#L11)*





___

<a id="type"></a>

###  type

**●  type**:  *`string`*  = ""

*Defined in [Balance.ts:14](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Balance.ts#L14)*





___


## Methods
<a id="_initialize"></a>

### «Private» _initialize

► **_initialize**(balance: *[Balance](../interfaces/balance.balance-1.md)*): `void`



*Defined in [Balance.ts:40](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Balance.ts#L40)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| balance | [Balance](../interfaces/balance.balance-1.md)   |  - |





**Returns:** `void`





___

<a id="all"></a>

### «Static» all

► **all**(): `Promise`.<`Balance`[]>



*Defined in [Balance.ts:21](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Balance.ts#L21)*



Retrieves the balance based on the api key




**Returns:** `Promise`.<`Balance`[]>





___

<a id="factory"></a>

### «Static» factory

► **factory**(balance: *[Balance](../interfaces/balance.balance-1.md)*): `Balance`



*Defined in [Balance.ts:33](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Balance.ts#L33)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| balance | [Balance](../interfaces/balance.balance-1.md)   |  - |





**Returns:** `Balance`





___

<a id="find"></a>

### «Static» find

► **find**(term: *`string`*): `Promise`.<`Balance`>



*Defined in [Balance.ts:29](https://github.com/PaymentRails/javascript-sdk/blob/d7f3cdf/lib/Balance.ts#L29)*



Retrieves the balance based on the api key


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| term | `string`   |  - |





**Returns:** `Promise`.<`Balance`>





___


