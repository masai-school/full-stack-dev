import React from "react";

export default class Search extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			lat : "",
			lon : ""
		}
	}

	handleInput = event => this.setState({[event.target.name] : event.target.value})

	render(){
		return (
			<React.Fragment>
				<input type = "text" onChange = {this.handleInput} name = "lat" value = {this.state.lat}/>
				<input type = "text" onChange = {this.handleInput} name = "lon" value = {this.state.lon}/>
				<button 
					onClick = {() => this.props.handleSearch(this.state.lat, this.state.lon)}> 
					Search
				</button> 
			</React.Fragment>
		);
	}
}