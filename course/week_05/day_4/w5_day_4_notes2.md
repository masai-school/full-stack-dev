## Week 5 - Day 4

### Flex

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout

```css
display: flex;
```

Displays an element as a block-level flex container



**flex-direction**

```css
flex-direction: row|row-reverse|column|column-reverse;
```

The direction of the flexible items  
https://codepen.io/nrupuld/pen/GbeKbN?editors=1100#0



**flex-wrap**

```css
flex-wrap: wrap|nowrap
```

 the flexible items should wrap or not.  
https://codepen.io/nrupuld/pen/VJRwyP



**flex-flow**

```css
flex-flow: flex-direction flex-wrap
```



**flex-basis**

```css
flex-basis: value;
```

Specifies the initial length of a flexible item

https://codepen.io/nrupuld/pen/ewXNYG



**flex-grow**

```css
flex-grow: value;
```

How much the item will grow relative to the rest of the flexible items inside the same container

https://codepen.io/nrupuld/pen/bPZGPO



**flex-shrink**

```css
flex-shrink: value;
```

How the item will shrink relative to the rest of the flexible items inside the same container

https://codepen.io/nrupuld/pen/vqPOLw



**flex**

```css
flex: flex-grow flex-shrink flex-basis
```



### Grid

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout

```css
display: grid
grid-template-columns: value value value;
grid-template-rows: value value;
grid-gap: value;
```

https://codepen.io/nrupuld/pen/QXobeQ

**grid-area**

```css
grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end 
```

https://codepen.io/nrupuld/pen/mZoepM