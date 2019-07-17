# Week 6 - Day 3

## Introduction to ReactJS

**What is React Js?**

In short, React is a JavaScript library for building web interfaces. A library is a group of files that contains objects and functions/methods that collectively accomplish a useful task. 

You have already been using in-built libraries in JavaScript and React is just a library written by a third-party. 

React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

We will be closely following the ReactJS official docs available on [https://reactjs.org/](https://reactjs.org/)

## Getting started  

We will be doing most of our development on local JS files but all the examples will be on codepen.io

Lets write a simple hello world program. 

[https://codepen.io/steviekong/pen/PrrMXE?editors=1010](https://codepen.io/steviekong/pen/PrrMXE?editors=1010)

You might already recognize most of the html code.

Lets look at what is new:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
 <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```
Here we import the ReactJS libraries over the Internet through something called a CDN. 

Make sure you have these three lines in your `body` tag when you write any react applications in HTML files. 

```javascript
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```
`ReactDOM` is a global object provided by the React JS library. It contains a `render` functions that accepts 2 arguments.

The first argument is a **JSX** object and the second is the `HTML` container element onto which we are rendering the the `JSX` as a child.

When the `render` function is called it renders a react object into the DOM as a child of the `container` element. In this case the `container` is a `div` element with the `id` ***root***. 

## JSX

**What is JSX?**

In formal terms JSX is a preprocessor that adds XML or HTML syntax to Javascript. 
There are other preprocessors you could use but JSX and React go hand in hand so it is very easy to use the two of them. 

You could also write react without JSX but JSX makes react much more readable as it is visually similar to HTML and much easier to write. For more about react without JSX, read this [https://reactjs.org/docs/react-without-jsx.html](https://reactjs.org/docs/react-without-jsx.html).

JSX produces "Elements" which you can then render to the DOM.


**Lets try writing some JSX**

```javascript
const welcome = <h1>Welcome to Masai School</h1>
```
This is a simple JSX element store in the constant called `welcome`.

You can then render it by calling `ReactDOM.render`.

Take a look at the following example. 

[https://codepen.io/steviekong/pen/qzeEZe](https://codepen.io/steviekong/pen/qzeEZe)

**Lets write some larger JSX elements:**

[https://codepen.io/steviekong/pen/LKwxPd?editors=1000](https://codepen.io/steviekong/pen/LKwxPd?editors=1000)

Notice how we wrapped all the elements in a `div` tag. This is because JSX must return a single element. Several JSX elements who are siblings with no parent are invalid JSX and will not transpile. 

**Valid JSX:**

```html
<div>
<h1>Shopping Cart</h1>
<ul>
  <li>Apples</li>
  <li>Oranges</li>
  <li>Banana</li>
</ul>
</div>
```

**Invalid JSX:**

```html
<h1>Shopping Cart</h1>
<ul>
  <li>Apples</li>
  <li>Oranges</li>
  <li>Banana</li>
</ul>
```

**Embedding Expressions within JSX:**

You can also embed JavaScript expressions within JSX. We do this by wrapping the expressions within `{}` curly brackets. 

[https://codepen.io/steviekong/pen/pXMpqQ](https://codepen.io/steviekong/pen/pXMpqQ)

[https://codepen.io/steviekong/pen/pXMaJY?editors=1000](https://codepen.io/steviekong/pen/pXMaJY?editors=1000)

**JSX evaluates to a JavaScript Object:**

After the code compiles, JSX expressions become regular javascript objects. This means just like any other other object, you can store it inside variables, return it from functions, use it within if statements, for loops etc. 

[https://codepen.io/steviekong/pen/orKqXd?editors=1010](https://codepen.io/steviekong/pen/orKqXd?editors=1010)

**Updating Rendered Elements:**

React elements are immutable which means that once you create an element it cannot be changed in any way. However you can render element again to get different results. 

Here is an example from the react docs given here [https://reactjs.org/docs/rendering-elements.html](https://reactjs.org/docs/rendering-elements.html)

Here is that same example on codepen [https://codepen.io/steviekong/pen/bPXMPM](https://codepen.io/steviekong/pen/bPXMPM)

As you can see it calls the function to re-ender the `h2` element with new values each second.

If you inspect the element within the developer console, you can see that only that time string value within the `h2` element is being updated, not the whole DOM and not even the other text within the `h2` element. 

This is because React is smart and uses a [**Virtual DOM**](https://reactjs.org/docs/faq-internals.html) and a smart [**Reconciliation Algorithm**](https://reactjs.org/docs/reconciliation.html) to compare the difference and only perform the necessary changes to the DOM.

Lets look at a simple example with a pre-defined button. The DOM will render after the button is clicked.

[https://codepen.io/steviekong/pen/OeKENZ](https://codepen.io/steviekong/pen/OeKENZ)

**Note:** Most react applications will only call render once. In the next few classes we will learn about components and state which we will use to render the DOM in a much more powerful way.












