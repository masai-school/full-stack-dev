# Week 9 Day 2

## Introduction to Routing with React II

### The `match` object

This object contains useful information about the `<Route path>` matched from the URL.

You can read about it here [https://reacttraining.com/react-router/web/api/match](https://reacttraining.com/react-router/web/api/match).

The properties I want you to take notice of are:

1. `params` : These are key/value pairs you can pass into the URL. 
2. `path` : This returns the matched path string. We can use this to build nested `<Route>.`s. 
3. `url` :  This returns the matched portion of the URL. We can use this to build nested `<Link>`s.

Lets modify yesterday code with the match object. 

I am going to modify the subpaths, `/courses/fullstack` and `/courses/android`using `match.path`. 

I am also going to modify the links which open the above subpaths using `match.url`.

**App.js**

```jsx
const CourseTemplate = ({match}) => {
    return (
        <React.Fragment>
            <h1> Courses </h1>
            <ol>
                <li><Link to={`${match.url}/fullstack`}>Full-Stack Development</Link></li>
                <li><Link to={`${match.url}/android`}>Android Development</Link></li>
            </ol>
            <Route path = {`${match.path}/fullstack`} render = {() => <Course name = "fullstack" /> } />
            <Route path = {`${match.path}/android`} render = {() => <Course name = "android" /> } />
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

### Dynamic Routing using the `match` object

Till now we have been **hard-coding** routes. But often in large Web Applications you will want to be generating routes dynamically.

For example lets say our website has some products. These products may have individual pages. 

While the template and the HTML for the products might be the same, the data and assets(images etc.) to be displayed for each product will be different. 

Each product should also have a unique route/path so users can share the URL to a particular product or even access it at a later time.

Moreover in larger websites we may be adding new products at any given time and our website must scale accordingly. 

**Adding Dynamic Routing to our Application:**

I am going to add a route called `/products` in the App component. Which will generate a bunch of components containing products from a object literal I defined. 

Each of these products will have click able links which leads to a Product page for any given product.

In a real Application the product data could come from an external API.

```jsx
const productArr = [
        {
            name : "SmartPhone",
            price: 30,
            id : 0
        },
        {
            name : "Watch",
            price : 20,
            id : 1
        },
        {
            name : "Shirt",
            price : 50,
            id : 2
        },
        {
            name : "Pants",
            price : 100,
            id : 3
        }
]

const AllProducts = (props) =>{
    return (
        <React.Fragment>
            <h2> Products </h2>
            <div style = {{border : "1px solid black"}}>
                {props.productArr.map(element =>{
                    return (
                        <div key = {element.id} style = {{border : "1px solid black"}}>
                            <p> Name : {element.name} </p>
                            <Link to = {`${props.match.url}/${element.id}`}> Click to see the product </Link>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
}

const Product = (props) =>{
    console.log(props)
    const productObj = productArr.find((element) => element.id == props.match.params.id) //This line makes sure that products are only displayed if they are found!
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
                        <Link to="/products">Products</Link>
                    </div>  
                    <Route path = "/" exact component = {Home} />
                    <Route path = "/about" component = {About} />
                    <Route path = "/contact" component = {Contact} />
                    <Route path = "/courses" component = {CourseTemplate} />
                    <Route path = "/products" exact render = {props => <AllProducts productArr = {productArr} {...props} /> }/>
                    <Route path = "/products/:id" render = {props => <Product {...props} />} />
            </React.Fragment>
        );
    }
} 
```

## Switch component

The `<Switch>` component renders the first `<Route>` that matches the route path.

The is really useful when you have several paths and you want to render the first match. Moreover if there are no matches you can even render an error page.

You can read the documentation here [https://reacttraining.com/react-router/web/api/Switch](https://reacttraining.com/react-router/web/api/Switch)

Lets add a Switch component to the App component. 

```jsx
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
                        <Link to="/products">Products</Link>
                    </div> 
                    <Switch>
                        <Route path = "/" exact component = {Home} />
                        <Route path = "/about" component = {About} />
                        <Route path = "/contact" component = {Contact} />
                        <Route path = "/courses" component = {CourseTemplate} />
                        <Route path = "/products" exact render = {props => <AllProducts productArr = {productArr} {...props} /> }/>
                        <Route path = "/products/:id" render = {props => <Product {...props} />} />
                    </Switch>
            </React.Fragment>
        );
    }
} 
```


## No match

Till now we have seen paths that match. But what if our users go to a path that does not match ?
 
Right now any non-matching path will be returned the basic `index.html` file we have within our public folder.

However what we really need to match any such path and return an error or 404 not found page.

We can easily add a component called `NotFound` which will render for any invalid route. 

```jsx
<Switch>
    <Route path = "/" exact component = {Home} />
    <Route path = "/about" component = {About} />
    <Route path = "/contact" component = {Contact} />
    <Route path = "/courses" component = {CourseTemplate} />
    <Route path = "/products" exact render = {props => <AllProducts productArr = {productArr} {...props} /> }/>
    <Route path = "/products/:id" render = {props => <Product {...props} />} />
    <Route component = {NotFound} />
</Switch>
```

You can see the example from class here [https://github.com/masai-school/full-stack-dev/tree/master/course/week_9/day_2/router_example_day_2](https://github.com/masai-school/full-stack-dev/tree/master/course/week_9/day_2/router_example_day_2)



