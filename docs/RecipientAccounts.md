# ReipientAccount

## **About**
The PaymentRails_RecipientAccounts class contains static utily methods for interfacing with the payout methods API. For more information see the [API documentation](http://docs.paymentrails.com/#recipient-account)

## **Methods**
---
### **get**
Utility method to make GET requests to the payout method API

Parameters | Return Type
--- | ---:
(recipientId, recipientAccountId) | 
Promise<types.Recipient.RecipientPayoutMethod>

---
### **post**
Utility method to make POST requests to the payout method API

Parameters | Return Type
--- | ---:
(recipientId, body) | Promise<types.Recipient.RecipientPayoutMethod>

---
### **patch**
Utility method to make PATCH requests to the payout method API

Parameters | Return Type
--- | ---:
(recipientId, recipientAccountId, body) | string

---
### **remove**
Utility method to make DELETE requests to the payout method API

Parameters | Return Type
--- | ---:
(recipientId, recipientAccountId) | string
