import { createStore } from 'redux';
import counter from './reducer';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

import { Provider } from 'react-redux'; // Here we import the provider component

const store  = createStore(counter);

ReactDOM.render(
	<Provider store = {store} >
		<App />
	</Provider>,
	document.getElementById('root')
);



