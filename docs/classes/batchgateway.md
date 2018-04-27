[Payment Rails JavaScript SDK](../README.md) > [BatchGateway](../classes/batchgateway.md)

# Class: BatchGateway

Gateway class for batcheso
*__class__*: BatchGateway

## Hierarchy

**BatchGateway**

## Index

### Methods

* [all](batchgateway.md#all)
* [create](batchgateway.md#create)
* [find](batchgateway.md#find)
* [generateQuote](batchgateway.md#generatequote)
* [paymentList](batchgateway.md#paymentlist)
* [remove](batchgateway.md#remove)
* [search](batchgateway.md#search)
* [startProcessing](batchgateway.md#startprocessing)
* [summary](batchgateway.md#summary)
* [update](batchgateway.md#update)

---

## Methods

<a id="all"></a>

###  all

▸ **all**(): `Promise`<`Batch`[]>

*Defined in [BatchGateway.ts:52](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/BatchGateway.ts#L52)*

Fetch batch all batches with an Iterator

**Returns:** `Promise`<`Batch`[]>

___
<a id="create"></a>

###  create

▸ **create**(batch: *`BatchInput`*, payments?: *`PaymentInput`[]*): `Promise`<`Batch`>

*Defined in [BatchGateway.ts:95](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/BatchGateway.ts#L95)*

Creates a batch with optional payments. This is the interface that is provide by the [Create Batch](http://docs.paymentrails.com/api/#create-a-batch) API

    const batch = await client.batch.create({
        description: "My Batch",
        sourceCurrency: "USD",
      }, [
        {
          recipient: {
            email: "john@example.com",
          },
          sourceAmount: "10.20",
        },
      ]);

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batch | `BatchInput` |  - |
| `Optional` payments | `PaymentInput`[] |  (optional) |

**Returns:** `Promise`<`Batch`>

___
<a id="find"></a>

###  find

▸ **find**(batchId: *`string`*): `Promise`<`Batch`>

*Defined in [BatchGateway.ts:67](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/BatchGateway.ts#L67)*

Retrieves a batch based on the batch id

    const batch = await client.batch.find('B-xx999bb');

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string` |  Payment Rails payment id (e.g. "B-xx999bb") |

**Returns:** `Promise`<`Batch`>

___
<a id="generatequote"></a>

###  generateQuote

▸ **generateQuote**(batchId: *`string`*): `Promise`<`Batch`>

*Defined in [BatchGateway.ts:182](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/BatchGateway.ts#L182)*

Generate a FX quote for this batch

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string` |  Payment Rails payment id (e.g. "B-xx999bb") |

**Returns:** `Promise`<`Batch`>

___
<a id="paymentlist"></a>

###  paymentList

▸ **paymentList**(batchId: *`string`*, page?: *`number`*, pageSize?: *`number`*): `Promise`<`Payment`[]>

*Defined in [BatchGateway.ts:166](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/BatchGateway.ts#L166)*

Return a paginated list of payments for this batch

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| batchId | `string` | - |  Payment Rails payment id (e.g. "B-xx999bb") |
| `Default value` page | `number` | 1 |  starting a 1 |
| `Default value` pageSize | `number` | 10 |  in the range 0...1000 |

**Returns:** `Promise`<`Payment`[]>

___
<a id="remove"></a>

###  remove

▸ **remove**(batchId: *`string`*): `Promise`<`boolean`>

*Defined in [BatchGateway.ts:132](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/BatchGateway.ts#L132)*

Delete the given batch

    const success = client.batch.remove('B-xx999bb');

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string` |  Payment Rails payment id (e.g. "B-xx999bb") |

**Returns:** `Promise`<`boolean`>

___
<a id="search"></a>

###  search

▸ **search**(page?: *`number`*, pageSize?: *`number`*, term?: *`string`*): `Promise`<`Batch`[]>

*Defined in [BatchGateway.ts:146](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/BatchGateway.ts#L146)*

Search for a batch matching the given term

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` page | `number` | 1 |  - |
| `Default value` pageSize | `number` | 10 |  - |
| `Default value` term | `string` | &quot;&quot; |  string search term |

**Returns:** `Promise`<`Batch`[]>

___
<a id="startprocessing"></a>

###  startProcessing

▸ **startProcessing**(batchId: *`string`*): `Promise`<`Batch`>

*Defined in [BatchGateway.ts:194](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/BatchGateway.ts#L194)*

Start processing this batch

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string` |  Payment Rails payment id (e.g. "B-xx999bb") |

**Returns:** `Promise`<`Batch`>

___
<a id="summary"></a>

###  summary

▸ **summary**(batchId: *`string`*): `Promise`<`BatchSummary`>

*Defined in [BatchGateway.ts:206](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/BatchGateway.ts#L206)*

Get a transaction totaled summary for this batch

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string` |  Payment Rails payment id (e.g. "B-xx999bb") |

**Returns:** `Promise`<`BatchSummary`>

___
<a id="update"></a>

###  update

▸ **update**(batchId: *`string`*, body: *`BatchInput`*): `Promise`<`boolean`>

*Defined in [BatchGateway.ts:117](https://github.com/PaymentRails/javascript-sdk/blob/c3121c6/lib/BatchGateway.ts#L117)*

Update the batch data, note you can only update the information of a batch not the payments via this API

    const batch = await client.batch.create({
        description: "My Batch for Wednesday",
    });

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| batchId | `string` |  Payment Rails payment id (e.g. "B-xx999bb") |
| body | `BatchInput` | 

**Returns:** `Promise`<`boolean`>

___

