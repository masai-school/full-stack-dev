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