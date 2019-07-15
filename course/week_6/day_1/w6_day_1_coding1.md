# Week 6 - Day 1

#### Coding Session 1

**SUBMISSION:**

- Pull the `cohort_1` repo
- Go to `practise/week_6/day_1/session1` 
- Make a folder called `firstname_lastname` with your own first name and last name. 
- Make a file called `index.html` and `index.js`.
- Once you are done with the coding session push that folder to the online repo. 


**JavaScript (Part 11)**

**NOTE:** Follow the instructions carefully and follow coding discipline

**NOTE2:** Indent your code correctly and stick to one kind of naming style

**NOTE3:** You have only been given a basic HTML file. YOU MUST FILL`id` `class` and other basic attributes for all tags! You must also define your own JavaScript Functions!  

**NOTE4:** You must not write any JavaScript code within the `html`file! ***All*** your JS must be in the `js` file! Use the script tag to link your JS file from your HTML file. 

**NOTE5:** You ***MUST*** use `let` and `const`, avoid using var. Use arrow functions where possible.

You overall goal here will be to create a `Movie` class and `Actor` class which derives properties and functions from the `Movie` class. 

### FSD.W6.1.1_1

**Using HTML do the following:**

1. Create a form with the following Inputs:
    - Name
    - Directors
    - Year
    - Rating
    - Writers
2. Give the form a submit input button. (This cannot be a button outside the form, it must be an input of type "submit")
3. Give your form the title `Add new Movie`
4. Add a button to the webpage with the text `Print all movies`

### FSD.W6.1.1_2

**Using JavaScript do the following:**

1. Create a class for the movie input form above called `Movie`. It must have the relevant properties from the form given above.
2. Directors, writers should be an array of strings. The input will be comma separated so use the `string.split` function.
3. Also add a property in your class constructor called `cast` which will be an array of objects.
4. Create a function in this class called `printMovie` which returns a `string` with all the properties of the `Movie` class in a presentable way.  
5. Create a function in the class called `addCastMember(input)` this should allow you to add a new cast member **object** to the `cast` array. `input` is the new `Actor`
6. Create a global array for all movies called `moviesArr`.
7. When the submit button is clicked, a new `Movie` object must be created with properties from the form and added to the `moviesArr` array.
8. When the `Print all movies` you must display all the movies in the `moviesArr` on the webPage using the `printMovie` function. 
9. The must also display each `Actor` object in a presentable way.

**NOTE:** The `Actor` objects properties are given in FSD.W6.1.1_3.

### FSD.W6.1.1_3

1. Create a form with the following Inputs:
    - Name
    - Age
    - DOB
    - Movies
2. Give the form a submit input button. (This cannot be a button outside the form, it must be an input of type "submit")

3. Give your form the title `Add new Actor`

4. Add a button called `Print Actor Movies`

5. Add an input with the label `Actor Name`

### FSD.W6.1.1_4

**Using JavaScript do the following:**

1. Create a class for the actor input called `Actor`. It must have the relevant properties from the form given above.
2. The `movies` property must be an array of Strings.
3. The `Actors` class must extend the `Movies` class. 
4. Add a function called `checkMovies(arr)` which checks if the actor has appeared in any of the movies in the `arr` argument and returns `true` if they have or `false` if they have not.
5. Add a function called `printActor` which returns a `string` with all the Actor properties in a presentable way.
6. When the submit button is clicked, a new `Actor` object must be created with properties from the form. 
7. You must then check if the actor has acted in any movies from the `moviesArr`. If they have, then add them to that `Movie` object's `casts` array. If they have not acted in any movies from the `moviesArr` then print an error on the webpage with the text `Error: Actor named <Name of Actor> has not acted in any movies from the DataBase!` where <Name of Actor> is the given actors name.  
Notes: An actor may have acted in multiple movies.
8. When the `Print Actor Movies` button is clicked, you must print all the movies an Actor has acted in. The name of the Actor will be in the input box with the label `Actor Name`.



  
