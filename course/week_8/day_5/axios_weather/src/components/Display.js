import React from "react";
import axios from "axios"

export default class Display extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name : null,
			temp : null,
			icon : null
		}
	}

	componentDidMount(){
		axios({
			method: 'get',
    		url: 'https://fcc-weather-api.glitch.me/api/current',
    		params : {
        		lat : this.props.lat,
        		lon : this.props.lon
    		}
		})
		.then((response) =>{
			this.setState({
				temp: response.data.main.temp,
				name : response.data.name,
				icon : response.data.weather[0].icon
			});	
		})
		.catch((err) => alert(err))
	}

	componentDidUpdate(prevProps){
		if(this.props.lat !== prevProps.lat){
			console.log(this.props.lat, this.props.lon)
			axios({
				method: 'get',
	    		url: 'https://fcc-weather-api.glitch.me/api/current',
	    		params : {
	        		lat : this.props.lat,
	        		lon : this.props.lon
	    		}
			})
			.then((response) =>{
				this.setState({
					temp: response.data.main.temp,
					name : response.data.name,
					icon : response.data.weather[0].icon
				});	
			})
			.catch((err) => alert(err))
		}
	}
	
	render(){
		return(
			<React.Fragment>
				 <div style = {{border : "1px solid black"}}>
				 	<div> City : {this.state.name} </div>
				 	<div> Temprature : {this.state.temp} </div> 
				 	<img src = {this.state.icon} alt = "weather icon" />
				 </div> 
			</React.Fragment>
		);
	}
}
