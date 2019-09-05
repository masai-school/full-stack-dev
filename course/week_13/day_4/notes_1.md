# Week 13 - Day 4

### MongoDB

**Document**
https://docs.mongodb.com/manual/core/document/

**$set**
https://docs.mongodb.com/manual/reference/operator/update/set/

**$unset**
https://docs.mongodb.com/manual/reference/operator/update/unset/

**$rename**
https://docs.mongodb.com/manual/reference/operator/update/rename/

**$push**
https://docs.mongodb.com/manual/reference/operator/update/push/



**Node & Express Connection**

```
npm install mongodb --save
```

http://mongodb.github.io/node-mongodb-native/3.3/

**Basic DB Connection**

```javascript
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'dummy';

// Create a new MongoClient
const client = new MongoClient(url);

let db;

// Use connect method to connect to the Server
client.connect(function(err) {
  db = client.db(dbName);
});
```

