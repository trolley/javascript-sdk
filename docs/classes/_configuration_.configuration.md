[paymentrails](../README.md) > ["Configuration"](../modules/_configuration_.md) > [Configuration](../classes/_configuration_.configuration.md)



# Class: Configuration

## Index

### Constructors

* [constructor](_configuration_.configuration.md#constructor)


### Properties

* [apiBase](_configuration_.configuration.md#apibase)
* [apiKey](_configuration_.configuration.md#apikey)
* [apiSecret](_configuration_.configuration.md#apisecret)
* [apiBaseDefault](_configuration_.configuration.md#apibasedefault)
* [apiKeyDefault](_configuration_.configuration.md#apikeydefault)
* [apiSecretDefault](_configuration_.configuration.md#apisecretdefault)


### Methods

* [environmentToUrl](_configuration_.configuration.md#environmenttourl)
* [gateway](_configuration_.configuration.md#gateway)
* [setApiBase](_configuration_.configuration.md#setapibase)
* [setApiKey](_configuration_.configuration.md#setapikey)
* [setApiSecret](_configuration_.configuration.md#setapisecret)
* [setEnvironment](_configuration_.configuration.md#setenvironment)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Configuration**(config?: *[ConfigurationParams](../interfaces/_configuration_.configurationparams.md)*): [Configuration](_configuration_.configuration.md)


*Defined in [Configuration.ts:17](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Configuration.ts#L17)*



Internal constructor


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| config | [ConfigurationParams](../interfaces/_configuration_.configurationparams.md)   |  - |





**Returns:** [Configuration](_configuration_.configuration.md)

---


## Properties
<a id="apibase"></a>

###  apiBase

**●  apiBase**:  *`string`* 

*Defined in [Configuration.ts:17](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Configuration.ts#L17)*





___

<a id="apikey"></a>

###  apiKey

**●  apiKey**:  *`string`* 

*Defined in [Configuration.ts:15](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Configuration.ts#L15)*





___

<a id="apisecret"></a>

###  apiSecret

**●  apiSecret**:  *`string`* 

*Defined in [Configuration.ts:16](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Configuration.ts#L16)*





___

<a id="apibasedefault"></a>

### «Static» apiBaseDefault

**●  apiBaseDefault**:  *`string`*  = "https://api.paymentrails.com"

*Defined in [Configuration.ts:13](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Configuration.ts#L13)*





___

<a id="apikeydefault"></a>

### «Static» apiKeyDefault

**●  apiKeyDefault**:  *`string`* 

*Defined in [Configuration.ts:11](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Configuration.ts#L11)*





___

<a id="apisecretdefault"></a>

### «Static» apiSecretDefault

**●  apiSecretDefault**:  *`string`* 

*Defined in [Configuration.ts:12](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Configuration.ts#L12)*





___


## Methods
<a id="environmenttourl"></a>

### «Static»«Private» environmentToUrl

► **environmentToUrl**(environment: *`string`*): "http://api.local.dev:3000"⎮"http://api.railz.io"⎮"https://api.paymentrails.com"



*Defined in [Configuration.ts:77](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Configuration.ts#L77)*



Private method that converts an environment to a specific URL


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| environment | `string`   |  "production" | "sandbox" | "development" |





**Returns:** "http://api.local.dev:3000"⎮"http://api.railz.io"⎮"https://api.paymentrails.com"





___

<a id="gateway"></a>

### «Static» gateway

► **gateway**(): [Gateway](_gateway_.gateway.md)



*Defined in [Configuration.ts:51](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Configuration.ts#L51)*



Function to construct a gateway for this configuration




**Returns:** [Gateway](_gateway_.gateway.md)





___

<a id="setapibase"></a>

### «Static» setApiBase

► **setApiBase**(baseUrl: *`string`*): `void`



*Defined in [Configuration.ts:61](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Configuration.ts#L61)*



Set the base URL to use to connect to the API gateway


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| baseUrl | `string`   |  url root |





**Returns:** `void`





___

<a id="setapikey"></a>

### «Static» setApiKey

► **setApiKey**(key: *`string`*): `void`



*Defined in [Configuration.ts:36](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Configuration.ts#L36)*



Globally set the public API key to connect to Payment Rails


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | `string`   |  Your Payment Rails API public key |





**Returns:** `void`





___

<a id="setapisecret"></a>

### «Static» setApiSecret

► **setApiSecret**(secret: *`string`*): `void`



*Defined in [Configuration.ts:44](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Configuration.ts#L44)*



Globally set the secret API key to connect to Payment Rails


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| secret | `string`   |  Your Payment Rails API secret Key |





**Returns:** `void`





___

<a id="setenvironment"></a>

### «Static» setEnvironment

► **setEnvironment**(environment: *"production"⎮"sandbox"⎮"integration"*): `void`



*Defined in [Configuration.ts:69](https://github.com/PaymentRails/javascript-sdk/blob/e46ce8e/lib/Configuration.ts#L69)*



Set the Payment Rails API environment that your using


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| environment | "production"⎮"sandbox"⎮"integration"   |  one of "production" or "sandbox" |





**Returns:** `void`





___


