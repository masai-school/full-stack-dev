// These are our import statements
import React from 'react';
import ReactDOM from 'react-dom';

//Create a React Compoenent
const App = () =>{
	return <h1>Hello world</h1>;
};

//Render it to the DOM
ReactDOM.render(
	<App />, 
	document.getElementById('root')
);