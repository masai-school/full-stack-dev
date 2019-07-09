## Week 5 - Day 2

### Cascading Style Sheets

**Inheritance**

In CSS, inheritance controls what happens when no value is specified for a property on an element. Refer to any CSS property definition to see whether a specific property inherits by default ("Inherited: yes") or not ("Inherited: no").

https://developer.mozilla.org/en-US/docs/Web/CSS/color - `Inherited  yes`  
https://developer.mozilla.org/en-US/docs/Web/CSS/border - `Inherited  no`  

https://codepen.io/nrupuld/pen/WqYJqE - Color Inherited
https://codepen.io/nrupuld/pen/WqYyvX - Border Non-Inherited



**Important**

In CSS, there is a special piece of syntax you can use to make sure that a certain declaration will *always* win over all others: `!important` (even inline css)

https://codepen.io/nrupuld/pen/JQeZEP

https://codepen.io/nrupuld/pen/mZQjGQ



**Attribute Selector**

The CSS **attribute selector** matches elements based on the presence or value of a given attribute.
https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors

https://codepen.io/nrupuld/pen/ydQEzQ



**Pseudo Classes**

A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s).   
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

```css
selector:pseudo-class {
  property: value;
}
```
https://codepen.io/nrupuld/pen/BgGPQG



**Pseudo Element** 

A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s).  
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

```css
selector::pseudo-element {
  property: value;
}
```
https://codepen.io/nrupuld/pen/xoQJOR



**Specificity**

The amount of specificity a selector has is measured using four different values (or components), which can be thought of as thousands, hundreds, tens and ones — four single digits in four columns:

1000 - Inline/Style Tag  
Hundreds - One for each ID Selector  
Tens - One for each class selector, attribute selector, pseudo-class contained inside the overall selector.  
Ones - One for each element selector,  pseudo-element contained inside the overall selector.  

**Note: Universal selector (*), combinators (+, >, ~, ' ') and negation pseudo-class (:not) have no effect on specificity.**



|  Selector  |  Thousands  |  Hundreds  |  Tens  |  Ones  |  Total  |
| ------------- | ----------------- | --------- | ----- | ---- | ---- |
| h1 | 0 | 0 | 0 | 1 | 0001 |
| h1 + p | 0 | 0 | 0 | 2 | 0002 |
| h1 + p::first-letter | 0 | 0 | 0 |3 |0003|
| li > a[href*="en-US"] > .inline-warning |0 | 0 | 2 | 2 |0022|
| .class1 | 0 | 0 | 1 | 0 | 0010 |
| ul.class1 | 0 | 0 | 1 | 1 | 0011 |
| #id1 | 0 | 1 | 0 | 0 | 0100 |
| style | 1 | 0 | 0 |0 |1000|

https://codepen.io/nrupuld/pen/VJVBBx

https://codepen.io/nrupuld/pen/ydQqrJ