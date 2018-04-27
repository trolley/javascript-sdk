[Payment Rails JavaScript SDK](../README.md) > [Configuration](../classes/configuration.md)

# Class: Configuration

## Hierarchy

**Configuration**

## Index

### Properties

* [apiBase](configuration.md#apibase)
* [apiKey](configuration.md#apikey)
* [apiSecret](configuration.md#apisecret)

### Methods

* [setApiKey](configuration.md#setapikey)
* [setApiSecret](configuration.md#setapisecret)
* [setEnvironment](configuration.md#setenvironment)

---

## Properties

<a id="apibase"></a>

###  apiBase

**● apiBase**: *`string`*

*Defined in [Configuration.ts:35](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/Configuration.ts#L35)*

___
<a id="apikey"></a>

###  apiKey

**● apiKey**: *`string`*

*Defined in [Configuration.ts:33](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/Configuration.ts#L33)*

___
<a id="apisecret"></a>

###  apiSecret

**● apiSecret**: *`string`*

*Defined in [Configuration.ts:34](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/Configuration.ts#L34)*

___

## Methods

<a id="setapikey"></a>

### `<Static>` setApiKey

▸ **setApiKey**(key: *`string`*): `void`

*Defined in [Configuration.ts:55](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/Configuration.ts#L55)*

Globally set the public API key to connect to Payment Rails

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | `string` |  Your Payment Rails API public key |

**Returns:** `void`

___
<a id="setapisecret"></a>

### `<Static>` setApiSecret

▸ **setApiSecret**(secret: *`string`*): `void`

*Defined in [Configuration.ts:63](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/Configuration.ts#L63)*

Globally set the secret API key to connect to Payment Rails

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| secret | `string` |  Your Payment Rails API secret Key |

**Returns:** `void`

___
<a id="setenvironment"></a>

### `<Static>` setEnvironment

▸ **setEnvironment**(environment: *"production" |"sandbox" |"integration"*): `void`

*Defined in [Configuration.ts:90](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/Configuration.ts#L90)*

Set the Payment Rails API environment that your using

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| environment | "production" |
"sandbox" |
"integration"
 |  one of "production" or "sandbox" |

**Returns:** `void`

___

