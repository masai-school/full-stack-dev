import React from 'react';
import ReactDOM from 'react-dom';
import SimpleList from './SimpleList.js'

class App extends React.Component{
	render(){
		return (
			<div>
				<h1>Shopping List</h1>
				<SimpleList />
				<SimpleList />
			</div>
		);
	}
}

export default App