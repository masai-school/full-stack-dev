## Week 13 - Day 1



**Express JS**

https://expressjs.com/

Installation

```shell
$ mkdir myapp
$ cd myapp
$ npm init
$ npm install express --save
$ npm install body-parser --save
```

**Getting Started**

```javascript
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('hello masai')
})

app.listen(8080)
```

Starting the server
```shell
$ npm index.js
```

visit - http://localhost:8080

**Routing**

GET

```javascript
app.get('/users/:id', function (req, res) {
  res.json({"params": req.params})
})
```

POST

```javascript
app.post('/create', function (req, res) {
  const data = req.body;
  res.json({"data": data})
})
```

