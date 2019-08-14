# Week 8 - Day 1

## Introduction to ReactJS Part 5

## LifeCycle of a Component

Any react component that extends `React.Component` almost like a living organism will go through the following phases in its lifetime:

1. Mounting
2. Updating
3. Unmounting


Lets go though each phase in-depth:

1. Mounting: This is the phase when a component is created and inserted into the DOM.
When this happens the following methods are called in same order as below:

    - `constructor`: [https://reactjs.org/docs/react-component.html#constructor](https://reactjs.org/docs/react-component.html#constructor)
    - `getDerivedStateFromProps`: [https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
    - `render`:  [https://reactjs.org/docs/react-component.html#render](https://reactjs.org/docs/react-component.html#render)
    - `componentDidMount()`: This is a `lifecycle` method that is called right after a component is **mounted** or rendered. We can use this method to modify state right after a component is rendered to the DOM using `setState`. [https://reactjs.org/docs/react-component.html#componentdidmount](https://reactjs.org/docs/react-component.html#componentdidmount)
2. Updating: After the react component has been mounted, it can then recieve new updates through new props being sent by parents or from updating the state.
When this happens the following methods are called in the same order as below:

    - `static getDerivedStateFromProps()`: [https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
    - `shouldComponentUpdate()`: [https://reactjs.org/docs/react-component.html#shouldcomponentupdate](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)
    - `render()`: This is the same render method as before.
    - `getSnapshotBeforeUpdate()`: [https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate](https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)
    - `componentDidUpdate()`: This method is called right after a component updates. This method is usually used to perform DOM operations when a component has been updated. [https://reactjs.org/docs/react-component.html#componentdidupdate](https://reactjs.org/docs/react-component.html#componentdidupdate)
3. Unmounting: This is the pahse when a component is not needed anymore and has been unmounted from the DOM. It only contains one method:
    - `componentWillUnmount()`: This method is called right before a component is unmounted or destroyed. [https://reactjs.org/docs/react-component.html#componentwillunmount](https://reactjs.org/docs/react-component.html#componentwillunmount)

If that was too confusing, here is a simple graphic:

[http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

While there are many lifecycle methods the most important one's you should be focusing on are:

- `constructor()`
- `render()`
- `componentDidMount()`
- `componentDidUpdate()`
- `componentWillUnmount()`

The rest are not as commonly used but can provide additional functionality when required.


Lets take a look at a simple example to see how these methods are executed during the lifecycle of a component:

**CodePen Link:** [https://codepen.io/steviekong/pen/LwbvoY?editors=0011](https://codepen.io/steviekong/pen/LwbvoY?editors=0011)

Lets better understand these lifecycle methods by doing an example:

Remember in the first tutorial we made a `Clock` that called `ReactDOM.render` multiple times? 

We are going to rewrite that code using the lifecycle methods we learned above. 

**CodePen Link:** [https://codepen.io/steviekong/pen/wVoZJz?editors=1010](https://codepen.io/steviekong/pen/wVoZJz?editors=1010)

## Conditional Rendering:

Often you will want to render components based on a condition. This can easily be done in react by using a conditional `if` within the render function.

**Example:** 

[https://codepen.io/steviekong/pen/RXozRB?editors=1011](https://codepen.io/steviekong/pen/RXozRB?editors=1011)

You can also embed javascript expressions within JSX to perform conditional rendering.

**Example:**
[https://codepen.io/gaearon/pen/ozJddz?editors=0010](https://codepen.io/gaearon/pen/ozJddz?editors=0010)

**Using the conditional(ternary) operator:**

The conditional operator is often used as a shorthand for the if statement. 

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

This can be really useful in react for in-line conditional rendering.
Here is the login button example with the conditional operator.

**Example:**
[https://codepen.io/steviekong/pen/MNbMPJ](https://codepen.io/steviekong/pen/MNbMPJ)

**Preventing components from rendering:**

Sometimes you may want to hide or delete components after rendering it. 

To do this return `null` instead of any JSX in the render function. 

**Example:**

[https://codepen.io/gaearon/pen/Xjoqwm?editors=0010](https://codepen.io/gaearon/pen/Xjoqwm?editors=0010)

## Using setInterval the right way using `componentWillUnmount`

An great use-case for `componentWillUnmount` is the following example.

Here's the right way to do this:

[https://codepen.io/peterbe/pen/LNxmRp?editors=0010](https://codepen.io/peterbe/pen/LNxmRp?editors=0010)

Here's the wrong way to do this:

[https://codepen.io/peterbe/pen/VaPXNL?editors=1010](https://codepen.io/peterbe/pen/VaPXNL?editors=1010)