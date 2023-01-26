[Trolley JavaScript SDK](../README.md) > [BalancesGateway](../classes/balancesgateway.md)

# Class: BalancesGateway

## Hierarchy

**BalancesGateway**

## Index

### Constructors

* [constructor](balancesgateway.md#constructor)

### Properties

* [config](balancesgateway.md#config)
* [gateway](balancesgateway.md#gateway)

### Methods

* [all](balancesgateway.md#all)
* [find](balancesgateway.md#find)

---

## Constructors

<a id="constructor"></a>

### `<Private>` constructor

⊕ **new BalancesGateway**(gateway: *[Gateway](gateway.md)*): [BalancesGateway](balancesgateway.md)

*Defined in [BalancesGateway.ts:15](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/BalancesGateway.ts#L15)*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gateway | [Gateway](gateway.md) |  gateway object |

**Returns:** [BalancesGateway](balancesgateway.md)

___

## Properties

<a id="config"></a>

### `<Private>` config

**● config**: *[Configuration](configuration.md)*

*Defined in [BalancesGateway.ts:15](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/BalancesGateway.ts#L15)*

___
<a id="gateway"></a>

### `<Private>` gateway

**● gateway**: *[Gateway](gateway.md)*

*Defined in [BalancesGateway.ts:11](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/BalancesGateway.ts#L11)*

___

## Methods

<a id="all"></a>

###  all

▸ **all**(): `Promise`<`Balance`[]>

*Defined in [BalancesGateway.ts:32](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/BalancesGateway.ts#L32)*

Fetch the account balance for all enabled bank accounts

    const balances = await client.balances.all();

**Returns:** `Promise`<`Balance`[]>

___
<a id="find"></a>

###  find

▸ **find**(kind: *"paypal" |"paymentrails"*): `Promise`<`Balance`[]>

*Defined in [BalancesGateway.ts:49](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/BalancesGateway.ts#L49)*

Fetch the account balance for the given account type

    const balances = await client.balances.find("paymentrails");

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| kind | "paypal" |
"paymentrails"
 |  The account type to get the balances for |

**Returns:** `Promise`<`Balance`[]>

___

