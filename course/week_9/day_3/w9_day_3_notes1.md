# Week 9 Day 3

## Introduction to Routing with React III

### Authentication and Redirect

While the front end is not used for authentication we might still want some routes to be protected. 

If a user visits once of these routes, they should be redirected to the login page or the home page.

To do this we can use the `<Redirect>` component. 

You can read the documentaiton here [https://reacttraining.com/react-router/web/api/Redirect](https://reacttraining.com/react-router/web/api/Redirect)

To start out with lets create a `<Login>` component and a `/admin` route. 

If the user is not logged in, they will be redirected to the login page. If the are logged in, they can access the admin page. 

First lets create a `fakeAuth` object literal which will tell the application is a user is logged in or not. In a real application this information would be coming from the backend API. 

**Do not use this kind of function/login for security in a production environment!** 

```jsx
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
```

Next we can make components for `Admin` and `Login`.

```jsx
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
```

Finally in the App component we can write the logic for the sign in and sign out.

```jsx
<Route path = "/admin" render = {props =>{
                        return fakeAuth.isAuthenticated ? 
                            <Admin {...props} /> :
                            <Redirect to = {{pathname : "/login", state: {from :props.location}}} />
                    }} />
                    <Route path = "/login" component = {Login} />
```

### Using Regular Expressions for dynamic routing

The `path` property of the `<Route>` component can accept regular expression for routing. 

For this tutroial we will not be diving deep into Regular Expressions or regex. However, if you are curious and want to learn more [https://regexone.com/](https://regexone.com/) provides a great tutorial on this subject. 

This means we can perform some dynamic structured routing. 

For example lets say we have an array of items that are sold on our website, users may want to order these items by price, color etc. 

We can assign dynamic routes for each of these in a single line and render components accordingly. 

In our application we might want to order the products within the `/products` route by price. Both ascending and descending price. 

An easy way to do this might be a `/products/asc` route and a `/products/desc` route. This is fine for 2 different routes but once any more and our code becomes needlessly complicated. 

Instead we can modify the existing `/products` route with a Regular Expression.

```jsx
<Route path = "/products/:orderBy(asc|desc)" component = {Products} />
```
We also have to modify the `AllProducts` component to account for this change. 

```jsx
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
```

Now users can easily order by price, either ascending or descending. The default value is left as ascending. 

 