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

Your Final `Movie` class should contain the following properties:

1.Name (string)
2.Directors(Array of strings)
3.Year (number)
4. Rating (number)
5. Writers (array of strings)

Your final `Movie` class should contain the following functions/methods:

1. printMovie() -> Returns a string with all the above movie properties with newlines separating each property. 

Example: 

```
Name : Avengers
Directors: Adam Johnson, Christopher Nolan
Year: 2010 
Rating: 8.8
Writers: Chirstopher Nolan, Adam Johnson
```


1. Create a class for the movie input form above called `Movie`. It must have the relevant properties from the form given above.
2. Directors, writers should be an array of strings. The input will be comma separated so use the `string.split` function.
3. Create a function in this class called `printMovie` which returns a `string` with all the properties of the `Movie` class in a presentable way.  
4. Create a global array for all movies called `moviesArr`.
5. When the submit button is clicked, a new `Movie` object must be created with properties from the form and added to the `moviesArr` array.
6. When the `Print all movies` you must display all the movies in the `moviesArr` on the webPage using the `printMovie` function. 

**NOTE:** The `Actor` objects properties are given in FSD.W6.1.1_3.

### FSD.W6.1.1_3

1. Create a form with the following Inputs:
    - Name
    - Age
    - DOB
    - Movie
    
2. Give the form a submit input button. (This cannot be a button outside the form, it must be an input of type "submit")

3. Give your form the title `Add new Actor`

4. Add a button called `Print Actor Movies`

5. Add an input with the label `Actor Name`

6. Add a button called `Print All Actors`

### FSD.W6.1.1_4

**Using JavaScript do the following:**

1. Create a class for the actor input called `Actor`. It must have the relevant properties from the form given above.
2. The `Actors` class must extend the `Movies` class. 
3. Add a function in the `Actor` class called `checkMovies(arr)` which checks if the actor has appeared in any of the movies in the `arr` argument and returns that `Movie` object they have acted in.
4. Create a global array called `actorArr` to store new `Actor` objects in.
4. When the submit button is clicked, a new `Actor` object must be created with properties from the form. 
5. You must then check if the actor has acted in any movies from the `moviesArr`. If they have, then add that `Movie` objects properties to the new `Actor` object you just created. If they have not acted in any movies from the `moviesArr` then print an error on the webpage with the text `Error: Actor named <Name of Actor> has not acted in any movies from the DataBase!` where <Name of Actor> is the given actors name.  
Note: An actor may have acted in multiple movies.
6. When the `Print All Actors` button is clicked you must print all the `Actor` objects within the `actorArr` onto the html page. You can create a funciton within each actor object to do this.
7. When the `Print Actor Movies` button is clicked, you must print all the movie objects an Actor has acted in. The name of the Actor will be in the input box with the label `Actor Name` that you created before.

Additional Hints:

**Example of a movie object**

```javascript
let myMovie = new Movie (
    name : "Avengers",
    directors: ["Adam Johnson", "Christopher Nolan"]
    year: 2010,
    rating: 8.8,
    writers: ["Chirstopher Nolan", "Adam Johnson"]
)
```

**Example of Actor Object who's parent is the above object:**

```javascript
let myActor = new Actor(
    actorName: "Leonardo",
    Age: 44,
    DOB: "11.11.1974",
    name : "Avengers",
    directors: ["Adam Johnson", "Christopher Nolan"]
    year: 2010,
    rating: 8.8,
    writers: ["Chirstopher Nolan", "Adam Johnson"]
    )
```

As you can see myActor contains all the properties of the parent. These properties are derived from the `super`. However the values are not derived automatically, you must define these values when you create a `new` Actor object.

  
