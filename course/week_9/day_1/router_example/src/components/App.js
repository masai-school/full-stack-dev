import React from 'react';
import {Route, Link} from 'react-router-dom';
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact'


const CourseTemplate = () =>{
	return(
		<React.Fragment>
            <h1> Courses </h1>
            <ol>
                <li><Link to="/courses/fullstack"> Full-Stack Development </Link></li>
                <li><Link to="/courses/android"> Android Development</Link></li>
            </ol>
            <Route path = "/courses/fullstack" render = {() => <Course name = "fullstack" /> } />
            <Route path = "/courses/android" render  = {() => <Course name = "android" />} />
        </React.Fragment>
	);

}

const Course = (props) =>{
	if(props.name == "fullstack"){
        return(
            <React.Fragment>
                <h1> FullStack Development </h1>
                <h3> What you will learn: </h3>
                <ul>
                    <li> HTML </li>
                    <li> CSS  </li>
                    <li> JavaScript </li>
                </ul>
                <Link to = "/courses/fullstack/price">Price</Link>
                <Route path = '/courses/fullstack/price' render = {() => {
                	return (
                		<React.Fragment>
                			<p> Price is $0 </p>
                		</React.Fragment>
                	);
                }} />
            </React.Fragment>
        );
    }
    if(props.name == "android"){
        return(
            <React.Fragment>
                <h1> Android Development </h1>
                <h3> What you will learn: </h3>
                <ul>
                    <li> Java </li>
                    <li> Kotlin </li>
                    <li> Android Studio </li>
                </ul>
            </React.Fragment>
        );
    }
}

export default class App extends React.Component{
	render(){
		return (
			<React.Fragment>
				<h1> Masai School Blog </h1>
				<div>
					<Link to = "/">Home</Link><br/>
					<Link to = "/about">About</Link><br/>
					<Link to="/contact">Contact</Link><br />
                    <Link to="/courses">Courses</Link>
				</div>
				<Route path = '/' exact component = {Home} />	
				<Route path = '/about' component = {About} />
				<Route path = '/contact' component = {Contact} />
				<Route path = '/courses' component = {CourseTemplate} />
			</React.Fragment>
		);
	}
}