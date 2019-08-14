### Week 3 - Day 2

**Prerequisite**

https://github.com/masai-school/full-stack-dev/blob/master/course/week_2/day_2/w2_day_2_notes1.md

#### Session 1

`.`  
`,`  
`+`  
`~`  
`>`  
`space`



**CSS Combinators**

```html
<div id="id1">
    <div id="id2">
        <div id="id3">
            <p id="id4">
                Some Text
            </p>
        </div>
        <div id="id5">
            Some Text
        </div>
    </div>
    <div id="id6">
        Some Text
    </div>
</div>
```

- **Child node**: A node *directly* inside another node `id2` and `id6` are child nodes of `id1`  also `id3` is child node of `id2` and `id4` is child node of `id3`
- **Descendant node**: A node *anywhere* inside another node. `id2` and `id6` are child nodes of `id1` and also descendants. `id3` `id4` `id5` are not child nodes of `id1` but descendants
- **Sibling nodes**: Nodes that sit on the same level. In the above example `id2` and `id6` are siblings and `id3` and `id5` are also siblings



**Multiple Selectors, Same Properties (,)**  

The comma in a CSS selector separates multiple selectors within the same styles.

```
selector1, selector2 { style properties }
```

https://codepen.io/nrupuld/pen/xopQEZ



**Type & Class (.)**

```css
elemtype.class { style properties }
```

```html
<div>This is the first div</div>
<div class="class1">This is the second div</div>
<div class="class2">This is the third div</div>
<p>This is the first paragraph</p>
<p class="class1">This is the second paragraph</p>
<p class="class2">This is the third paragraph</p>
```

```css
/* All <div> elements */
div {
  color: red;
}

/* All elements with class="class1" */
.class1 {
  color: green;
}

/* All <p> elements with class="class2" */
p.class2 {
  color: violet;
}
```

<https://codepen.io/nrupuld/pen/zVweGK>



**Adjacent Sibling Selector (+)**

The adjacent sibling combinator (`+`) separates two selectors and matches the second element only if it *immediately* follows the first element, and both are children of the same parent element.

```
former_element + target_element { style properties }
```

https://codepen.io/nrupuld/pen/XLVyzm



**General Sibling Selector (~) **

The **general sibling combinator** (`~`) separates two selectors and matches the second element only if it follows the first element (though not necessarily immediately), and both are children of the same parent

```
former_element ~ target_element { style properties }
```

https://codepen.io/nrupuld/pen/pXpQLM



**Child Combinator (>)**

The **child combinator** (`>`) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the children of elements matched by the first.

```
selector1 > selector2 { style properties }
```

https://codepen.io/nrupuld/pen/rEpQRL



**Descendant Combinator ( )**

The **descendant combinator**  typically represented by a single space (` `) character combines two selectors such that elements matched by the second selector are selected if they have an ancestor element matching the first selector.

```
selector1 selector2 { style properties }
```

https://codepen.io/nrupuld/pen/Oezaed