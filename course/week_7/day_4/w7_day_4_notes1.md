  # Week 7 - Day 1

## Introduction to ReactJS Part 4

## Stateful components

Lets get to learning something new. 

The components we were making so far were called `stateless` components as they did not have any `state`. 

But what is state? How do we use it? Where do we use it ? Why is it useful ?

These are important questions to consider so lets answer them by working through a few examples.

Consider the following stateless component:

```jsx
class Profile extends React.Component{
  render(){
    return (
      <div>
        <h1>Profile</h1>
        <p>Name: Patrick</p>
        <p>Age: 21</p>
        <p>Gender: Male</p>
      </div>
    );
  }
}

ReactDOM.render(<Profile />, document.querySelector('#root'))
```

Now lets add state to it:

```jsx
class Profile extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {      //This is the state.
      name : "Patrick",
      age : 21,
      gender: "Male"
    }
  }
  render(){
    return (
      <div>
        <h1>Profile</h1>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <p>Gender: {this.state.gender}</p>
      </div>
    );
  }
}

ReactDOM.render(<Profile />, document.querySelector('#root'))
```

Now we have a stateful component as it contains `this.state` in the constructor. 

Codepen link [https://codepen.io/steviekong/pen/xvwgbv?editors=1010](https://codepen.io/steviekong/pen/xvwgbv?editors=1010).

Right now state seems to work just like props but state is very different from props.

Before we continue with state lets learn about event handlers.

## Handling events in React

You handle events in react much the same way as in regular javaScript. 

```jsx
class SimpleComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      printValue : "clicked"
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.state.printValue);
  }
  render(){
    return (
      <button onClick = {this.handleClick}>Click here to print to the console</button>
    );
  }
}

ReactDOM.render(<SimpleComponent />, document.querySelector('#root'))
```

CodePen Example: [https://codepen.io/steviekong/pen/PMPmPo?editors=1011](https://codepen.io/steviekong/pen/PMPmPo?editors=1011)

When you look the code above an obvious question is why are we doing `this.handleClick = this.handleClick.bind(this);` ? 

Remember that regular ES5 functions have their own `this`. So when we call `this.state` within that function, `this` will refer to the function itself. 

So we use the `bind` function which allows us to change the `this` value of the given function. We change it to refer to the class `SimpleComponent`

You can read more about the `bind` function here [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind).

If you are not a big fan of using `bind`, you can simply use arrow function which do not have a `this` value so you don't have to bind a new `this` value to it.

**Example with arrow functions:**

```jsx
class SimpleComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      printValue : "clicked"
    }
  }
  handleClick = () => {
    console.log(this.state.printValue);
  }
  render(){
    return (
      <button onClick = {this.handleClick}>Click here to print to the console</button>
    );
  }
}

ReactDOM.render(<SimpleComponent />, document.querySelector('#root'))
```

CodePen: [https://codepen.io/steviekong/pen/QejMEX](https://codepen.io/steviekong/pen/QejMEX)

**Using the Event Object:**

You can also use `event.target` property from functions called by events to extract values or other properties from elements. 

**For example:**

[https://codepen.io/steviekong/pen/KOVBGx?editors=1010](https://codepen.io/steviekong/pen/KOVBGx?editors=1010)

The above example really highlights the power of combining events and state. Without having to directly manipulate the DOM, we can instead focus on implementing the core of our application, rather than worrying about JavaScript bugs.

## Updating state

Now we know how to make a stateful component and add event listeners!

Lets combine both to update a components state!

We use the `this.setState` function to change the state of a component. 

**Important:** Never directly modify the `this.state` object! This will not modify state or will produce errors!

Codepen Example: [https://codepen.io/steviekong/pen/OKyjvG?editors=1010](https://codepen.io/steviekong/pen/OKyjvG?editors=1010)

Every time the button is clicked, the state is updated using the `setState` function.

**Some basic information about state:**
1. State can only be used within class components.(For the most part, we will come back to this later).
2. State is just an object literal but it has special meaning to the React.Component class. 
3. When you call `setState` and change any state value, react will automatically re-render it. 
4. Component state must be initialized when a component is created. 

**Some advanced information about state:**

**1. State updates may be Asynchronous:**

For performance reasons React might batch multiple `setState()` calls into a single update. 

Due to this, it may not be ideal to rely on the current value of `this.props` and `this.state` to calculate the next state of your component.

However to fix this, `setState()` can also accept a callback function as an argument in which we can pass the current state and props.

CodePen Example: [https://codepen.io/steviekong/pen/bXERGq?editors=1010](https://codepen.io/steviekong/pen/bXERGq?editors=1010)

**2. State Updates are merged**

When you update one state value, others remain the same. For example your state may contain several variables. 

```javascript
  constructor(props) {
    super(props);
    this.state = {
      counter : 0,
      names : ["masai" , "school"]
    };
  }
```
You can then update them independently:

Codepen Example: [https://codepen.io/steviekong/pen/GVoEqq?editors=1010]( https://codepen.io/steviekong/pen/GVoEqq?editors=1010)

For more on `setState` read the official docs [https://reactjs.org/docs/react-component.html#setstate](https://reactjs.org/docs/react-component.html#setstate)

**3. State flows down**

Parent and child components do not know whether if a certain component is stateful or not. 

Unlike props, state is scoped locally which means it cannot be accessed by any other component. 

***However, state can be passed as props from a parent component to its children.***

```jsx
<Child name = {this.state.name} /> 
```

Here the `name` value from state is being passed down to a child component as props. 

Within the context of a child component, it would not know where the props came from. 

Moreover, any state updates from the parent will then also apply to the child who inherits that state. 

## Some cool examples:

I encourage you to check out some amazing projects created with React here [https://reactjs.org/community/examples.html](https://reactjs.org/community/examples.html)





