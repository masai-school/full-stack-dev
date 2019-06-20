# Week 2 Day 4 Brain Teasers 
## Time Limit - 30 Minutes
**Complete the questions by hand and submit your answers on the Google form link provided.**  
***You cannot and should not use any JavaScript compliers! Any use of online or offline compliers is considered cheating!***

### If you cannot solve a problem please move ahead. Your task is to complete as many problems as possible within the given time. 

### You are expected to use Day 3 notes 2 to solve this problem set!

## Boolean Logic (Easy)
### Look at the code involving logical operators and evaluate the output. Your answers should be either `true` or `false`.
1. 
```javascript
true && true || false && false
```
2. 
```javascript
true == false || false == false
```
3. 
```javascript
9932494354545 % 2 != 1 
```
4. 
```javascript
190 + 20 >= 100 && 50 <= 50
```

## Boolean Logic (Harder)
### Look at the code involving logical operators and evaluate the output. Your answers should be either `true` or `false`.
5. 
```javascript
var A = true
var B = true 
!(A || B) == !A && !B
```
6. 
```javascript
!true || !true || true && true && !true
```
7.
```javascript
var A = true 
var B = false
var C = false 
var D = true
((A || B) && (C || D)) == ((A || B) && C) || ((A || B) && D)
```
8. 
```javascript
var x = false
var y = false 
var z = false
x && z || !x && y || z || y == x && z || !x && y
```

## If statements and Arithmetic Operators: 
9. What is the value of `d` ?
```javascript
var a = 50
var b = a + a
var c = b * b + 1
var d = c % 2
```
10. What is the value of `grade` ? 
```javascript
var marks = 1967
marks = marks % 100
var grade
if(marks > 90){
  grade = 'A'
}
else if(marks > 80 && marks <= 90){
  grade = 'B'
}
else if(marks > 70 && marks <= 80){
  grade = 'C'
}
else if(marks > 60 && marks <= 70){
  grade = 'D'
}
else{
  grade = 'F'
}
```

11. What does the following code print in the `alert` window?  
```javascript
var browser = 'Brave'
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
```
12. What is the value of y?
```javascript
var x = 12 
var y = 12 + "12"
```
 