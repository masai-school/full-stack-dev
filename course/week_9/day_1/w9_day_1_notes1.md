# Week 9 - Day 1

## Introduction to Routing with react

While writing real applications, you won't just be writing single page apps. 

What I mean by this is that your application will have many different routes with different views.

A common example would be a social networking website where you will have different routes like:

- Login 
- Register
- Profile
- UserName
- Feed
- Explore


While there are many routing solutions for a react application, the most popular is `React Router`.

Within React Router nearly everything is a component which is really great since this is core to the react philosophy. 

React router also supports dynamic routing, we will talk about this great feature in a later class. 

Lastly react router allows our application to only make the required DOM changes without having to reload the entire application when we switch to a new route. 

Also take a look at the documentation [https://reacttraining.com/react-router/web/guides/quick-start](https://reacttraining.com/react-router/web/guides/quick-start)

## Writing our first React App with Routing

To add react router to any react app just install it with the following command

```
npm install react-router-dom
```

For this application we will implement 3 routes that you might encounter in any generic website:

1. Home
2. About
3. Contact


Each route will have it's own unique view.

For now, I will write app my code right into the App component:

**Index.js**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter> 
    ,document.getElementById('root'));


```

**App.js**

```
import React from 'react';
import {Route} from 'react-router-dom';


const Home = () =>{
    return <div>This the home page!</div>
}

const About = () =>{
    return <div>This is the about page!</div>
}

const Contact = () =>{
    return <div>This is the contact page!</div>
}

export default class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                    <Route path = "/" exact component = {Home} />
                    <Route path = "/about" component = {About} />
                    <Route path = "/contact" component = {Contact} />
            </React.Fragment>
        );
    }
} 
```

**Browser Router Component:**

The most important part of the above code is the `<BrowserRouter>` component we used. 

You can see its documentation here [https://reacttraining.com/react-router/web/api/BrowserRouter](https://reacttraining.com/react-router/web/api/BrowserRouter).

**What does it do ?**

This component is a container for your entire application. It creates a `history` object which keeps track of the current location of the page. 

It also matches paths and updates the DOM with relevant components and JSX according to a given path.

You can ready more about the history object here [https://reacttraining.com/react-router/web/api/history](https://reacttraining.com/react-router/web/api/history).

**Route Component:**

This is the most important component in React Router. 

You can look at the documentation here [https://reacttraining.com/react-router/web/api/Route](https://reacttraining.com/react-router/web/api/Route)

Its primary purpose is to match routing paths and render components based on the paths that are matched. 

The `component` method or prop is used to signify which Components will be rendered by the `<Route>` component when a given path is matched. 

## How route path matching works and the exact keyword. 

Paths are matched starting from the first `/` character. 

Paths continue to get matched based on keywords. 

For example:

`/` : Will be matched by all routes by default. 
`/profile` : Will be matched by any routes containing `/` and then `profile`.
So `/profile/user` will be matched and `/profile/user/masai` will also be matched.

**Exact Prop**

Setting the exact props in your route component means only routes containing that exact path will be matched. 

Example:

```jsx
<Route path="/one" component={About} />
```

The above will be matched by `/one` and `/one/two`


```jsx 
<Route exact path="/one" component={About} />
```

Will be matched by `/one` but will ***not*** be matched by `/one/two`.


### Using routes to create templates

We can take advantage of the above feature of routes dynamically render the Components we need and keep other elements of our page static. 

Lets improve our website by adding a `h1` title to every route. You can simply do this by rendering it right into the App component!

**App.js**
```jsx
export default class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                    <h1> Masai School Blog </h1>      
                    <Route path = "/" exact component = {Home} />
                    <Route path = "/about" component = {About} />
                    <Route path = "/contact" component = {Contact} />
            </React.Fragment>
        );
    }
} 
```

We can also add subpaths within components. 

Lets add a `/courses` routes and 2 subroutes `/courses/fullstack` and `courses/android`. 

```jsx
const CourseTemplate = () => {
    return (
        <React.Fragment>
            <h1> Courses </h1>
            <ol>
                <li> Full-Stack Development </li>
                <li> Android Development </li>
            </ol>
            <Route path = "/courses/fullstack" render = {() => <Course name = "fullstack" /> } />
            <Route path = "/courses/android" render = {() => <Course name = "android" /> } />
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

export default class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                    <h1> Masai School Blog </h1>      
                    <Route path = "/" exact component = {Home} />
                    <Route path = "/about" component = {About} />
                    <Route path = "/contact" component = {Contact} />
                    <Route path = "/courses" component = {CourseTemplate} />
            </React.Fragment>
        );
    }
} 
```
**Render prop:**

In the code above I used the render prop within `<Route path = "/courses/fullstack" render = {() => <Course name = "fullstack" /> } />`

You can read the documentation here [https://reacttraining.com/react-router/web/api/Route/render-func](https://reacttraining.com/react-router/web/api/Route/render-func).

This prop allows me to pass a function which returns a Component. The function then dynamically renders a component based on the `path`. 

Moreover we can also pass props to the rendered component allowing us to perform some dynamic rendering. 

You might ask why didn't we do this? 

 ```jsx
 <Route path = "/courses/fullstack" component = {() => <Course name = "fullstack" /> } /> 
 ```

 According to the docs this can have very negative performance implications:

>“When you use the component props, the router uses React.createElement to create a new React element from the given component. That means if you provide an inline function to the component attribute, you would create a new component every render. This results in the existing component unmounting and the new component mounting instead of just updating the existing component.”

### Links and why not to use anchor tags

Only thing missing from our App apart from some nice content is some navigation.

We have many routes in our applications so lets add some hyperlinks which can allow users to get around our application. 

Your immediate thought might be use to a Anchor or `<a>`
 tag. This is a very bad idea in React Router. 

Links from anchor tags cause the page to refresh. This means we lose useful data like the `history` object, `state` etc. 

Moreover, this means that on every click, the entire Application will be re-rendered from scratch which can have negative performance implications. This is also counter to the very idea of react which is to make small changes to the DOM to improve overall performance. 

**What is the solution?**

The `<Link>` component lets the user navigate the routes in our application without having to reload the page. 

You can read the documentation here [https://reacttraining.com/react-router/web/api/Link](https://reacttraining.com/react-router/web/api/Link).

Lets add some navigation to the website an some links to the courses we made. 

The final file should look like this:

```jsx
import React from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';


const Home = () =>{
    return <div>This the home page!</div>
}

const About = () =>{
    return <div>This is the about page!</div>
}

const Contact = () =>{
    return <div>This is the contact page!</div>
}

const CourseTemplate = () => {
    return (
        <React.Fragment>
            <h1> Courses </h1>
            <ol>
                <li><Link to="/courses/fullstack">Full-Stack Development</Link></li>
                <li><Link to="/courses/android">Android Development</Link></li>
            </ol>
            <Route path = "/courses/fullstack" render = {() => <Course name = "fullstack" /> } />
            <Route path = "/courses/android" render = {() => <Course name = "android" /> } />
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

export default class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                    <h1> Masai School Blog </h1>
                    <div>
                        <Link to="/">Home</Link><br />
                        <Link to="/about">About</Link><br />
                        <Link to="/contact">Contact</Link><br />
                        <Link to="/courses">Courses</Link><br />
                    </div>  
                    <Route path = "/" exact component = {Home} />
                    <Route path = "/about" component = {About} />
                    <Route path = "/contact" component = {Contact} />
                    <Route path = "/courses" component = {CourseTemplate} />
            </React.Fragment>
        );
    }
} 
```
You can find the example project here [https://github.com/masai-school/full-stack-dev/tree/master/course/week_9/router_example](https://github.com/masai-school/full-stack-dev/tree/master/course/week_9/router_example)

**Important Note:** I wrote all my components in a single file. I **do not** recommend doing this. I did this so you could easily understand this tutorial. Please only have related components in the same file!
