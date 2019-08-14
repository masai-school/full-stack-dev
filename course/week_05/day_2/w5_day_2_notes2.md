## Week 5 - Day 2

### Media Queries

https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries

**Exact Width** (Exact Width)

```css
@media (width: 480px) {
  div {
    background: red;
  }
}
```

**Min Width** (Specified Width and Above)

```css
@media (min-width: 600px) {
  div {
    background: green;
  }
}
```

**Max Width** (Specified Width And Below)

```css
@media (max-width: 1024px) {
  div {
    background: blue;
  }
}
```

#### Typical Device Breakpoints

```css
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...} 

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...} 

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}
```

### Flexbox

The Flexible Box Module, usually referred to as flexbox, was designed as a one-dimensional layout model, and as a method that could offer space distribution between items in an interface and powerful alignment capabilities. When we describe flexbox as being one dimensional we are describing the fact that flexbox deals with layout in one dimension at a time — either as a row or as a column.


### Grids

**CSS Grid Layout** excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives. Like tables, grid layout enables an author to align elements into columns and rows. However, many more layouts are either possible or easier with CSS grid than they were with tables.