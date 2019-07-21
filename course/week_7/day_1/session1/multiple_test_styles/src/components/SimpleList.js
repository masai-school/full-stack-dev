import React from 'react';
import ReactDOM from 'react-dom';
import styles from './simpleList.module.css'

class SimpleList extends React.Component{
	render(){
		return (
			<ol className = {styles.list}>
				<li>Apple</li>
				<li>Banana</li>
				<li>Watermelon</li>
			</ol>
		);
	}
}

export default SimpleList