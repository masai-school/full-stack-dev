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
				<img src = "/computer.jpg" height = "50%" width = "50%" />
			</div>
		);
	}
}

export default App