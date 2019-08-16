# Week 10 Day 2

## Integrating Redux to React and React-Redux

Yesterday we made a simple counter application whose state was stored with Redux.

Now we need to add some react components who's state is controlled through Redux.

First install the **React-Redux** package with the command `npm install react-redux`.

You can see the documentation for the above library here [https://react-redux.js.org](https://react-redux.js.org).

### The provider component

First we need to link our redux store with the react app. 

React-Redux gives us a `<Provider>` component that makes our store available to any components nested below it. 


We can add the provider to the `index.js` file by rendering it as a parent of our `<App>` component. 

We also have to pass the store as props to the provider.

`index.js`

```jsx
import { createStore } from 'redux';
import counter from './reducer';
import {incrementCounter, decrementCounter} from "./actions";

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

import { Provider } from 'react-redux'; // Here we import the provider component

const store  = createStore(counter);

ReactDOM.render(
    <Provider store = {store} > // The provider is rendered first with the store passed as a prop
        <App /> //App is a child of the provider component
    </Provider>,
    document.getElementById('root')
);
```

Next we need to write the code for our `<App>` component and its children, `<Display>`, and `<CounterInput>`.

Display will display the current value of the counter and CounterInput will render 2 buttons and an input box which can be used to increment and decrement the counter.

Code for `App.js`:

```jsx
import React from 'react';
import Display from './Display';
import CounterInput from './CounterInput'

export default class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1> Counter Application with React and Redux </h1> 
                <Display/>
                <CounterInput/>
            </React.Fragment>
        );
    }
}
```

Code for `Display.js`:

```jsx
import React from 'react';

export default class Display extends React.Component{
    render(){
        return(
            <p> Counter : </p>
        );
    }
}
```

Code for `CounterInput.js`:

```jsx
import React from 'react';

export default class CounterInput extends React.Component{
    render(){
        return(
            <span>
                <label htmlFor = "amount"> Amount: </label>
                <input type = "text" /> 

                <button> Increment </button>
                <button> Decrement </button>
            </span>
        );
    }
}
```

### Using the connect function

Now we have a some components rendered to the DOM but they don't do anything. 

First we need to display the default `state.counter` in the display component. 

To get the state from Redux we need to use the `connect` function from React-Redux to connect our component to the store. 

You can read the documentation for the connect function here [https://react-redux.js.org/api/connect](https://react-redux.js.org/api/connect).

Lets connect the display to the store:

Display.js

```jsx
import React from 'react';
import {connect} from 'react-redux';

class Display extends React.Component{
    render(){
        return(
            <p> Counter : </p>
        );
    }
}


export default connect()(Display)
```
Notice how we export the connect function not the Display component directly.

### Extracting state data with the `mapStateToProps` function

Now to get the state we need to request the data that we need from the store.

We can request this data though the `mapStateToProps` function.

You can read the documentation here [https://react-redux.js.org/using-react-redux/connect-mapstate](https://react-redux.js.org/using-react-redux/connect-mapstate)

The `mapStateToProps` function can be named anything really but we name it mapStateToProps by convention. 

The function must return an object literal which contains the data that we want to use from the Redux state. The `mapStateToProps` does what it says really, it maps the Redux State to a components props.

Display.js

```jsx
import React from 'react';
import {connect} from 'react-redux';

class Display extends React.Component{
    render(){
        return(
            <p> Counter : {this.props.count} </p>
        );
    }
}

const mapStateToProps = state =>{
    return {
        count : state.count
    }
}


export default connect(mapStateToProps)(Display);
```

Finally we also render the state from the Display component as `this.props.count`.

**Important:** Whenever any state update occurs, the `mapStateToProps` will be called to fetch the new state. 

## Dispatching actions using `mapDispatchToProps`

Next we need to be able to use the actions we defined in the `<CounterInput>` component. 

First we import the actions from `actions.js`. Next we define a object literal that contains all of our actions. You could call it whatever you wanted, the documentation suggests calling it `actionCreators` or `mapDispatchToProps`.

You can read about `mapDispatchToProps` here [https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object](https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object).

After we define the actions in a object, we can then pass it to the connect function as the second argument. 

Finally we can dispatch these actions from buttons within our component when an `onClick` event occurs. 

CounterInput.js:

```jsx
import React from 'react';
import {incrementCounter, decrementCounter} from '../actions';
import {connect} from 'react-redux';

class CounterInput extends React.Component{
    render(){
        return(
            <span>
                <label htmlFor = "amount"> Amount: </label>
                <input type = "text" /> 

                <button onClick = {() => this.props.incrementCounter(5)}> Increment </button>
                <button onClick = {() => this.props.decrementCounter(5)}> Decrement </button>
            </span>
        );
    }
}

const actionCreators = {
    incrementCounter,
    decrementCounter
}

export default  connect(null, actionCreators)(CounterInput)
```

## Using local state along with redux

You may have noticed that in the above code, we called `incrementCounter(5)` and `decrementCounter(5)`. 

However, what we really want do is to increment and decrement based on the input number. 

To do this, we need a controlled input. The question now becomes, **where do i put the input box state?**

The answer is within the `CounterInput` component itself! If state does not need to be shared between components, it does not need to be in Redux. 

Moreover, it is recommended you store any state/data that is not shared between components locally. 

Now lets update the component with local state.

CounterInput.js:

```jsx
import React from 'react';
import {incrementCounter, decrementCounter} from '../actions';
import {connect} from 'react-redux';

class CounterInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input : ""
        }
    }
    render(){
        return(
            <span>
                <label htmlFor = "amount"> Amount: </label>
                <input type = "text" value = {this.state.input} onChange = {(e) => {
                    this.setState({
                        input : e.target.value
                    });
                }} /> 

                <button onClick = {() => this.props.incrementCounter(Number(this.state.input))}> Increment </button>
                <button onClick = {() => this.props.decrementCounter(Number(this.state.input))}> Decrement </button>
            </span>
        );
    }
}

const actionCreators = {
    incrementCounter,
    decrementCounter
}

export default  connect(null, actionCreators)(CounterInput) 
```

You can see the entire example project here [https://github.com/masai-school/full-stack-dev/tree/master/course/week_10/day_2/redux_counter_d2](https://github.com/masai-school/full-stack-dev/tree/master/course/week_10/day_2/redux_counter_d2)





