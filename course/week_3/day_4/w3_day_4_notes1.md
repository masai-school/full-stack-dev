# Week 3 - Day 4
# Javascript Basics VI Notes:

## Introduction to Objects and revisiting types

### More Types!

We have already discussed a few types of **primitive** data in JavaScript like `string` `number` `boolean`.

Lets discuss a few more:  

`null` : **null** is a special **primitive** data type that signifies that a there is 'no value' or that there is a lack of value. 

It is important to note that JavaScript will never assign a `null` value to anything, only you the programmer can do that. This is because `null` is used to represent the **intentional** absence of any object value. 

`null` is often useful when you want to return nothing from a function. This is especially useful for handling errors!

**Example:**

```javascript
var x = null

console.log(x)

if(x == null){
    console.log('x is null!')
}
else{
    console.log('x is not null!')
}

```

`undefined`: **undefined** is a another special primitive type that signifies that a variable has not been assigned any value. This is a **default** value that JavaScript assigns.

This is often useful if you want to check if a variable contains a value yet.

**Example:**

```javascript
var num;

console.log(num)
```

`null` and `undefined` are not the same in Javascript. If you want to read more about their difference visit this link [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

### Now onto Objects

We have studied around 5 **primitive** types in JavaScript. There are two more but we can get to them later. 

Other than these primitive types the only other type is called an **object**.

Other than the 7 **primitive types** almost everything else in JavaScript is an `object`.

Some examples of objects you might have seen before:

- `Math` Object.
- `String` wrapper object. 
- `Number` wrapper object. 
- Every `function` in JavaScript is also a `Function` object!
- `Array` is also an object.

Nearly everything in JavaScript is an `object` or acts like an object in the case of wrapper objects like `String` or `Number`.

`objects` are a collection of properties. These properties can be modified by functions/methods that these `objects` provide you with. 

For example you have already seen the `string.length` property and the `array.length` property which gives you the length of arrays and objects. 

### Accessing object properties

You can access any `object`'s property using the following syntax. 

**Syntax**:
```
objectName.propertyName
```

For example we access the `length` property of a string by using `string.length`.

### Making your own objects
Lets say you have a person. 

A person may several properties like:

- Name
- Age 
- Height
- Gender
- Hobbies

We can define an object called `person` with several properties like so.

**Code**:
```javascript
var person = {
    name : "Sidharth",
    age : 100,
    height: "6 Ft 12 In",
    gender : "Female",
    hobbies: ["Coding", "Weight Lifting", "Running", "Eating"]
}
```
Now you have a person with several properties. Notice how the properties are different JavaScript types. 

You can then access those properties:
```javascript
var person = {
    name : "Sidharth",
    age : 100,
    height: "6 Ft 12 In",
    gender : "Female",
    hobbies: ["Coding", "Weight Lifting", "Running", "Eating"]
}

console.log(person.name)

console.log(person.age)

console.log(person.Hobbies[1])
```

**Output:**

```
Sidharth
100
Weight Lifting
```

Notice the syntax of the `object`. Each object is made up of multiple members.

Each member has a **key** or **name** and a value. We calls these key-value pairs in programming. 


### Adding new names/keys and modifying existing names/keys

You can add new names/keys to an object with the following syntax. You can also modify values with the same syntax. 

```javascript
objectname.name = value
```

**Example:**
```javascript
var person = {
    name : "Sidharth",
    age : 100,
    height: "6 Ft 12 In",
    gender : "Female",
    hobbies: ["Coding", "Weight Lifting", "Running", "Eating"]
}

person.favColor = "Red"
person.name = "Piker"
```

## String wrapper object functions/methods

The `string` wrapper object gives you some basic functions to modify and manipulate strings. Lets use some of these functions. 

### substring() method

The `substring(startIndex, endIndex)`` method returns a part of a string from an input string.

The start index is the index of the first character in the output string.

The end index is the index of the last character in the output string.

**Example:**
```javascript
var input = "Welcome to Masai School"

var output1 = input.substring(0, 6)
var output2 = input.substring(4, 10)

console.log(output1)
console.log(output2)
```

**Output:**
```
Welcom
ome to
```

### indexOf() method

The `indexOf(searchString)` method returns the index of the first instance of the string you are searching for within the the given string. 

**Example:**

```javascript
var input = "Welcome to Masai School"

var output = input.indexOf("Masai")

console.log(output)
```
**Output:**
```
11
```

### toUpperCase() and toLowerCase()

The `toUpperCase()` converts a string from **lower case** to **upper case**. 

**Example:**

```javascript
var input = "Welcome to Masai School"

var output = input.toUpperCase();

console.log(output)
```
**Output:**
```
WELCOME TO MASAI SCHOOL
```

The `toLowerCase()` does the opposite and converts a string from **lower case** to **upper case**. 

**Example:**

```javascript
var input = "WELCOME TO MASAI SCHOOL"

var output = input.toLowerCase();

console.log(output)
```
**Output:**
```
welcome to masai school
```


There are many more `string` wrapper object functions which you can check out here [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#String_generic_methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#String_generic_methods)

## Other useful function you may use in the future.

Just like `strings` there are many useful function you may want to use. 

The `Math` object gives you many useful mathematical functions. You can check all these functions out here [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

The `array` object also gives you useful functions to manipulate arrays. You can check these out here [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

There are thousands of objects in javascript so it would be difficult to go over all of them here. 

But all objects have specific properties and functions to manipulate those properties. 

## Codepen link:

[https://codepen.io/steviekong/pen/orGpWR?editors=1011](https://codepen.io/steviekong/pen/orGpWR?editors=1011)

















