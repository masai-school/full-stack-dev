# Week 4 - Day 1
# Javascript Basics VII Notes:

## The for in loop

Last time, we discussed how objects basically consist of key-value pairs. 

It can often get tedious to access each and every `key` within and object one by one and retrieve all the data.

Once again loops come to our rescue! We can use the **for in ** loop to do this.

**Syntax:**
```javascript
for(key in object){

}
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

for(key in person){
    var output = key + ":" + person[key]
    console.log(output)
}
```

**Output:**
```javascript
name:Sidharth
age:100
height:6 Ft 12 In
gender:Female
hobbies:Coding,Weight Lifting,Running,Eating
```
Notice how we accessed each value of the object by using the `object[key]` syntax. 

This is an alternative to the `object.key` syntax. You must use the `object[key]` syntax in `for in` loops otherwise your values will be `undefined`.



## Functions within objects and `this` keyword
 
Since `function`s are also objects in JavaScript, we can add them to objects to provide useful functionality. 

Remember in the last coding session we printed the values of the `person` object when a button was clicked ?

We can do the same but with a function defined within an object. 

**Example:**

```javascript
var person = {
    name : "Sidharth",
    age : 100,
    height: "6 Ft 12 In",
    gender : "Female",
    hobbies: ["Coding", "Weight Lifting", "Running", "Eating"],
    printDetails: function(){
        for(key in this){
        var output = key + ":" + person[key]
        console.log(output)
        }
    }
};

person.printDetails()
```

**Output:**
```javascript
name:Sidharth
age:100
height:6 Ft 12 In
gender:Female
hobbies:Coding,Weight Lifting,Running,Eating
printDetails:function(){
        for(key in this){
        var output = key + ":" + person[key]
        console.log(output)
        }
    }
```


Notice how we use the `this` keyword in the function and not the name of the object. The `this` keyword is used to refer to the object itself in javaScript. 

When you want to access an objects properties within that object itself you must use the `this` keyword. If you use the objects name, it will not work!

Look at the example below:


**Example:**

```javascript
var person = {
    name : "Sidharth",
    age : 100,
    height: "6 Ft 12 In",
    gender : "Female",
    hobbies: ["Coding", "Weight Lifting", "Running", "Eating"],
    printDetails: function(){
        for(key in person){
        var output = key + ":" + person[key]
        console.log(output)
        }
    }
};

person.printDetails()
```

**Output:**
```javascript
name:Sidharth
age:100
height:6 Ft 12 In
gender:Female
hobbies:Coding,Weight Lifting,Running,Eating
printDetails:function(){
        for(key in this){
        var output = key + ":" + person[key]
        console.log(output)
        }
    }
```

### Using `this` keyword to modify function properties

We can also use functions to update properties like so.

**Example:**

```javascript
var person = {
    name : "Sidharth",
    age : 100,
    height: "6 Ft 12 In",
    gender : "Female",
    hobbies: ["Coding", "Weight Lifting", "Running", "Eating"],
    printDetails: function(){
        for(key in person){
        var output = key + ":" + person[key]
        console.log(output)
        }
    },
    addHobby: function(hobby){
        this.hobbies.push(hobby)
    }
};
console.log(person.hobbies)
person.addHobby("Swimming")
console.log(person.hobbies)
```

**Output:**
```javascript
[ 'Coding', 'Weight Lifting', 'Running', 'Eating' ]
[ 'Coding', 'Weight Lifting', 'Running', 'Eating', 'Swimming' ]
```


The `addHobby` function accepts a `hobby` as an argument and updates the `this.hobbies` array with a new hobby. 

## Constructors in JavaScript

We made one person object with several properties but if we wanted to make another person we need to write the same bit of code over and over. 

JavaScript actually makes it very easy to create an object `constructor`.   

Think of a `constructor` as a skeleton of our person. It has no properties, but we can use it to create any number of new `person` objects!

**Important note!:** According to mozilla "A constructor function name usually starts with a capital letter — this convention is used to make constructor functions easier to recognize in code."

So always name you constructor functions starting with a capital letter!

**Example:**
```javascript
function Person(name, age, height, gender, hobbies){
    this.name = name;
    this.age  = age 
    this.height = height 
    this.gender = gender
    this.hobbies = [hobbies]
}

var sid = new Person("Sidharth", 90, "7 ft 9 in", "Male", ["swimming", "boxing"]);
var sam = new Person("Sam", 67, "2 ft 3 in", "Male", ["dancing", "running"]);

console.log(sid)
console.log(sam)

```

***Output:**

```javascript
Person {
  name: 'Sidharth',
  age: 90,
  height: '7 ft 9 in',
  gender: 'Male',
  hobbies: [ [ 'swimming', 'boxing' ] ] }

Person {
  name: 'Sam',
  age: 67,
  height: '2 ft 3 in',
  gender: 'Male',
  hobbies: [ [ 'dancing', 'running' ] ] }

```
As you can see `sid` and `sam` are both `Person` objects but they have different attributes!

You can make new objects from `constructors` using the `new` keyword.

## CodePen:
[https://codepen.io/steviekong/pen/ZdaBxN](https://codepen.io/steviekong/pen/ZdaBxN)




