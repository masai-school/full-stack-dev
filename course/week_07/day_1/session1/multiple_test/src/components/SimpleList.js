import React from 'react';
import ReactDOM from 'react-dom';

class SimpleList extends React.Component{
	render(){
		return (
			<ol>
				<li>Apple</li>
				<li>Banana</li>
				<li>Watermelon</li>
			</ol>
		);
	}
}

export default SimpleList