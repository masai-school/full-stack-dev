# Week 4 - Day 3
# Javascript Basics VIII Notes:


## JSON (JavaScript Object Notation)

**So what is JSON?**

According to Mozilla - "JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax." [1]

**Why should we use JSON?**

JSON is one of the most commonly used data formats to transmit data in web applications. Moreover, its not just JavaScript that supports JSON, many commonly used languages on the Web including PHP, Python, C/C++, Java etc., also support JSON. 

Thus, JSON can be used to send data from the front-end to the back-end, and vice-versa. Many popular databases like MongoDB, CouchDB, MySQL, Oracle and PostgreSQL also have extensive support for JSON.

Think of JSON as an almost universal data format on the Internet.

### What Does JSON look like ?

A JSON string's format is very similar to a regular JavaScript Object literal which we have studied before. 

It also consists of `key` - `value` pairs.

It supports the 6 common data types in JavaScript, `String` `Number` `Array` `Boolean` `Null` `Object`.

Lets look at an example of a JSON object below:

```javascript
var emp = 

{
    "Employees" : [
        {
        "userId":"sqwert",
        "jobTitleName":"Developer",
        "firstName":"Sam",
        "lastName":"Pat",
        "preferredFullName":"Samuel Patrick",
        "employeeCode":"E1",
        "region":"CA",
        "phoneNumber":"123-4567890",
        "emailAddress":"abc@gmail.com"
        },
        {
        "userId":"amir1337",
        "jobTitleName":"Front-end Developer",
        "firstName":"Amir",
        "lastName":"Khan",
        "preferredFullName":"Amir Khan",
        "employeeCode":"E2",
        "region":"MA",
        "phoneNumber":"098-7654321",
        "emailAddress":"xyz@gmail.com"
        }
    ],
    "count": 2
}

console.log(emp["Employees"][0]["region"])
console.log(emp["Employees"][1]["phoneNumber"])
```

**Output:**
```javascript
CA
098-7654321
```

In the above example, the JSON contains a key called `Employees` which is an array. It contains 2 objects with several fields. 

Any data from the above object can be accessed in the same way as a regular JavaScript object literal as you can see from the example.

However, notice that in the JSON format all the `keys` are surrounded by double quotes!

### Important notes about JSON:

1. JSON is just a data format and does not contain any properties or functions/methods.
2. JSON requires double quotes to be used around strings and property names. **Single quotes are not valid.**
3. Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work. 
4. Unlike JavaScript code in which object properties may be unquoted, in JSON, only quoted strings may be used as properties.

### Converting between JSON and JavaScript object literals
You may often want to convert between JSON and JavaScript object literals, especially for sending and receiving data across the Internet.

To convert from a JavaScript Object to a JSON string we can use the `JSON.stringify` method. 

To convert from a JSON string to a JavaScript Object we can use the `JSON.parse` method.

**Example:**

```javascript
var person = {
    name : "Sidharth",
    age : 100,
    height: "6 Ft 12 In",
    gender : "Female",
    hobbies: ["Coding", "Weight Lifting", "Running", "Eating"]
}

var json = JSON.stringify(person)

console.log(json)

var regularObject = JSON.parse(json)

console.log(regularObject)
```

**Output:**

```javascript
{"name":"Sidharth","age":100,"height":"6 Ft 12 In","gender":"Female","hobbies":["Coding","Weight Lifting","Running","Eating"]}

{
    name : "Sidharth",
    age : 100,
    height: "6 Ft 12 In",
    gender : "Female",
    hobbies: ["Coding", "Weight Lifting", "Running", "Eating"]}

```
JSON will become more relevant when we learn about API's and retrieving data from them.

**Codepen Link:**
[https://codepen.io/steviekong/pen/mZXYKe](https://codepen.io/steviekong/pen/mZXYKe)

## Functions as objects / Function expressions

Remember that in a previous class, we discussed how `function`s  in JavaScript are objects too.

Thus, we can use them in much the same way as we use any other object in JavaScript. 

This, means we can assign them to variables. This is known as a **function expression**. 

**Example:**

```javascript
var sum = function(x, y){
    return x + y
}

var division = function(x, y){
    return x / y
}

console.log(sum(1, 2))
console.log(division(10,5))
```

This can often be useful when we want to use functions as variables, add them to arrays or objects. **Or even pass them as arguments to other functions!** 

We will go over functions as arguments in the next part. 

## Callback functions

A callback function is a function that is passed as an argument to another function, to be “called back” at a later time. [2]

Lets take a look at an example to see what this means in more detail.

**Example:**

```javascript
function sum(x, y, callBack){
    var sum = x + y
    callBack(sum)
}

var print = function(toPrint){
    console.log(toPrint)
}

sum(4, 5, print)
```

**Output:**
```javascript
9
```

As you can see we passed the print function as an argument to the sum function. First the sum function calculated the sum of `x` and `y` and then the print function was called after the sum was calculated to print the sum to the `console`.

**Codepen Link**
[https://codepen.io/steviekong/pen/agqgde](https://codepen.io/steviekong/pen/agqgde)

### Common functions that take callbacks as arguments

Many functions in JavaScript will often take functions as arguments and it is important to understand how they work!

**Array.foreach()**

The forEach() method runs a given callback function on every element of an array.

**Example:**

```javascript
var arr = [1, 2, 3, 4, 5];

arr.forEach(function(element){
    console.log(element)
});

```
**Output:**

```
1
2
3
4
5
```

As you can see the `forEach` function performs a very similar role as a regular `for` loop. That is, it performs some piece of code for every element in the array.

However, the `forEach` method can only be used with an array as it is a method of the `Array` object!

**Array.map()**

The `map()` method creates a new array with the results of applying a callback function on every element of the original array. 

**Example:**

```javascript
var arr = [1, 2, 3, 4, 5]

var timesTwo = arr.map(function (element){
    return element *2
});

console.log(timesTwo)
```
**Output:**
```javascript
[ 2, 4, 6, 8, 10 ]
```

The above function simply accepted an element, multiplied by 2 and returned the value. 
The map applies the callback function to each element and returns a new modified array.

There are many more interesting Array functions which accept functions as arguments. 

**Codepen link:**
[https://codepen.io/steviekong/pen/MMVKew?editors=1111](https://codepen.io/steviekong/pen/MMVKew?editors=1111)


You can check them out here [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

### Citations

[1] Mozilla, 2019, Working with JSON, https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON  

[2] FreeCodeCamp, 2019, CallBack functions, https://guide.freecodecamp.org/javascript/callback-functions/
