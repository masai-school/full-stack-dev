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
