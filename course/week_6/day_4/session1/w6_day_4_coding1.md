# Week 6 - Day 3

#### Coding Session 1

**SUBMISSION:**

- Pull the `cohort_1` repo
- Go to `practise/week_6/day_4/session1` 
- Make a folder called `firstname_lastname` with your own first name and last name.  
- Once you are done with the coding session push that folder to the online repo. 

**React (Part 1)**

**NOTE:** Follow the instructions carefully and follow coding discipline

**NOTE2:** Indent your code correctly and stick to one kind of naming style

**NOTE3:** You have to write all your code within the `script` tag in the html file. 

A template file called `template.html` is given to you here [https://github.com/masai-school/full-stack-dev/blob/master/course/week_6/day_3/session1/template.html]https://github.com/masai-school/full-stack-dev/blob/master/course/week_6/day_3/session1/template.html). 

### FSD.W6.4.1_1

1. Copy the template file and name it `firstname_lastname .html` with your own firstname and lastname.
2. Write a component called `UserProfile`.
3. Render this component to the DOM.

It should look like this. You don't need to add the css right now. 
<img src = "profile.png" height = "50%" width = "50%" />


### FSD.W6.4.1_2
1. Modify the `UserProfile` Component you made in the pervious step by replacing the content with props. Eg: `<h3>this.props.name</h3>`
2. Write a component called `ProfileContainer`.
3. It must contain the following:
 - Header tag with the name `Profiles`
 - 3 `UserProfile` components with different content.
4. Render all of this to the DOM. 

### FSD.W6.4.1_3
1. Create another component called `GenericList`. 
2. it should contain an unordered list of 5 items. The text content of each list item must come from props. 
3. Modify the `Userprofile` to contain 2 `GenericList` components. One should be a list of hobbies the other should be a list of favourite programming languages. This should be different for each user!
4. Render all of this to the DOM. 

### FSD.W6.4.1_4

If you have not done it already, add in-line css to the components you made above to make it look nice! You can use any css you want including grid!

Maybe even try and figure out how to use Bootstrap components and styles!

