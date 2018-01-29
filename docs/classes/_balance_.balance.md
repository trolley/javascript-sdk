[paymentrails](../README.md) > ["Balance"](../modules/_balance_.md) > [Balance](../classes/_balance_.balance.md)



# Class: Balance

*__name__*: Balance


## Index

### Properties

* [accountNumber](_balance_.balance.md#accountnumber)
* [amount](_balance_.balance.md#amount)
* [currency](_balance_.balance.md#currency)
* [primary](_balance_.balance.md#primary)
* [type](_balance_.balance.md#type)


### Methods

* [_initialize](_balance_.balance.md#_initialize)
* [all](_balance_.balance.md#all)
* [factory](_balance_.balance.md#factory)
* [find](_balance_.balance.md#find)



---
## Properties
<a id="accountnumber"></a>

###  accountNumber

**●  accountNumber**:  *`string`*  = ""

*Defined in [Balance.ts:15](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Balance.ts#L15)*





___

<a id="amount"></a>

###  amount

**●  amount**:  *`string`*  = "0.00"

*Defined in [Balance.ts:12](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Balance.ts#L12)*





___

<a id="currency"></a>

###  currency

**●  currency**:  *`string`*  = ""

*Defined in [Balance.ts:13](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Balance.ts#L13)*





___

<a id="primary"></a>

###  primary

**●  primary**:  *`boolean`*  = false

*Defined in [Balance.ts:11](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Balance.ts#L11)*





___

<a id="type"></a>

###  type

**●  type**:  *`string`*  = ""

*Defined in [Balance.ts:14](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Balance.ts#L14)*





___


## Methods
<a id="_initialize"></a>

### «Private» _initialize

► **_initialize**(balance: *[Balance](../interfaces/_types_.balance.balance.md)*): `void`



*Defined in [Balance.ts:40](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Balance.ts#L40)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| balance | [Balance](../interfaces/_types_.balance.balance.md)   |  - |





**Returns:** `void`





___

<a id="all"></a>

### «Static» all

► **all**(): `Promise`.<[Balance](_balance_.balance.md)[]>



*Defined in [Balance.ts:21](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Balance.ts#L21)*



Retrieves the balance based on the api key




**Returns:** `Promise`.<[Balance](_balance_.balance.md)[]>





___

<a id="factory"></a>

### «Static» factory

► **factory**(balance: *[Balance](../interfaces/_types_.balance.balance.md)*): [Balance](_balance_.balance.md)



*Defined in [Balance.ts:33](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Balance.ts#L33)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| balance | [Balance](../interfaces/_types_.balance.balance.md)   |  - |





**Returns:** [Balance](_balance_.balance.md)





___

<a id="find"></a>

### «Static» find

► **find**(term: *`string`*): `Promise`.<[Balance](_balance_.balance.md)>



*Defined in [Balance.ts:29](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Balance.ts#L29)*



Retrieves the balance based on the api key


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| term | `string`   |  - |





**Returns:** `Promise`.<[Balance](_balance_.balance.md)>





___


