# Payment

## About
The Payment class contains static utily methods for interfacing with the payment API. For more information see the [API documentation](http://docs.paymentrails.com/#payments)

## **Methods**
---
### **get**
Utility method to make GET requests to the payment API

Parameters | Return Type
--- | ---:
(paymentId) | Promise<types.Payment.Result>


---
### **post**
Utility method to make POST requests to the payment API

Parameters | Return Type
--- | ---:
(body, batchId) | Promise<types.Payment.Result>

---
### **patch**
Utility method to make PATCH requests to the payment API

Parameters | Return Type
--- | ---:
(paymentId,batchId, body) | string

---
### **delete**
Utility method to make DELETE requests to the payment API

Parameters | Return Type
--- | ---:
(paymentId, batchId) | string

---
### **query**
Utility method for querying payments

Parameters | Return Type
--- | ---:
(no-parameters) | Promise<types.Payment.ListResult>
(page) | Promise<types.Payment.ListResult>
(page, pageSize) | Promise<types.Payment.ListResult>
(page, pageSize, term) | Promise<types.Payment.ListResult>