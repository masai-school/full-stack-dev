# Week 6 - Day 3

## Introduction to ReactJS Part 2

## Comments

You can add comments to JSX elements with the `{/* */}` syntax.

**Syntax:**

```
let jsx = (
    <div>
        {/* This is a comment. None of this code will be executed! */}
    </div>
);
```

## Components

Components are the building blocks of React. Everything you do in react has to do with components and interactions between components.

We can define react components with functions but for this tutorial we will only be using ES6 classes as they give us a lot of really useful functionality in react over regular JavaScript functions. 

Lets take a look at an example of a simple component. 

[https://codepen.io/steviekong/pen/YmKGZz](https://codepen.io/steviekong/pen/YmKGZz)

In the above example we created a simple class called `Header` which extends the `React.component` class. This is a component in React. 

Because `Header` is a child of the `React.component` class, it inherits several useful react properties like local state, life-cycle hooks and props. 

We will discuss some of these properties soon. 

Take a look at these two lines of code.

```jsx
const head = <Header />
          
ReactDOM.render(head, document.getElementById('root'))
```

`head` contains the JSX component that we created called `Header` and we render the component to the DOM using `ReactDOM.render`.

We could have also written it in this way:

```jsx
ReactDOM.render(<Header />, document.getElementById('root'))
```

The `Header` tag here is a **self-closing tag**, in JSX any element can be written with a self closing tag but all element in JSX ***must*** be closed. 

**Note:** All user defined components must be **Capitalized**!

**Correct**
```javascript
class Header extends React.Component
```

**Wrong**
```javascript 
class header extends React.Component
```


## Composing two or more Components together

You can also define multiple components and compose them together. 

This feature is core to react as you could make changes to one small component in react without affecting other components. 

[https://codepen.io/steviekong/pen/YmKNGj](https://codepen.io/steviekong/pen/YmKNGj)

In the above example I could make any changes to the parent or child components but all the changes are contained within that component.

This feature is especially useful when you have a large web-page with many dynamic elements. 

When you work with react you must work on breaking down each part of your webpage into small workable components.

## Classes in JSX 

JSX and HTML seem very similar but there are small differences. 

Since the keyword `class` is also present in JavaScript we cannot use it within JSX.

So in JSX we use `className` instead. 

**HTML:**
```html

<div class = "container">></div>
```

**JSX:**
```jsx
<div className = "container"></div>
```

This is the same for the `for` html attributes use in `<label>` elements. In JSX it is `htmlFor`.

Many html attributes need small changes to become JSX attributes. 

You can read about it here [https://reactjs.org/docs/dom-elements.html](https://reactjs.org/docs/dom-elements.html). Scroll to the button of the page to see the supported attributes.

In general most attributes are the same as their HTML counter part but in **camelCase**.

## In-line Styling in JSX

Applying styles in JSX are also a little different.

We apply styles using the style attribute but all the CSS properties must be in **camelCase**.

**HTML**

```html
<div style = "background-color: red;"></div>
```

**JSX**
```jsx
<div style={{backgroundColor: 'red'}}></div>
```
You might have noticed that we actually passed a object literal to the style attribiute!

This is because the style attribute actually accepts a regular JavaScript object literal to render css. 

**Example:**

```jsx
const myStyle = {
    color : 'blue',
    border: '5px solid yellow';
}
<div style = {myStyle}>Hello World!</div>
```

Lets see an example in codepen:

[https://codepen.io/steviekong/pen/OKLBgQ?editors=1000](https://codepen.io/steviekong/pen/OKLBgQ?editors=1000)

Notice how I defined the `headerStyle` object within the render function! This is completely fine in react as `render()` is just like any other JavaScript. 

**Note**: We want to avoid using in-line styles in react in general. We will learn how to link external css files after we start our react apps using npm. 

## Props

React components are very similar to functions at a conceptual level. Just like functions you can pass arbitrary inputs to components and then return react elements. 

Lets take a look at an example

[https://codepen.io/steviekong/pen/gVYWOR?editors=1000](https://codepen.io/steviekong/pen/gVYWOR?editors=1000)

Here we pass a `prop` called `username` to the `Header` component. 

The key idea behind props is to control the flow of information in react. 

Props is primary used as a system to pass information from parent components to child components. 

**Parent component --props(information)--> child component**

To see a good example of this lets build a small but useful component. 

Lets say we are building the comments section of a social network or blog. Each of the comment components are the same but, the information contained within them is different. 

So we can use props to pass information to the child element from the parent element.

[https://codepen.io/steviekong/pen/dxbQZK?editors=1000](https://codepen.io/steviekong/pen/dxbQZK?editors=1000)







 