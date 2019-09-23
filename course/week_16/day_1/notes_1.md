## Python & MongoDB

**PyMongo**

https://api.mongodb.com/python/current/

```shell
$ python -m pip install pymongo
```

**Flask PyMongo**

https://flask-pymongo.readthedocs.io/en/latest/

```shell
$ pip install Flask-PyMongo
```



```python
from flask import Flask
from flask import request
import json
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from bson.json_util import dumps
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/dummy"
mongo = PyMongo(app)

@app.route('/users')
def users():
    users = mongo.db.users.find()
    return dumps(users)

@app.route('/users/<ObjectId:user_id>')
def user(user_id):
    user = mongo.db.users.find_one({"_id": user_id})
    return dumps(user)
    
@app.route('/user/create', methods=['POST'])
def user_create():
    user = {}
    user['_id'] = ObjectId()
    user['name'] = request.json['name']
    user['email'] = request.json['email']
    mongo.db.users.insert(user)
    return dumps(user)

@app.route('/user/update/<ObjectId:user_id>', methods=["POST"])
def user_update(user_id):
    name = request.json['name']
    email = request.json['email']
    mongo.db.users.update({"_id": user_id}, {"$set": {"name": name, "email": email}})
    return dumps({"name": name, "email": email})

@app.route('/user/delete/<ObjectId:user_id>')
def user_delete(user_id):
    mongo.db.users.remove({'_id': user_id})
    return dumps({"message": "User Deleted"})
```

