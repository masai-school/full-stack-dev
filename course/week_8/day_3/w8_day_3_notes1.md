# Week 8 - Day 3

## Introduction to ReactJS Part 6

## Handling lists/arrays in ReactJS

React makes it very easy to transform arrays into components. 

Moreover JSX renders an array of components/elements just like any other element.

**Example:** [https://codepen.io/gaearon/pen/GjPyQr?editors=0011](https://codepen.io/gaearon/pen/GjPyQr?editors=0011)

It is commonplace to pass arrays as props to a child element and use map to render the children. 

You might have noticed a warming in the console, this is because we have not included keys. 

## Importance of keys

React uses keys to identify elements. React needs to be aware of all elements that are added, removed or modified. 

When you pass a list of elements is very important to give each element a **unique key**. You must do this manually. 

This key **must not** be the index of the element. 

**Example where elements values are used as keys:**

[https://codepen.io/gaearon/pen/jrXYRR?editors=0011](https://codepen.io/gaearon/pen/jrXYRR?editors=0011)


Here is a great article on why index should not be used as the key [https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318).

If you want to know why react needs to use key read this [https://reactjs.org/docs/reconciliation.html#recursing-on-children](https://reactjs.org/docs/reconciliation.html#recursing-on-children).

## Rules of keys

**Keys should be used with correct context:**

When rendering child elements, keys should be applied from the parent, not the child. 

**Incorrect:**

```jsx
function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Wrong! The key should have been specified here:
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

**Correct:**
```javascript
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

**CodePen:** [https://codepen.io/gaearon/pen/ZXeOGM?editors=0010](https://codepen.io/gaearon/pen/ZXeOGM?editors=0010)

**Keys only need to be unique among siblings:**

Key are just used by react to differentiate between siblings, therefore keys just need to be unique among siblings. They can be non-unique globally. 

**CodePen:** [https://codepen.io/gaearon/pen/NRZYGN?editors=0010](https://codepen.io/gaearon/pen/NRZYGN?editors=0010)

**Keys are not passed to components:**

Keys are not passed as props to your component, if you need to identify components you create, you can pass another prop with a different name but with the same keys. 

**Example:**

```jsx
const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
```
Here id is passed as a key and as a prop called `id`. They both use `post.id` but only `id` is available to the Post component as props. 

### Embedding `map()` in to JSX

Since `map()` is a valid JavaScript expression you can also embed `map()` right into JSX. 

**CodePen:** [https://codepen.io/steviekong/pen/YmNaGe?editors=0010](https://codepen.io/steviekong/pen/YmNaGe?editors=0010)

## Communicating from child component to parent component

We have already learned how to share data and even `state` from parent to child component using `props`. 

However it may often be useful to share state updates of child components with parent components. 

This is especially useful when you have several components who need to reflect the same changing data. 

**How do we do this?**

In short we pass functions as props. 

For a longer answer read this [https://reactjs.org/docs/lifting-state-up.html](https://reactjs.org/docs/lifting-state-up.html).

Lets take a look an a simple example to start out with:

In the example below the `SearchBar` calls a function when the form `onSubmit` event occurs. 

The function it calls is passed as props from the parent Component.

**CodePen:** [https://codepen.io/steviekong/pen/VopopE?editors=0011](https://codepen.io/steviekong/pen/VopopE?editors=0011)

You can even user this value to set state in the parent. 

Here is a great example of setting state and passing values between sibling components [https://codepen.io/gaearon/pen/WZpxpz?editors=0010](https://codepen.io/gaearon/pen/WZpxpz?editors=0010).

Also read [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html) from the official docs. 



 