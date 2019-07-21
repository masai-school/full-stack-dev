import React from 'react';
import ReactDOM from 'react-dom';
import SimpleList from './SimpleList.js'
import styles from './app.module.css'

class App extends React.Component{
	render(){
		return (
			<div>
				<h1 className = {styles.header} >Shopping List</h1>
				<SimpleList />
				<SimpleList />
			</div>
		);
	}
}

export default App