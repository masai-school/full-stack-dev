# Week 5 - Day 1
# JavaScript Basics X Notes:


## Other events in XMLHTTP requests

### `onerror`

The XMLHttpRequestEventTarget.onerror is the function called when an XMLHttpRequest transaction fails due to an error.

This is on of the more important events as error handling is crucial in any HTTP transaction. 

### `onprogress` 

The XMLHttpRequestEventTarget.onprogress is the function called periodically with information when an XMLHttpRequest before success completely .

This is useful when we want to show a loading bar or do something else while data is being received from the server. 

There are a few more useful events you can take a look at here [https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget)

**CodePen Example:** [https://codepen.io/steviekong/pen/NZOqye](https://codepen.io/steviekong/pen/NZOqye)

Change the url in the `xhr.open` to an invalid url to see the `onerror` working!

### HTTP POST 

We don't just want to be getting data from a server, we also want to be sending or posting data to a server. 

We can do this with the HTTP `POST` method. 

Notice how we use the `XMLHttpRequest.setRequestHeader()` method to send some important header information to the server. 

[https://reqres.in/](https://reqres.in/) is a free api that lets you send and receive fake data to test your front end webpages.

Lets use this to send some form data and receive a response!

**CodePen Example:** [https://codepen.io/steviekong/pen/OeByrP](https://codepen.io/steviekong/pen/OeByrP)

### HTTP headers

**What are HTTP headers?**

HTTP headers allow the client and the server to pass additional information with the request or the response. An HTTP header consists of its case-insensitive name followed by a colon ':', then by its value (without line breaks).

This can often be useful when we need to send additional `Meta-data` to a server. 

We can use the `XMLHttpRequest.setRequestHeader(header, value)` method to do this. 

This can often be useful when you need to send tokens to authenticate your request. 

Remember to set your headers after you call the `open()` method but before you call the `send()` method.

**Example:**
```
xhr.open("POST", 'https://reqres.in/api/users')
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.send(json);
```

Here the header is `Content-type` and the value is `application/json; charset=utf-8`.






