import React from "react";
import Display from "./Display.js";
import Search from "./Search.js"

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			lat : null,
			lon : null
		}
	}

	handleSearch = (lat, lon) => this.setState({
		lat : lat,
		lon : lon
	});
	render(){
		return(
			<React.Fragment>
				<Search handleSearch = {this.handleSearch}/>
				{this.state.lat !== null ? (<Display lat = {this.state.lat} lon = {this.state.lon}/>) : null}   
			</React.Fragment>
		);
	}
}
