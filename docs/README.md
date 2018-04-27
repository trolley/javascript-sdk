
#  Payment Rails JavaScript SDK

## Index

### Modules

* [Exceptions](modules/exceptions.md)

### Classes

* [BalancesGateway](classes/balancesgateway.md)
* [BatchGateway](classes/batchgateway.md)
* [Configuration](classes/configuration.md)
* [Gateway](classes/gateway.md)
* [PaymentGateway](classes/paymentgateway.md)
* [RecipientAccount](classes/recipientaccount.md)
* [RecipientAccountGateway](classes/recipientaccountgateway.md)
* [RecipientGateway](classes/recipientgateway.md)

### Interfaces

* [BatchInput](interfaces/batchinput.md)
* [ConfigurationParams](interfaces/configurationparams.md)
* [PaymentInput](interfaces/paymentinput.md)
* [RecipientInput](interfaces/recipientinput.md)

### Functions

* [connect](#connect)

---

## Functions

<a id="connect"></a>

###  connect

▸ **connect**(config: *[ConfigurationParams](interfaces/configurationparams.md)*): [Gateway](classes/gateway.md)

*Defined in [index.ts:21](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/index.ts#L21)*

Create a client for the Payment Rails JavasScript API

    const client = paymentrails.connect({
      key: "MY_PUBLIC_KEY",
      secret: "MY_PRIVATE_KEY",
    });

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| config | [ConfigurationParams](interfaces/configurationparams.md) |  The configuration parameters |

**Returns:** [Gateway](classes/gateway.md)

___

