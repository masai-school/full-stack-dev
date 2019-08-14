# Week 7 - Day 1

#### Coding Session 1

**SUBMISSION:**

- Pull the `cohort_1` repo
- Go to `practise/week_7/day_1/session1` 
- Make a react app with the name `firstname_lastname` with your first name and last name  
- Once you are done with the coding session create a new local branch called `firstname_lastname_week_7_day_1_session1` with your first name and last name. Push this branch to the remote repo. 
- Create a pull request for the branch you created with the Title `FirstName LastName Week 7 Day 1 Coding Session 1`. Add any relevant comments and an the coding1 label. If you have not completed it, add the Pending label. 

**React (Part 3)**

**NOTE:** Follow the instructions carefully and follow coding discipline

**NOTE2:** Indent your code correctly and stick to one kind of naming style

**NOTE3:** All components must be in different files and within a `Components`folder. CSS can be shared between components if desired. 

**NOTE4:** All static files like images must be in the public folder.

Within the react App delete all files from the src folder and create your own files!

### FSD.W7.1.1_1

1. Write a component called `UserProfile`.
2. It should look like this. You don't need to add the css right now. You also don't need to add the list of skills yet.

<img src = "profile.png" height = "50%" width = "50%" />

### FSD.W7.1.1_2
1. Create another component called `GenericList`. 
2. It should contain an unordered list of 5 items. The text content of each list item must come from props. 
3. Modify the `Userprofile` to contain 1 `GenericList` component. It should be a list of skills. 
4. The list must contain 5 skills. 

### FSD.W7.1.1_3
1. Write a component called `ProfileContainer`.
2. It must contain the following:
 - Header tag with the text `Profiles`
 - 5 `UserProfile` components with different content. 
 - All images should be differnt, but please use copyright free images!
3. The content of all the user profiles must come from props passed to each UserProfile component.
4. Create an `App` component that returns just the the `ProfileContainer`.
5. Render the `App` component to the DOM. 


### FSD.W7.4.1_4

If you have not done it already, add in-line css to the components you made above to make it look nice! You can use any css you want including CSS grids!


