## Week 15 - Day 5

### Python Flask

```shell
$ export FLASK_ENV=development 
$ export FLASK_APP=server.py
$ flask run
```

Starting Code

```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return 'Masai Home Page'
```

URL & Routing

```python
from flask import Flask
from flask import request
app = Flask(__name__)

@app.route('/')
def home():
    return 'Masai Home Page'
    
@app.route('/hello')
def hello():
    return 'Hello Masai'

@app.route('/user/<username>')
def show_user(username):
    return username

@app.route('/task/<username>/<int:task_id>')
def show_task(username, task_id):
    return "Task for user " + username + " id " + str(task_id)

@app.route('/login', methods=['POST'])
def login():
    return "Login Post Method"

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        return "Register Post Method"
    else:
        return "Register Get Method"
```

JSON Requests & Responses

```python
from flask import Flask
from flask import request
import json
app = Flask(__name__)

@app.route('/hello')
def hello():
    return json.dumps({"message": "Hello Masai"})

@app.route('/login', methods=['POST'])
def login():
    username = request.json["username"]
    password = request.json["password"]
    login = False
    if username == password:
        login = True
    return json.dumps({"login": login})
```

