### Week 2 - Day 3

#### Session 1

**Coding Standards, Following Conventions, Naming, Clean Code**

[Code Quality](https://xkcd.com/1513/)
[Code Quality 2](https://xkcd.com/1695/)
[Code Quality 3](https://xkcd.com/1833/)
[Good Code](https://xkcd.com/844/)


> *Any fool can write code that a computer can understand. Good programmers write code that humans can understand*
>
> *– Martin Fowler*



### NAMING

BAD

```
.class1 {

}
.class2 {

}
.class3 {

}
.class4 {

}

#id1 {

}
#id2 {

}

function my_function() {

}

function yourFuntion() {

}

function function1() {

}

function function2() {

}

function this_is_the_name_of_a_very_long_function_and_is_written_by_me() {

}

function ab() {

}
```

```
.element_box {

}

.red_background {

}

.center_align {

}

#displayBox {

}

#profilePic {

}

function displayName() {

}

function getGender() {

}
```



**DON'T CREATE CONFUSION**

BAD

```
.redBox {
	background-color: black;
}

.leftAlign {
	text-align: right;
}
```

GOOD

```
.redBox {
	background-color: red;
}

.leftAlign {
	text-align: left;
}
```



### INDENTATION

BAD

```html
<div>
<div>
<p>
</p>
<ul>
<li>
</li>
</ul>
</div>
</div>
```

GOOD

```html
<div>
    <div>
        <p>
        </p>
        <ul>
            <li></li>
        </ul>
    </div>
</div>
```



### SPACES

```
lifewithoutspaces
```

```
life_without_spaces
// snake_case
```

```
lifeWithoutSpaces
// camelCase
```

BAD

```
dOntINvent_YOURown_casE
```



### UNIFORMITY

BAD

```
function setName() {

}

function set_email() {

}

.blue_box {

}

.redBox {

}
```

GOOD

```
function setName() {

}

function setEmail() {

}

.blueBox {

}

.redBox {

}
```

```
function set_name() {

}

function set_email() {

}

.blue_box {

}

.red_box {

}
```



### SPACING & READABILITY

BAD

```
.class1 {color:red;padding:10px}
```

GOOD

```
.class {
	color: red;
	padding: 10px;
}
```

BAD

```
function function1() {
	doing set A 1
    doing set A 2
    doing set B 1
    doing set B 2
}
function function2() {

}
function function3() {

}
```

GOOD

```
function function1() {
	doing set A 1
	doing set A 2
	
	doing set B 1
	doing set B 2
}

function function2() {

}

function function3() {

}
```

### COMMENTS

BAD

```
// this class set the background color of an element to red
.redBox {
	background-color: red;
}

/**
If a number is not divisible by 2 then it is called odd number
To find a number is odd or not we divide it by 2
  - if the remainder is 1 then it is a odd number
  - if the remainder is 0 then it is a even number
**/
function isOddNumber() {

}
```

GOOD

```
// Styles for the comment box used for Posts and Videos 
.mainCommentBox {

}

/**
email & mobile - mandatory
dob & city - optional

**/
function checkRegistrationFields() {

}
```



### LEARN MARKDOWN

<https://guides.github.com/features/mastering-markdown/>