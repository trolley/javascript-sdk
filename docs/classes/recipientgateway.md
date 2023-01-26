[Trolley JavaScript SDK](../README.md) > [RecipientGateway](../classes/recipientgateway.md)

# Class: RecipientGateway

## Hierarchy

**RecipientGateway**

## Index

### Constructors

* [constructor](recipientgateway.md#constructor)

### Methods

* [create](recipientgateway.md#create)
* [find](recipientgateway.md#find)
* [remove](recipientgateway.md#remove)
* [search](recipientgateway.md#search)
* [update](recipientgateway.md#update)

---

## Constructors

<a id="constructor"></a>

### `<Private>` constructor

⊕ **new RecipientGateway**(gateway: *[Gateway](gateway.md)*): [RecipientGateway](recipientgateway.md)

*Defined in [RecipientGateway.ts:40](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/RecipientGateway.ts#L40)*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gateway | [Gateway](gateway.md) |  gateway object |

**Returns:** [RecipientGateway](recipientgateway.md)

___

## Methods

<a id="create"></a>

###  create

▸ **create**(body: *[RecipientInput](../interfaces/recipientinput.md)*): `Promise`<`Recipient`>

*Defined in [RecipientGateway.ts:82](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/RecipientGateway.ts#L82)*

Create a given recipient

    const recipient = await client.recipient.create({
      type: "individual",
      firstName: "Tom",
      lastName: "Jones",
      email: "tom.jones@example.com",
      address: {
         street1: "123 Main St",
         country: "US",
      }
    });

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| body | [RecipientInput](../interfaces/recipientinput.md) |  The recipient information to create |

**Returns:** `Promise`<`Recipient`>

___
<a id="find"></a>

###  find

▸ **find**(recipientId: *`string`*): `Promise`<`Recipient`>

*Defined in [RecipientGateway.ts:58](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/RecipientGateway.ts#L58)*

Find a specific recipient by their Trolley recipient ID

    const recipient = await client.recipient.find('R-1234');

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string` |  The Trolley recipient ID (e.g. R-xyzzy) |

**Returns:** `Promise`<`Recipient`>

___
<a id="remove"></a>

###  remove

▸ **remove**(recipientId: *`string`*): `Promise`<`boolean`>

*Defined in [RecipientGateway.ts:115](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/RecipientGateway.ts#L115)*

Delete the given recipient.

    const status = await client.recipient.remove('R-123');

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string` |  The Trolley recipient ID (e.g. R-xyzzy) |

**Returns:** `Promise`<`boolean`>

___
<a id="search"></a>

###  search

▸ **search**(page: *`number`*, pageSize: *`number`*, term: *`string`*): `Promise`<`Recipient`[]>

*Defined in [RecipientGateway.ts:123](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/RecipientGateway.ts#L123)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| page | `number` | 
| pageSize | `number` | 
| term | `string` | 

**Returns:** `Promise`<`Recipient`[]>

___
<a id="update"></a>

###  update

▸ **update**(recipientId: *`string`*, body: *[RecipientInput](../interfaces/recipientinput.md)*): `Promise`<`boolean`>

*Defined in [RecipientGateway.ts:100](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/RecipientGateway.ts#L100)*

Update the given recipient

    const recipient = await client.recipient.update('R-1234', {
      firstName: "Carl",
    });

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string` |  The Trolley recipient ID (e.g. R-xyzzy) |
| body | [RecipientInput](../interfaces/recipientinput.md) |  the changes to make to the recipient |

**Returns:** `Promise`<`boolean`>

___

