# Javascript Basics II Notes:

## Variables:

We use programming languages like JavaScript to store and manipulate information.  
**Variables** in JavaScript are used to store different kinds of data. Think of a variable like a bottle. We use bottles to store water, in much the same way we use variables to store various forms of data in JavaScript.

**Example:**
```javascript
var number = 200
```

### Syntax:
```javascript
var varname1 [= value1] [, varname2 [= value2] ... [, varnameN [= valueN]]];
```

You can also declare multiple variables in one statement as seen  in the syntax above.

**Example:**
```javascript
var a = 100, b = 200, c = 300;
```

The data inside variables is not constant. This means the data inside a variable can be changed. 

**Example:**
```javascript
var a = 200
a = 100
```

In the above example the variable called a first contained the value 200 but `a = 100` means that a now contains the value 100. 

***NOTE: You can name variables whatever you want but try to give them good/descriptive names that tell the reader the variables function!*** 

## Data Types In Javascript:

There are 7 ***primitive*** types of data in JavaScript but we will focus on 3 types of data for now.

### Strings:

The first type of data is a `String`. This is used to store a sequence of characters used to represent text.

**Example:**
```javascript
var name = "Masai School"
```

Any data within quotes ```"  "``` is a String in JavaScript.

### Numbers:

The second type of data we want to know is a `Number`, which is used to store any kind of numbers. We have already seen this type of data in the variables example.   
Numbers can store both ***Whole Numbers/Integers*** and ***Decimals***. 

**Example:**
```javascript
var num = 100
var dec = 100.001
```

### Booleans:

The last data type we are going to learn about is a ```Boolean```.   
This data type has only two values ```true``` and ```false```.  

**Example:**
```javascript
var x = true
var y = false
```

### Checking the type of data:

Lets say you have some data but you don't know what type it is. You can user the `typeof()` function to find the type of the data. 

**Example:**

```javascript
var name = "Masai School"

console.log(typeof(name))
```

**Output:**
```
string
```

## Mathematical operators in JavaScript
### Common Operators
Javascript supports all the commonly used mathematical operators. Namely `+` `-` `*` `/`.   

**Example:**
```javascript
var a = 2
var b = 3
var c = a + b
var d = a * b
var e = a / b 
var f = a - b
```

**Output:**
```
c = 5
d = 6
e = 0.6666666666666666
f = -1
```

### Modulo or Remainder Operator:
Many programming languages including JavaScript have a modulo operator `%`. This operator returns the remainder when one variable is divided by another.  

**Example:**
```javascript
var a = 10 % 7
```
**Output:**
```
a = 3
```

This operator is often useful when you want to check if a number is odd or even.  

**Example:**
```javascript
var a = 10 % 2
var b = 11 % 2
```
**Output:**
```
a = 0
b = 1
```

Try this out for yourself, any even number `%2` returns 0 while any odd number `%2` returns 1.


### Exponentiation operator:

This operator is represented by `**`. This returns the value of the first operand raised to the power of the second operand. For example 2<sup>4</sup> = 16.

**Example:**
```javascript
var a = 2 ** 4
var b = 3 ** 2
var c = 10 ** 1.5
```
**Output:**
```
a = 16
b = 9
c = 31.622776601683793
``` 

### Increment and Decrement Operator: 
In programming we often want to increment or decrement an operator by just one value. For example we have a variable `age = 20` which increases every year. For this we use the `++` operator also called **increment operator** to increase the value of `age` by 1.  

**Example:**  
```
var birthday = 20
birthday++
```
**Output:**
```
birthday = 21
```

In the same we can also use the **decrement operator** `--` to decrease the value by 1.

## String concatenation

A special property of `Strings` is that they can be combined or concatenated with one another.

**Example:**
```javascript
var word1 = "Welcome"
var word2 = "Masai"
var word3 = word1 + " to " + word2 + " school!"
console.log(word3)
```

**Output:**
```
Welcome to Masai school!
```

Strings can also be combined with other types like `numbers`.

**Example:**

```javascript
var num1 = 1
var num2 = 2
var output = "1 + 2 = " + (num1 + num2)
console.log(output)
```

**Output:**

```
1 + 2 = 3
```

**Note**: Notice the circular brackets between `num1 + num2` this tells javascript that we want to add the two numbers mathematically. Without the brackets the output would be `1 + 2 = 12`.

## Converting between types:

Often we may have data in one type for example `string` and we may want to convert into another type for example `number` in order to do some calculations or to simply display the number. 

To convert from a string to a number we can use the `Number()` function.

**Example:**  

```javascript
var num1 = "12"
var num2 = "13"
console.log(num1 + num2)
num1 = Number(num1)
num2 = Number(num2)
console.log(num1 + num2)
```

**Output:**

```
1213
25
```

Notice how the first output `1213` is simply the sting `"12"` concatenated with the string `"13"` whereas the second output is actually the value of `12 + 13 = 25`

On the other hand to convert a `string` to a `number` we can use the `.toString()` function.

**Example:**  
```javascript
var num1 = 12
var num2 = 13
console.log(num1 + num2)
num1 = num1.toString()
num2 = num2.toString()
console.log(num1 + num2)
```

**Output:**
```
25
1213
```

## Comparison Operators

### Equality

The **equality** operator `==` lets you test if two values are equal or not. It accepts 2 inputs of any type and outputs `true` if they are equal and `false` if the are not equal. 

**Example:**
```javascript
1 == 1
1 == 2
"Masai" == "Masai"
"Masai" == "masai"
```

**Output:**
```javascript
true
false
true
false
```
## Inequality Operator 

The **inequality** operator `!=` performs the opposite function of the equality operator. It accepts 2 inputs of any type and outputs `false` if they are equal and `true` if the are not equal. 

**Example:**
```javascript
1 != 1
1 != 2
"Masai" != "Masai"
"Masai" != "masai"
```

**Output:**
```javascript
false
true
false
true
```

## Logical operators

### AND, OR and NOT Operators
Logical operators are usually used with `Boolean` values as inputs. The outputs are also `Boolean` values.   

**AND Operator**

Lets say you want to check if 2 conditions in your program are true. The ``&&`` operator compares 2 `boolean` values and returns `true` when both `boolean` values are `true`.

**Example:**  
```javascript
true && true
false && false 
true && false 
```
***Output:***
```javascript
true
false
false
```

**OR Operator**

Similarly to the AND operator the OR, `||` operator returns true when either boolean value is `true`.

**Example:**  
```javascript
true || true
false || false 
true || false 
```
***Output:***
```javascript
true
false
true
```

**NOT operator** 

The `!` operator returns `false` when the input is `true`. It returns `true` when the input is false.

**Note:** This is an ***unary*** operator which means it only has one input as compared to the **AND** and the **OR** operator which are ***binary*** operators and have 2 inputs as you have seen before.  

**Example:**  
```javascript
!true
!false 
```
***Output:***
```javascript
false
true
```

## Relational operators

These operators allow you to test the relation between 2 values and returns a `boolean`. JavaScript unlike other languages allows you to compare any type with any other type! 

### Greater than and greater than equal to

The **greater than** operator `>` allows you to check if one value is greater than the other. It returns `true` if the first value is greater than the second and `false` if the second value is greater.  

**Example:**
```javascript
20 > 10
10 > 20
10 > 10
```

**Output:**
```javascript
true
false
false
```

The **greater than equal to operator** `>=` also checks if the second value could be equal to the first value. 

```javascript
10 > 10
10 >= 10
```

**Output:**
```javascript
false
true
```

### Lesser than and lesser than equal to 

The **lesser than** operator `>` allows you to check if one value is lesser than the other. It returns `false` if the first value is greater than the second and `true` if the second value is greater.  

**Example:**
```javascript
20 < 10
10 < 20
10 < 10
```

**Output:**
```javascript
false
true
false
```

The **lesser than equal to operator** `>=` also checks if the second value could be equal to the first value. 

```javascript
10 > 10
10 >= 10
```

**Output:**
```javascript
false
true
```

## If Statements 

We saw before that the **Boolean** operator has only 2 values, `true` and `false`. Now we can use these values in a meaningful way to write code. 

The `if` statement executes a **[block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)** of code only when a specified condition is `true`. If it is `false` it executes the `else` statement. 

### Syntax:

```javascript
if (condition)
   statement1
[else
   statement2]
```

**Example 1:**
```javascript
var username = "Masai"
if(username == "Masai"){
	alert("Welcome to Masai School!")
}
else{
	alert("Invalid User")
}
```

**Example 2:**
```javascript
var age = 15
if(age >= 18){
	alert("You can vote!")
}
else{
	alert("You cannot vote!")
}
```

Check the result of the above programs on your Web-browsers console!

## Else-If Statement:

The `else if` statement allows you to check for another condition. 

### Syntax:

```javascript
if (condition1)
  statement1
else if (condition2)
  statement2
else if (condition3)
  statement3
...
else
  statementN
```

## Switch Statement

The switch statement evaluates an value and matches the value to various **cases**. It then executes the code associated with each statement until it encounters a `break` statement. 

### Syntax:

```javascript
switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the
    //result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
}
```

**Example:**

```javascript
var day = 6
switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Invalid Input";
}
alert(day)
```
Check the result of the above programs on your Web-browsers console!

## Few Important Javascript Functions to remember:

### Console.log

**Syntax:**
```javascript
console.log(msg [, subst1, ..., substN]);
```
This function prints the input to the console. 


### alert() function

 ***Syntax:***

```javascript
alert(message)
```

This function displays an alert dialog with the input message. 

## Codepen

https://codepen.io/steviekong/pen/agmBZM







