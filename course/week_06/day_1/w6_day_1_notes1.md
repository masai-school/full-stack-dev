# Week 6 - Day 1

JavaScript Basics XI notes:

# Introduction to ES6 and Beyond

JavaScript is an ever growing languages and new features are introduced all the time. 

The ES6 or ECMAScript 2015 introduced tons of new useful features. All modern JavaScript frameworks use many features from from ES6 and you will have to write in ES6 to be able to use them. 

A lot of this tutorial and examples are taken from Luke Hoban's ES6 features repository, [https://github.com/lukehoban/es6features#readme](https://github.com/lukehoban/es6features#readme), please give it a star if you liked it!

Lets learn some of these new features now:

## Arrow function expressions

Arrow functions are a simpler and more compact way of writing functions in JavaScript.

Take a look at the examples in the codepen of `functions`

**Example**

```javascript
// Example of ES5 add function

function add(x, y){
  return x + y;
}

console.log(add(3,4));

//Example of ES6 add function

var add = (x, y) => x + y;

console.log(add(3,4));
```

As you can see, the syntax is shorter and concise. 

This is also really useful in callback functions. 

**Example:**

```javascript
var arr = [1, 2, 3, 4, 5];

//ES5 callback

var timesTwo = arr.map(function(element){
    return element*2;
});
console.log(timesTwo);

// When the only statement in an arrow function is `return`, we can remove `return` and remove
// the surrounding curly brackets
var timesThree = arr.map(element => element*3);

console.log(timesThree);

// When there is only one parameter, we can remove the surrounding parentheses. But we have to include the return statement in a multi-line arrow function. 

var timesFour = arr.map(element =>{
    return element * 4;
})
```

The key difference between arrow functions and ES5 functions is how they handle the `this` value. 

In ES5 functions, each function has its own `this` value. This is not very ideal when you are doing object oriented programming. 

ES6 Arrow function do not have a `this`. When this is accessed within an arrow function, it is taken from the parent scope.

There are many more quirks and features of arrow functions that I encourage you to read [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

If you need an in-depth understanding of arrow functions vs ES5 functions I encourage you to read this article [https://medium.com/@oprearocks/es6-arrow-functions-in-depth-f241d49ede33](https://medium.com/@oprearocks/es6-arrow-functions-in-depth-f241d49ede33). 

## let and const

`let` allows you to declare variables that are limited to a scope of a block statement, or expression on which it is used, unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.

What does this mean?

You may have encountered this. 

```javascript
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}
```

As you can see, the scope of `var` is for the entire function. This can be really inconvenient when you start to write very large functions or large programs where you many want to alter the value of globals.

Same examples with `let`

```javascript
function varTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable!
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```
MDN documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

`const` produces block scoped constants. This means unlike `let` their value cannot be changed after initialization. If you try to reinitialize it, an error will be produced. 

```javascript
const x = 1;

x =2; //This will produce an error!
 
```

This is often useful when declaring globals who's value will not change over the execution of the program. 

MDN documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

From now on you should mostly be using `let` and `const`, `var` should only be used in very specific instances. 

If you want an in-depth explanation on `let` vs `const` vs `var` read this [https://tylermcginnis.com/var-let-const/](https://tylermcginnis.com/var-let-const/)

## Class

Classes are syntactical sugar over the existing object oriented model in JavaScript. This means that it does not introduced any new features but improves upon old features. 

They are similar to function constructors that you have already studied but give you much more functionality with less code. 

**Example:**

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

let box = new Rectangle(12, 13);
```

The `constructor` is a special function for initializing objects created with `class`. They work similar to function constructors.


They also support simple instance methods/functions with short declaration syntax. 

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area(){
    return this.height * this.width;
  }

}

let box = new Rectangle(12, 13);
box.area();
```

Classes also support inheritance which means they can take properties and functions from other classes. 

For example lets say we have two classes `Car` and `Sedan`. 

`Car:`

```javascript
class Car{
  constructor(horsePower){
    this.horsePower = horsePower;
    this.fuel = 100;
  }

  consumeFuel(amount){
    this.fuel -= amount;
  }
}
let myCar = new Car(102);
```

`Sedan`
```javascript
class Sedan{
  constructor(name){
    this.name = name;
  }
  printName(){
    console.log(this.name);
  }
}
var mySedan = new Sedan('Civic');
```

Right now they are independent. Lets say we want `Sedan` to inherit or get the properties and functions of the `Car` object.

We can use the `extends` keyword to make `Sedan` a child of the `Car` class. This will allow `Sedan` to get properties and methods/functions of the parent class `Car`.

```javascript
class Car{
  constructor(horsePower, name){
    this.horsePower = horsePower;
    this.fuel = 100;
    this.name = name;
  }

  consumeFuel(amount){
    this.fuel -= amount;
  }
}

class Sedan extends Car{
  printName(){
    console.log(this.name)
  }
}

let mySedan = new Sedan(150, 'Civic');
mySedan.consumeFuel(10);
console.log(mySedan.fuel);
mySedan.printName();
```
MDN documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### The `super` keyword

Now what if we need to access the parent class's properties or functions in the child class? 

Also what if we want to declare a constructor for our child class?

The `super`keyword is used to access and call functions on an object's parent.

Lets update our above example with the super keyword. 
```javascript
class Car{
  constructor(horsePower, name){
    this.horsePower = horsePower;
    this.fuel = 100;
    this.name = name;
  }

  consumeFuel(amount){
    this.fuel -= amount;
  }
}

class Sedan extends Car{
  constructor(horsePower, name, numSeats){
    super(horsePower, name);
    this.numSeats = numSeats;
  }
  printName(){
    console.log(this.name);
  }

  updateHorsePower(input){
    super.horsePower = input;
  }
}

let mySedan = new Sedan(150, 'Civic', 4);

mySedan.updateHorsePower(300);

mySedan
```

It is important to note that when used in a constructor, the super keyword appears alone and must be used before the this keyword is used. 

MDN documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)

## Template Literals

Template literals are string literals that allow you to embed expressions and values within strings.

Template literals are enclosed by the back-tick (` `) or grave accent
character instead of double or single quotes. 

**Example:**

```javascript

let x = "Hello world!" //This is a regular string literal
let y = `Hello World!` //This is a template literal

```

**Some Cool features of template literals:**

Makes it really easy to write Multi-line strings:

```javascript
`This is the first line
and this is the second line.`
```
**Output:**

```javascript
'This is the first line\nand this is the second line.'
```
Notice how the `\n` newline character is automatically inserted.

The key feature is expression interpolation or the ability to embed expressions within strings. 

```javascript
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
```
This saves time on writing and managing a lot of `+` operators within strings.

You can also call functions within these expressions.

There are a few more cool features that you can read about on MDN [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) 

There are many more features we have yet to discuss but we will get to them at a later time. 

I really encourage you read a few if not all the extra links and documentation given to you.












 



  
