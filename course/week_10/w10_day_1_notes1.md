# Week 10 Day 1

### Introduction to Redux

**What is redux?**  

Redux is a preditable state container for ***any*** JavaScript application. For our purpose we are going to use Redux to manage a React Applicaiton. 


However, Redux has nothing to do with React JS, you can write applications that use Redux in plain JavaScript and direct DOM updates. Redux can also be used with any Front End or Backend framework like AngularJS, EmberJS, VueJS etc. 

**Why should my application use Redux?**

You may have noticed that writing large applications in plain react can become needlessly complicated. 

Take the example of a simple todo App:

<img src="todo.png"/>

Now lets look at the flow of data in the Todo App:

<img src = "todo_data.png" />

We can already see that managing state is already getting very complicated. Even though we are working with a very simple array of obejcts that needs to get updated. 

The problem is componded by the fact that in order to pass state updates from a child component, you must pass it through a callback to a parent. 

