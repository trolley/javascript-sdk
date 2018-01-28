## Classes

<dl>
<dt><a href="#Configuration">Configuration</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#Balance">Balance</a></dt>
<dd></dd>
<dt><a href="#Batch">Batch</a></dt>
<dd></dd>
<dt><a href="#Payment">Payment</a></dt>
<dd></dd>
<dt><a href="#Recipient">Recipient</a></dt>
<dd></dd>
<dt><a href="#RecipientAccount">RecipientAccount</a></dt>
<dd></dd>
</dl>

<a name="Configuration"></a>

## Configuration
**Kind**: global class  

* [Configuration](#Configuration)
    * [new Configuration()](#new_Configuration_new)
    * [.setApiKey(key)](#Configuration.setApiKey)
    * [.setApiSecret(secret)](#Configuration.setApiSecret)
    * [.gateway()](#Configuration.gateway)
    * [.setApiBase(baseUrl)](#Configuration.setApiBase)
    * [.setEnvironment(environment)](#Configuration.setEnvironment)

<a name="new_Configuration_new"></a>

### new Configuration()
Internal constructor

<a name="Configuration.setApiKey"></a>

### Configuration.setApiKey(key)
Globally set the public API key to connect to Payment Rails

**Kind**: static method of [<code>Configuration</code>](#Configuration)  

| Param | Description |
| --- | --- |
| key | Your Payment Rails API public key |

<a name="Configuration.setApiSecret"></a>

### Configuration.setApiSecret(secret)
Globally set the secret API key to connect to Payment Rails

**Kind**: static method of [<code>Configuration</code>](#Configuration)  

| Param | Description |
| --- | --- |
| secret | Your Payment Rails API secret Key |

<a name="Configuration.gateway"></a>

### Configuration.gateway()
Function to construct a gateway for this configuration

**Kind**: static method of [<code>Configuration</code>](#Configuration)  
<a name="Configuration.setApiBase"></a>

### Configuration.setApiBase(baseUrl)
Set the base URL to use to connect to the API gateway

**Kind**: static method of [<code>Configuration</code>](#Configuration)  

| Param | Description |
| --- | --- |
| baseUrl | url root |

<a name="Configuration.setEnvironment"></a>

### Configuration.setEnvironment(environment)
Set the Payment Rails API environment that your using

**Kind**: static method of [<code>Configuration</code>](#Configuration)  

| Param | Description |
| --- | --- |
| environment | one of "production" or "sandbox" |

<a name="Balance"></a>

## Balance
**Kind**: global variable  

* [Balance](#Balance)
    * [.all(term)](#Balance.all)
    * [.find(term)](#Balance.find)

<a name="Balance.all"></a>

### Balance.all(term)
Retrieves the balance based on the api key

**Kind**: static method of [<code>Balance</code>](#Balance)  

| Param | Type |
| --- | --- |
| term | <code>string</code> | 

<a name="Balance.find"></a>

### Balance.find(term)
Retrieves the balance based on the api key

**Kind**: static method of [<code>Balance</code>](#Balance)  

| Param | Type |
| --- | --- |
| term | <code>string</code> | 

<a name="Batch"></a>

## Batch
**Kind**: global variable  

* [Batch](#Batch)
    * [.all(batchId)](#Batch.all)
    * [.find(batchId)](#Batch.find)
    * [.create(batchId, body)](#Batch.create)
    * ~~[.update(batchId, body)](#Batch.update)~~
    * [.remove(batchId)](#Batch.remove)
    * [.search(page, pageSize, search)](#Batch.search)
    * [.generateQuote(batchId)](#Batch.generateQuote)
    * [.startProcessing(batchId)](#Batch.startProcessing)
    * [.summary(batchId)](#Batch.summary)
    * [.paymentList(batchId)](#Batch.paymentList)

<a name="Batch.all"></a>

### Batch.all(batchId)
Retrieves a batch based on the batch id

**Kind**: static method of [<code>Batch</code>](#Batch)  

| Param | Type |
| --- | --- |
| batchId | <code>string</code> | 

<a name="Batch.find"></a>

### Batch.find(batchId)
Retrieves a batch based on the batch id

**Kind**: static method of [<code>Batch</code>](#Batch)  

| Param | Type |
| --- | --- |
| batchId | <code>string</code> | 

<a name="Batch.create"></a>

### Batch.create(batchId, body)
Creates a batch or
generates quote based on batch id or
process batch based on batch id

**Kind**: static method of [<code>Batch</code>](#Batch)  

| Param | Type |
| --- | --- |
| batchId | <code>string</code> | 
| body | <code>array</code> | 

<a name="Batch.update"></a>

### ~~Batch.update(batchId, body)~~
***Deprecated***

**Kind**: static method of [<code>Batch</code>](#Batch)  

| Param | Type |
| --- | --- |
| batchId | <code>string</code> | 
| body | <code>array</code> | 

<a name="Batch.remove"></a>

### Batch.remove(batchId)
Delete a batch based on the batch id

**Kind**: static method of [<code>Batch</code>](#Batch)  

| Param | Type |
| --- | --- |
| batchId | <code>string</code> | 

<a name="Batch.search"></a>

### Batch.search(page, pageSize, search)
List all batches based on the batch id and
 (optional) a given wildcard, page amount and page size

**Kind**: static method of [<code>Batch</code>](#Batch)  

| Param | Type | Default |
| --- | --- | --- |
| page | <code>int</code> | <code>1</code> | 
| pageSize | <code>int</code> | <code>10</code> | 
| search | <code>string</code> |  | 

<a name="Batch.generateQuote"></a>

### Batch.generateQuote(batchId)
Generate quote for a batch based on the batch id

**Kind**: static method of [<code>Batch</code>](#Batch)  

| Param |
| --- |
| batchId | 

<a name="Batch.startProcessing"></a>

### Batch.startProcessing(batchId)
Process a batch based on batch id

**Kind**: static method of [<code>Batch</code>](#Batch)  

| Param |
| --- |
| batchId | 

<a name="Batch.summary"></a>

### Batch.summary(batchId)
Retrieve a summary of a batch based on the batch id

**Kind**: static method of [<code>Batch</code>](#Batch)  

| Param | Type |
| --- | --- |
| batchId | <code>string</code> | 

<a name="Batch.paymentList"></a>

### Batch.paymentList(batchId)
Retrieve a summary of a batch based on the batch id

**Kind**: static method of [<code>Batch</code>](#Batch)  

| Param | Type |
| --- | --- |
| batchId | <code>string</code> | 

<a name="Payment"></a>

## Payment
**Kind**: global variable  

* [Payment](#Payment)
    * [.find(paymentId)](#Payment.find)
    * [.create(batchId, body)](#Payment.create)
    * [.update(paymentId, batchId, body)](#Payment.update)
    * [.remove(paymentId, batchId)](#Payment.remove)
    * [.search(page, pageSize, search)](#Payment.search)
    * [.factory()](#Payment.factory)

<a name="Payment.find"></a>

### Payment.find(paymentId)
Retrieves a payment based on the payment id and or
the batch id

**Kind**: static method of [<code>Payment</code>](#Payment)  

| Param | Type |
| --- | --- |
| paymentId | <code>string</code> | 

<a name="Payment.create"></a>

### Payment.create(batchId, body)
Creates a payment based on the batch id

**Kind**: static method of [<code>Payment</code>](#Payment)  

| Param | Type |
| --- | --- |
| batchId | <code>string</code> | 
| body | <code>array</code> | 

<a name="Payment.update"></a>

### Payment.update(paymentId, batchId, body)
Updates a payment based on the payment id

**Kind**: static method of [<code>Payment</code>](#Payment)  

| Param | Type |
| --- | --- |
| paymentId | <code>string</code> | 
| batchId | <code>string</code> | 
| body | <code>array</code> | 

<a name="Payment.remove"></a>

### Payment.remove(paymentId, batchId)
Delete a payment based on the paymentId id

**Kind**: static method of [<code>Payment</code>](#Payment)  

| Param | Type |
| --- | --- |
| paymentId | <code>string</code> | 
| batchId | <code>string</code> | 

<a name="Payment.search"></a>

### Payment.search(page, pageSize, search)
List all payments based on the batch id and
 (optional) a given wildcard, page amount and page size

**Kind**: static method of [<code>Payment</code>](#Payment)  

| Param | Type | Default |
| --- | --- | --- |
| page | <code>int</code> | <code>1</code> | 
| pageSize | <code>int</code> | <code>10</code> | 
| search | <code>string</code> |  | 

<a name="Payment.factory"></a>

### Payment.factory()
Should only be called by the Gateway

**Kind**: static method of [<code>Payment</code>](#Payment)  
<a name="Recipient"></a>

## Recipient
**Kind**: global variable  

* [Recipient](#Recipient)
    * [.find(recipientId, term)](#Recipient.find)
    * [.create(body)](#Recipient.create)
    * [.update(recipientId, body)](#Recipient.update)
    * [.remove(recipientId)](#Recipient.remove)
    * [.search(page, pageSize, search)](#Recipient.search)
    * [.factory()](#Recipient.factory)

<a name="Recipient.find"></a>

### Recipient.find(recipientId, term)
Retrieves a recipient based on the recipient id given or
retrieves a list of payments or logs depending on the term

**Kind**: static method of [<code>Recipient</code>](#Recipient)  

| Param | Type |
| --- | --- |
| recipientId | <code>string</code> | 
| term | <code>string</code> | 

<a name="Recipient.create"></a>

### Recipient.create(body)
Creates a recipient based on the body given to the client

**Kind**: static method of [<code>Recipient</code>](#Recipient)  

| Param | Type |
| --- | --- |
| body | <code>array</code> | 

<a name="Recipient.update"></a>

### Recipient.update(recipientId, body)
Updates a recipient based on the body given to the client
and the recipient id

**Kind**: static method of [<code>Recipient</code>](#Recipient)  

| Param | Type |
| --- | --- |
| recipientId | <code>string</code> | 
| body | <code>array</code> | 

<a name="Recipient.remove"></a>

### Recipient.remove(recipientId)
Delete a recipient based on the recipient id

**Kind**: static method of [<code>Recipient</code>](#Recipient)  

| Param | Type |
| --- | --- |
| recipientId | <code>string</code> | 

<a name="Recipient.search"></a>

### Recipient.search(page, pageSize, search)
List all recipients based on the recipient id and
 (optional) a given wildcard, page amount and page size

**Kind**: static method of [<code>Recipient</code>](#Recipient)  

| Param | Type | Default |
| --- | --- | --- |
| page | <code>int</code> | <code>1</code> | 
| pageSize | <code>int</code> | <code>10</code> | 
| search | <code>string</code> |  | 

<a name="Recipient.factory"></a>

### Recipient.factory()
Should only be called by the Gateway

**Kind**: static method of [<code>Recipient</code>](#Recipient)  
<a name="RecipientAccount"></a>

## RecipientAccount
**Kind**: global variable  

* [RecipientAccount](#RecipientAccount)
    * [.all(recipientId, recipientAccountId)](#RecipientAccount.all)
    * [.find(recipientId, recipientAccountId)](#RecipientAccount.find)
    * [.create(recipientId, body)](#RecipientAccount.create)
    * [.update(recipientId, body, recipientAccountId)](#RecipientAccount.update)
    * [.remove(recipientId, body, recipientAccountId)](#RecipientAccount.remove)

<a name="RecipientAccount.all"></a>

### RecipientAccount.all(recipientId, recipientAccountId)
Retrieves the payout method based on the recipient id

**Kind**: static method of [<code>RecipientAccount</code>](#RecipientAccount)  

| Param | Type |
| --- | --- |
| recipientId | <code>string</code> | 
| recipientAccountId | <code>string</code> | 

<a name="RecipientAccount.find"></a>

### RecipientAccount.find(recipientId, recipientAccountId)
Retrieves the payout method based on the recipient id

**Kind**: static method of [<code>RecipientAccount</code>](#RecipientAccount)  

| Param | Type |
| --- | --- |
| recipientId | <code>string</code> | 
| recipientAccountId | <code>string</code> | 

<a name="RecipientAccount.create"></a>

### RecipientAccount.create(recipientId, body)
Creates a payout method based on the body and recipient id

**Kind**: static method of [<code>RecipientAccount</code>](#RecipientAccount)  

| Param | Type |
| --- | --- |
| recipientId | <code>string</code> | 
| body | <code>array</code> | 

<a name="RecipientAccount.update"></a>

### RecipientAccount.update(recipientId, body, recipientAccountId)
Updates a payout method based on the body and the recipient id

**Kind**: static method of [<code>RecipientAccount</code>](#RecipientAccount)  

| Param | Type |
| --- | --- |
| recipientId | <code>string</code> | 
| body | <code>array</code> | 
| recipientAccountId | <code>string</code> | 

<a name="RecipientAccount.remove"></a>

### RecipientAccount.remove(recipientId, body, recipientAccountId)
Delete a payout method based on the recipient id

**Kind**: static method of [<code>RecipientAccount</code>](#RecipientAccount)  

| Param | Type |
| --- | --- |
| recipientId | <code>string</code> | 
| body | <code>array</code> | 
| recipientAccountId | <code>string</code> | 

   