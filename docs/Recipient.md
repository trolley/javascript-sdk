# Recipient

## About
The Recipient class contains static utily methods for interfacing with the recipient API. For more information see the [API documentation](http://docs.paymentrails.com/#recipients)

## **Methods**
---
### **get**
Utility method to make GET requests to the recipient API

Parameters | Return Type
---| ---:
(recipientId) | Promise<types.Recipient.Recipient>
(recipientId, term) | Promise<types.Recipient.Recipient>

---
### **post**
Utility method to make POST requests to the recipient API

Parameters | Return Type
--- | ---:
(body) | Promise<types.Recipient.Recipient>

---
### **patch**
Utility method to make PATCH requests to the recipient API

Parameters | Return Type
--- | ---:
(recipientId, body) | string

---
### **delete**
Utility method to make DELETE requests to the recipient API

Parameters | Return Type
--- | ---:
(recipientId) | string

---
### **query**
Utility method for querying recipients

Parameters | Return Type
--- | ---:
(no-parameters) | Promise<types.Recipient.Recipient>
(page) | Promise<types.Recipient.Recipient>
(page, pageSize) | Promise<types.Recipient.Recipient>
(page, pageSize, term) | Promise<types.Recipient.Recipient>