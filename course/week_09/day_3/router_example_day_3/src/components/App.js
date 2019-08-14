import React from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact'

const CourseTemplate = ({match}) =>{
	return(
		<React.Fragment>
            <h1> Courses </h1>
            <ol>
                <li><Link to={`${match.url}/fullstack`}> Full-Stack Development </Link></li>
                <li><Link to={`${match.url}/android`}> Android Development</Link></li>
            </ol>
            <Route path = {`${match.path}/fullstack`} render = {(props) => <Course {...props} name = "fullstack" /> } />
            <Route path = {`${match.path}/android`} render  = {(props) => <Course {...props} name = "android" />} />
        </React.Fragment>
	);

}

const Course = (props) =>{
    console.log(props);
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
                <Link to = {`${props.match.url}/price`}>Price</Link>
                <Route path = {`${props.match.path}/price`} render = {() => {
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


const productArr = [
        {
            name : "SmartPhone",
            price: 30,
            id : 1212
        },
        {
            name : "Watch",
            price : 20,
            id : 213213
        },
        {
            name : "Shirt",
            price : 50,
            id : 412421
        },
        {
            name : "Pants",
            price : 100,
            id : 23213
        },
        {
            name : "iphone",
            price: 100,
            id : 2323
        }
]

const AllProducts = (props) =>{
    let arr = [...props.productArr];
    if(props.match.params.order == "asc"){
        arr.sort((a, b) => a.price - b.price);
    }
    else if(props.match.params.order == "desc"){
        arr.sort((a, b) => b.price - a.price);
    }
    return (
        <React.Fragment>
            <h2> Products </h2>
            {props.match.params.order == "asc" ?
                <Link to = "desc"> Order By Descending Price</Link>:
                <Link to = "asc"> Order By Ascending Price</Link>
            }
            <div style = {{border : "1px solid black"}}>
                {arr.map(element =>{
                    return (
                        <div key = {element.id} style = {{border : "1px solid black"}}>
                            <p> Name : {element.name} </p>
                            <p> Price : {element.price} </p>
                            <Link to = {`product/${element.id}`}>Click to see product </Link>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
}

const Product = (props) =>{
    console.log(props)
    const productObj = productArr.find((element) => element.id == props.match.params.id)
    if(productObj){
        return(
            <React.Fragment>
                <div style = {{border : "1px solid black"}}>
                    <p> Name : {productObj.name} </p>
                    <p> Price : {productObj.price} </p>
                </div> 
            </React.Fragment>
        )
    }
    else{
        return(
            <React.Fragment>
                <h1> Product not found, invalid id </h1>
            </React.Fragment>
        );
    }
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate() {
    this.isAuthenticated = true;
  },
  signout() {
    this.isAuthenticated = false;
  }
};

const Admin = (props) => {
    return (
        <React.Fragment>
            <h1> This is the admin page with some confedential information </h1>
            <p> Number of sales : 2 </p>
            <p> Number of users : 100 </p>
            <button onClick = {() => fakeAuth.signout()} > Sign Out </button>
        </React.Fragment>
    );
}

const Login = (props) =>{
    return (
        <React.Fragment>
            <h1> This is the login page </h1>
            <button onClick = {() => fakeAuth.authenticate()} > Sign In </button>
        </React.Fragment>
    );
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
                    <Link to="/courses">Courses</Link><br />
                    <Link to = "/products/asc"> Products </Link><br />
                    <Link to = "/admin"> Admin </Link>
				</div>
                <Switch>
    				<Route path = '/' exact component = {Home} />	
    				<Route path = '/about' component = {About} />
    				<Route path = '/contact' component = {Contact} />
    				<Route path = '/courses' component = {CourseTemplate} />
                    <Route path = "/products/product/:id" render = {props => <Product {...props} />} />
                    <Route path = "/products/:order(asc|desc)" exact render = {props => {console.log(props)
                        return <AllProducts productArr = {productArr} {...props} /> }}/>
                    <Route path = "/admin" render = {props =>{
                        return fakeAuth.isAuthenticated ? 
                            <Admin {...props} /> :
                            <Redirect to = {{pathname : "/login", state: {from :props.location}}} />
                    }} />

                    <Route path = "/login" component = {Login} />
                    <Route render = {() => <h1> Error 404 not found </h1>} />
                </Switch>     
            </React.Fragment>
		);
	}
}