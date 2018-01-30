[Payment Rails JavaScript SDK](../README.md) > [BalancesGateway](../classes/balancesgateway.md)



# Class: BalancesGateway

## Index

### Methods

* [all](balancesgateway.md#all)
* [find](balancesgateway.md#find)



---


## Methods
<a id="all"></a>

###  all

► **all**(): `Promise`.<`Balance`[]>



*Defined in [BalancesGateway.ts:32](https://github.com/PaymentRails/javascript-sdk/blob/0e7d5e5/lib/BalancesGateway.ts#L32)*



Fetch the account balance for all enabled bank accounts

    const balances = await client.balances.all();




**Returns:** `Promise`.<`Balance`[]>





___

<a id="find"></a>

###  find

► **find**(kind: *"paypal"⎮"paymentrails"*): `Promise`.<`Balance`[]>



*Defined in [BalancesGateway.ts:49](https://github.com/PaymentRails/javascript-sdk/blob/0e7d5e5/lib/BalancesGateway.ts#L49)*



Fetch the account balance for the given account type

    const balances = await client.balances.find("paymentrails");


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| kind | "paypal"⎮"paymentrails"   |  The account type to get the balances for |





**Returns:** `Promise`.<`Balance`[]>





___


