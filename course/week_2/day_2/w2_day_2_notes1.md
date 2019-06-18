### Week 2 - Day 2

#### Session 1

**CSS Selectors (Simple)**



**Universal Selector**

The CSS universal selector  (`*`) matches elements of any type.

```
/* Selects all elements */
* {
	color: black
}
```

<https://codepen.io/nrupuld/pen/xoOpeB>



**Type Selector**

The CSS type selector matches elements by node name. In other words, it selects all elements of the given type within a document.

```
/* All <div> elements. */
div {
  color: red;
}
```

<https://codepen.io/nrupuld/pen/qzNpez>



**Class Selector**

The CSS class selector matches elements based on the contents of their `class` attribute.

```
/* All elements with class="class1" */
.class1 {
  color: yellow;
}
```

<https://codepen.io/nrupuld/pen/agZqbM>



**ID Selector**

The CSS ID selector matches an element based on the value of its `id` attribute. In order for the element to be selected, its `ID` attribute must match exactly the value given in the selector.

```
/* The element with id="demo" */
#demo {
  color: purple;
}
```

<https://codepen.io/nrupuld/pen/qzNxaW>

<u>**Defines a unique identifier (ID) which must be unique in the whole document**</u>

WRONG

```
<div id="demo"></div>
<div id="demo"></div>
```

CORRECT

```
<div id="demo1"></div>
<div id="demo2"></div>
```



### CSS Precedence

**Multi Classes (Different Properties)** 

```
<div class="class1">This is first div</div>
<div class="class1 class2">This is second div</div>
<div class="class1 class2 class3">This is third div</div>
```

<https://codepen.io/nrupuld/pen/KjMQqB>



**Multiple Definitions**

```
<div class="class1">This is first div</div>
<div class="class2">This is second div</div>
```

<https://codepen.io/nrupuld/pen/bPeLzj>



**Class Ordering (Same Properties)**

```
<div class="class1 class2">This is first div</div>
<div class="class2 class1">This is second div</div>
<div class="class3 class4">This is first div</div>
<div class="class4 class3">This is first div</div>
```

<https://codepen.io/nrupuld/pen/zVBRdV>



**Multi Classes & Ordering (Same & Different Properties)**

```
<div class="class1 class2">This is first div</div>
<div class="class2-1 class1">This is second div</div>
<div class="class3 class4">This is third div</div>
<div class="class4 class3 class5">This is fourth div</div>
```

<https://codepen.io/nrupuld/pen/qzNxKb>



**Priority**

Style Tag > ID Selector > Class Selector > Type Selector > Universal Selector

```
<body>
    Hello
    <div>This is first div</div>
    <div class="class1">This is second div</div>
    <div class="class1" id="id1">This is third div</div>
    <div class="class1" id="id2" style="color:red">This is third div</div>
 </body>
```

<https://codepen.io/nrupuld/pen/ewzVja>