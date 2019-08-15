# Week 10 - Day 2

#### Coding 1

**SUBMISSION:**

- Pull the `cohort_1` repo
- Go to `/practise/week_10/day_2/session1` . Create the folder structure if it does not exist. Make sure you follow this exact naming convention.
- Copy yesterdays project folder from `/practise/week_10/day_1/session1` into `/practise/week_10/day_2/session1`.
- Once you are done with the coding session create a new local branch called `firstname_lastname_week_10_day_2_coding1` with your first name and last name. Push this branch to the remote repo. Make sure you don't push the `node_modules` folder!
- Create a pull request for the branch you created with the Title `FirstName LastName Week 10 day 2 coding 1`. Add any relevant comments and the coding1 label to your pull request. Also make sure to add one of the instructors to review your pull request.


**Redux Part 2**

**NOTE:** Follow the instructions carefully and follow coding discipline.

**NOTE2:** Indent your code correctly and stick to one kind of naming style.

**NOTE3**: Commit your code to your remote branch regularly and meaningfully.(Don't commit to master!) This can help you manage your project during development in-case you need to return to any old code. 

**NOTE4**: No discussing anything about this coding session with other students. Copying code is strictly forbidden!

**NOTE5**: All shared state must come from the Redux store. You should not pass state as props nor should you pass callbacks to children that affect state. 

## Learning objectives:
- Basics of redux.
- Connecting Redux to React with React-React package.
- Learning the basics of React-Redux.

## Final Goal

The goal of this project is to create a simple calculator that contains a history of all the calculated values. 

## Minimum Viable Product

Your task today is to update yesterdays project with React components and React-Redux.

- [ ] Create an `<App>` component with `<Display>` , `<CalculatorInput>` and `<History >` components as its children.
- [ ] Display should display the `result`. You can use any tags you want to display this. 
- [ ] Calculator 1 input box of type text and it should also contain 4 buttons `+` `-` `*` `/`.
- [ ] History should display this history of results as an unordered list from `resultArray`.
- [ ] When one of the operations button is clicked, the program should perform that operation on the result and the input and then display the new result.  Eg: result = 5, input = 5, operation = '+', then new result = '10'. The history should also be updated with the new result. 
- [ ] Implement a `Clear` button that resets the result and the resultArray to their initial values, 0 and empty array respectively. You need to create a new action and update your reducer to do this.





    


