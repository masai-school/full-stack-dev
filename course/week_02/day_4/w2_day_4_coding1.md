# Week 2 - Day 4

#### Coding Session 1

**SUBMISSION:**

- Pull the `cohort_1` repo
- Go to `practise/week_2/day_4/session1` 
- Copy  the file called `firstname_lastname.html`
- Complete all the problems given below in the `firstname_lastname.html` file.
- Push the file `firstname_lastname.html` with your first name and last name back to the online repo.

**JavaScript (Part 3)**

**NOTE:** Follow the instructions carefully and follow coding discipline

**NOTE2:** Indent your code correctly and stick to one kind of naming style

**NOTE3:** You have only been given a basic html file. YOU MUST FILL`id` and other basic attributes for all tags!

### FSD.W2.4.1_1

Create your own exponentiation function!

You have been given 2 `input` elements named num1 and num2. num1 and num2 are used to input 2 numbers. 

In Javascript do the following:  

1. Create a basic multiplication function that accepts 2 arguments `a` and `b` and returns `a * b`.  

2. When the button `Click here to find the exponent!` is clicked, you must output the value of num1<sup>num2</sup> in the `p` tag.  

Example: If `num1 = 3` and  `num2=2`, your output is 3<sup>2</sup> = `9`.  

3. You cannot use the `**` operator.  
  
4. You also cannot use the `Math.pow` function. 

**Hint:** Use a loop!

### FSD.W2.4.1_2

Sum of multiples of 3 and 5.

In Javascript do the following: 

1. The text input determines the `limit` of your loop!

2. Write a loop from `i = 0` to the `limit`, including the limit. This can be a `for` loop or a `while` loop.

3. When the button is clicked you must output the sum of all the multiples of 3 and 5 in the output `p` tag.

Eg: if the `limit` is 30. The output should be `15 + 30 = 45`  

If the `limit` is 100. The output should be `15 + 30 + 45 + 60 + 75 + 90 = 315`  

If the `limit` is 150. The output should be `15 + 30 + 45 ... + 150 = 825`



### FSD.W2.4.1_2

Users are often tricky to deal with as they may do unexpected things!  

Your job as a programmer is to account for user inputs and handle them safely. 

In this task your user will input an email id. Your job is to check if it is a valid email id!

In Javascript do the following: 

1. The text input is for the users email id. 

2. An email id is valid if it is in the following format `abc@mail.com`. 

Examples of Valid Email Id's: `raj_kumar@gmail.com` `sid.rk@masaischool.com`

Examples of invalid Email Id's: `raj_kumargmail.com` (This one is missing the @ symbol) `sid.rk@.com` (This is missing the web address) `@mail.com` `aslidhas` (This one is completely invalid for obvious reasons)

3. If the email id is valid, output an `alert` with the text `Valid Email!`.  

4. If the email id is invalid, output an `alert` with the text `Invalid Email!`.

