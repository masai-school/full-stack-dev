# Week 4 - Day 4
# JavaScript Basics IX Notes:


## Fetching Data From a Server

All this time we have been making web applications but they don't actually connect to the web!

Whats the point in making an application if it can't send and retrieve data from the Internet?

In short, nothing! Web-applications (in my opinion) are only useful if they can send, retrieve, process and delete data using the Internet.

In this next part we are going to learn about the basics of the web and how to retrieve data from a server/API.

## Some groundwork about the Web

The web itself is a very complex network of billions of computers (possibly trillions), but thanks to advancements in software and web technology, it is an easy process for front-end developers to send and retrieve data from servers. 

### Client Server Model

**Real Life Explanation:**

Imagine you are at a restaurant and you want to get some food.

You look at the menu and **request** the waiter to **GET** you some dosa.

The waiter looks at your **request** and **responds** by giving you your dosa. 

**Technical Explanation:**

The client server model works in much the same way. 

You the client sends the server a HTTP **request** with the **GET** method and the server responds with a **HTTP** **response** with the data you requested. 

**GET** is one of many HTTP request methods you would use to **request** data from a web server.

This might be a lot to take in but I think it will get simpler once you are able to use it in JavaScript. 

## The XMLHttpRequest

The `XMLHttpRequest` object used to send and receive HTTP requests.

Lets take a look at a simple example where we send a simple `GET` request and retrieve some JSON data. 

The freeCodeCamp weather API accepts Latitude and Longitude and returns weather information in `JSON` format. 

You can see it's documentation here [https://fcc-weather-api.glitch.me/](https://fcc-weather-api.glitch.me/)

Lets try and retrieve the weather information for Bangalore. 

```javascript
// This creates a new XMLHttpsRequest() object
var xhr = new XMLHttpRequest(); 

// This configures the object to perform a GET request to the given url
// Notice how we pass lat=12.9716&lon=77.5946, this is the latitude and longitude for Bangalore.
xhr.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lat=12.9716&lon=77.5946');
// This will send the GET request to the server.
xhr.send()
// This function will be called after the information is retrieved
xhr.onload = function (){
    // The HTTP 200 status code is returned when your request is successful so we check for that
    if(xhr.status == 200){  
        console.log(xhr.response) // Print the response from the server after a successful request
    }
    else{
        // If the request is unsuccessful we print some error text along with the error code
        console.log("Error Code is:" + xhr.status)
    }
}
```

**Output:**

```javascript
"{'coord':{'lon':77.59,'lat':12.97},'weather':[{'id':802,'main':'Clouds','description':'scattered clouds','icon':'https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F03d.png?1499366020890'}],'base':'stations','main':{'temp':29.6,'pressure':1009,'humidity':45,'temp_min':27.78,'temp_max':31},'visibility':10000,'wind':{'speed':7.2,'deg':270},'clouds':{'all':40},'dt':1562059584,'sys':{'type':1,'id':9205,'message':0.0078,'country':'IN','sunrise':1562027230,'sunset':1562073580},'timezone':19800,'id':1277333,'name':'Bangalore','cod':200}"
```

**CodePen Link:** [https://codepen.io/steviekong/pen/PreYVZ](https://codepen.io/steviekong/pen/PreYVZ)

As you can see we got a response from the server with some `JSON`. 

The `JSON` contains a lot of weather Data about Bangalore. You can parse it into a JavaScript Object and retrieve any data you want.

### Small note about the `onload` event
 
Something important to note is that `onload` is a JavaScript event just like `onclick` `onhover` etc. It is **not** a function!

This means that just like other events in JavaScript it is triggered by some action occurring on the browser. 

In `xhr.onload` the event it is triggered by is a successful HTTP request. Once the event is triggered it executes the callback function.

### HTTP Codes

When you send requests to servers you may get many different responses or HTTP status codes.

These codes mean many things and can be useful in debugging your program. 

**Some common HTTP status codes codes and their meanings:**

1. 200 : OK - This is the standard HTTP response when the request was successful. 
2. 400 : Bad Request- You will get this error when you make a "Bad" or "Incorrect" request. 
3. 404: Not Found - You will get this error when the resource you are looking for on the server is not found. 

There are many more error codes in HTTP which you can look at here [https://en.wikipedia.org/wiki/List_of_HTTP_status_codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

## Now lets display the data!

In the code below after a button is clicked the data will be displayed. 

We use callback functions to achieve this. 

**But why? Can I do this without callback functions?**

You could but, remember that web servers may take an unknown amount of time to retrieve data. 

While this data is being retrieved we still need our program to do other useful tasks like fetching data from another server or any other useful task really.

We don't want our entire webpage to halt or hang just because we are getting some data from a server.

**Program Flow:**
1. Button is clicked.
2. A HTTP GET request is sent to the server within the `getWeatherData` function.
3. The server looks at the request and sends an appropriate response. 
4. The function verifies the response and sends it to the display function.
5. The display function checks the input string and prints it to a p tag.  

**Example:**

```javascript
// This function will get JSON data from the server and call the printWeatherData function!
//The argument displayFunction is a function!
function getWeatherData(displayFunction){
  var result = null;
  var xhr = new XMLHttpRequest(); 
  xhr.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lat=12.9716&lon=77.5946');
  xhr.send()
  xhr.onload = function (){
    if(xhr.status == 200){
      result = xhr.response;
      printWeatherData(result);
    }
    else{
      console.log("Error Code is:" + xhr.status);
    }
  } 
}

// This function will check the input to see if it is null and print the input to a p tag if it is not null.
var printWeatherData = function (input){
  var body = document.querySelector('body');
  var display = document.createElement('p');
  if(input == null){ // checking if the input is null
    display.textContent = "Error! No weather data received or invalid request!";
    //It will print an error if the input is null
  }
  else{
    display.textContent = input;
    //Otherwise it will display the text
  }
  body.append(display);
}

//Button and listener for the `click here to print the weather data!` button
var displayBtn = document.querySelector('#printWeather')
displayBtn.addEventListener('click',function(){
  getWeatherData(printWeatherData);
});
```

**CodePen Link:**

[https://codepen.io/steviekong/pen/dBeyxN](https://codepen.io/steviekong/pen/dBeyxN)

## What if we want the weather data for other cities ?

We can also change the `url` string we pass to the `xhr.open` function to get the data of different cities.

**How can we do this?** 

Simply by passing 2 strings to the `getWeatherData` function. 

**Example:**

```javascript
// This function will get JSON data from the server and call the printWeatherData function!
//The argument displayFunction is a function!
//The argument latitude is a string from the input with id = "latitude"
//The argument longitude is a string from the input with id ="longitude"
function getWeatherData(displayFunction, latitude, longitude){
  var result = null;
  var xhr = new XMLHttpRequest(); 
  xhr.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lat='
           +latitude
           +'&lon='+longitude); //Here I have simply appended latitude and longitude to the string
  xhr.send()
  xhr.onload = function (){
    if(xhr.status == 200){
      result = xhr.response;
      printWeatherData(result);
    }
    else{
      console.log("Error Code is:" + xhr.status);
    }
  } 
}

// This function will check the input to see if it is null and print the input to a p tag if it is not null.
var printWeatherData = function (input){
  var body = document.querySelector('body');
  var display = document.createElement('p');
  if(input == null){ // checking if the input is null
    display.textContent = 'Error! No weather data received or invalid request!';
    //It will print an error if the input is null
  }
  else{
    display.textContent = input;
    //Otherwise it will display the text
  }
  body.append(display);
}

//Button and listener for the `click here to print the weather data!` button
//The block of code below was changed from the previous example.
var displayBtn = document.querySelector('#printWeather')
displayBtn.addEventListener('click',function(){
  var latitude = document.querySelector('#latitude').value 
  var longitude = document.querySelector('#longitude').value
  getWeatherData(printWeatherData, latitude, longitude);
});
```

**CodePen Link:**

[https://codepen.io/steviekong/pen/bPMqzy](https://codepen.io/steviekong/pen/bPMqzy).

### A few takeaways

Notice how we executed a chain of functions.

```
displayBtn.addEventListener -> callback anonymous function -> getWeatherData -> xhr.onload -> printWeatherData

```

**This is intentional!** 

We structured our code in such a way because everything needs to happen one after the other in `asynchronous` programming.

Also notice we only call the `printWeatherData` function after we get some data from the server! 

If we tried to store this data to a global variable or return it at the end of our function, our code will return an `undefined` variable.

This is why we chain our callback functions to perform tasks one after the other only after the data has been retrieved from the server.
