# Week 4 - Day 3

#### Coding Session 1

**SUBMISSION:**

- Pull the `cohort_1` repo
- Go to `practise/week_4/day_3/session1` 
- Copy  the file called `firstname_lastname.html`
- Complete all the problems given below in the `firstname_lastname.html` file.
- Push the file `firstname_lastname.html` with your first name and last name back to the online repo.

**JavaScript (Part 8)**

**NOTE:** Follow the instructions carefully and follow coding discipline

**NOTE2:** Indent your code correctly and stick to one kind of naming style

**NOTE3:** You have only been given a basic HTML file. YOU MUST FILL`id` and other basic attributes for all tags! You must also define your own JavaScript Functions!  

**NOTE4:** Only attempt the bonus questions once you have pushed the regular questions.


### FSD.W4.3.1_1

A button with the text `Click here to print the JSON object` is given to you.

An variable `items` is given to you. It contains an array of Objects.

A div with `id="container1` is given to you.

**Using JavaScript do the following:**

1. When the button is clicked, you must convert a given array value from `object` to `JSON`. 
2. You must then create `p` tags and display the `name` and `price` of each object within the `p` tag you created. You must not display the value of the `id` key!
3. Append the `p` tags to the div with `id="container1`.

### FSD.W4.3.1_2

2 input elements are given to you. 

A `p` tag with the text `Output:` is given to you

A button with the text `Calculate` is given to You. 

**Using JavaScript do the following:**

1. Create a function with the name `exponent`. It must have 3 arguments `x` `y` `callBack`. `X` and `Y` are of type `number`. `callBack` of type `function`.
2. It must calculate the result of `x ** y` and pass that value to `callBack` after calculating that value.
3. Write a function expression (also known as a function as a variable) called `display`. It must accept a single argument `input`. It must append the string `The exponent is:` to the start of the input. It must return the appended string.  
**Example:**
```
display(9) -> "The exponent is: 9"
```
4. When the button is clicked, you must call the function `exponent` with the appropriate inputs from the input elements for `x` and `y` from the input boxes. You must also pass the `display` function as the `callback` argument. Store the output in a variable.
5. Print the output to a `p` tag with the text `Output:`.  
6. Step 4 and 5 should be done by an anonymous function passed to the button listener.
### FSD.W4.2.2_3 (Bonus question but I highly encourage you to finish this!)

**Solve the HackerRank problem given below:**

You are ***not*** allowed to use `for` or `while` loops! You can only use Array functions that accept functions/callbacks as arguments like `array.forEach` `array.map` etc.

[https://www.hackerrank.com/challenges/arrays-ds/problem](https://www.hackerrank.com/challenges/arrays-ds/problem)


