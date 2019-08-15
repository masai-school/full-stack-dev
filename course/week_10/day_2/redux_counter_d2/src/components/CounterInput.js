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