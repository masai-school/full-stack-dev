### Week 2 - Day 2

#### Session 2

**Javascript Basic DOM Manipulation**



#### What is JavaScript?

JavaScript is a scripting or programming language that allows you to implement complex things on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.



**How to write Javascript**


```
<script>
function doSomething(){
 // Your Code Goes Here
}
</script>
```



**HTML Events**

HTML events allow JavaScript to register different event handlers on elements in an HTML document.

`click`  

Execute a JavaScript when the element is clicked:

```
<button onclick="function1()">MASAI Button</button>
```



`alert()`  

Display an alert box:

```
alert("Hello! I am an alert box!!");
```

<https://codepen.io/nrupuld/pen/gNMKWm>



**Changing Elements**

`document.getElementById()`

Change the content inside a particular html element

```
document.getElementById("id").innerHTML = "New Value"
```

<https://codepen.io/nrupuld/pen/qzNyYP>



Get the value of an input element

```
document.getElementById("id").value
```

<https://codepen.io/nrupuld/pen/zVBJaa>

Get the value of an select element

<https://codepen.io/nrupuld/pen/NZrOVL>



Getting Values and Setting Values and HTML

<https://codepen.io/nrupuld/pen/pXbOee>



**Styling Elements**

```
document.getElementById("id").style.color
```

<https://codepen.io/nrupuld/pen/vqKzbY>