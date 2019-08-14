import { createStore } from 'redux';
import counter from './reducer';
import {incrementCounter, decrementCounter} from "./actions";

const store  = createStore(counter);

console.log(store.getState()); // Log the initial state

// This subscriber that logs the state to the console every time state changes
// The subsribe() function returns an function to also unsubscribe or unregister the listener

const logState = () =>{
	console.log(store.getState());
}

const unsubscribe = store.subscribe(logState);

//Here we dispatch actions to the store

//Here we use actions created by the action producers

store.dispatch(incrementCounter(10));
store.dispatch(incrementCounter(20));
store.dispatch(decrementCounter(5));
store.dispatch(decrementCounter(20));

//However we can also create actions manually since actions are just object literals
store.dispatch({
	type : "INC_COUNTER",
	amount : 100
});

unsubscribe() // Now we can stop listening for state updates 



