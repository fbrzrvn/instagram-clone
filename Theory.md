## SASS Theory

- What is SASS? What does SASS stand for?

Is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more. It also helps to keep things organised and allows you to create style sheets faster.
SASS stands for 'Syntactically Awesome Style Sheets'.

- What is a CSS pre-processor?

CSS preprocessors are scripting languages that extend the default capabilities of CSS.
They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations.

- What does a pre-processor have to do with SASS?

Adds special features such as variables, nested rules and mixins into regular CSS.
The aim is to make the coding process simpler and more efficient.

- Why use SASS?

  - It's CSS syntax friendly.
  - It offers variables for whatever you want.
  - It uses nested syntax.
  - It includes mixins.
  - It has a large community and is well documented.
  - If you know SASS, you can customize Bootstrap 4.

- SASS has disadvantages? Which are?

  - The developer must have enough time to learn new features present in this preprocessor before using it.
  - Using Sass may cause losing benefits of the browser’s built-in element inspector.
  - The code has to be compiled.
  - Difficult Troubleshooting.

- What is a SASS Variable? Explain why are useful

Sass Variables are a way to store information that you want to reuse throughout your stylesheet. Variables are coming to CSS, but there's not much support at the moment and it's going to be awhile before you can use them.

```

$main-color: #ab73ff;

$border: rgba($main-color, .5);

.wrap {​​
  border: 1px solid $border-dark;
}​​

```

- What is a mixin? Why is it important? Give an example

One of the most powerful features of the CSS preprocessor Sass is the mixin, an abstraction of a common pattern into a semantic and reusable chunk. Think of taking the styles for a button and, instead of needing to remember what all of the properties are, having a selector include the styles for the button instead.

```
@mixin reset-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

- What is SCSS? Give an example

  Is an extension from Sass. It contains Scss syntax, it's similar to css because uses curly braces and semicolons.

```

body {​​
  background: #000;
  color:#fff;
}​​

```

- What is SASS? Give an example

  A SASS file is a Syntactically Awesome StyleSheets file. It contains Sass syntax, which is an extension of cascading style sheets (CSS) used to format the layout of webpages. Instead, SASS files can be compiled into CSS files that are then used to format the contents of webpages.

```

body
  background-color:#000;
  color:#fff;

```

- What is the difference between .scss and .sass syntax.

  The `.sass` don't uses curly braces and semicolons.

- In which cases would we use SCSS? And in which cases would we use SASS?

  - SASS is used when we need a original syntax, code syntax is not required for SCSS.
  - SASS follows strict indentation, SCSS has no strict indentation.
  - SASS has a loose syntax with white space and no semicolons, the SCSS resembles more to CSS style and use of semicolons and braces are mandatory.
  - SASS file extension is `.sass` and SCSS file extension is `.scss`.
  - SASS has more developer community and support than SCSS.

- Explain how traditional CSS and Preprocessed CSS workflows are different.

The traditional CSS are getting by the html, match the coincidences and aply the styles. The preprocessed CSS, in develop before you upload your app to the server, you need to compile the scss or sass to a css file that the browser understand it.

- Can we create functions with SASS? If it is true, give an example.

Functions allow you to define complex operations on Sass values that you can re-use throughout your stylesheet. They make it easy to abstract out common formulas and behaviors in a readable way.

```

body
  @function pow($base, $exponent) {
  $result: 1;
  @for $_ from 1 through $exponent {
    $result: $result * $base;
  }
  @return $result;
}

.sidebar {
  float: left;
  margin-left: pow(4, 3) * 1px;
}

```

- What is nesting? Is it useful? Give an example of nesting

When writing HTML you've probably noticed that it has a clear nested and visual hierarchy. CSS, on the other hand, doesn't.

Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML.

```

nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}

```

- Why use @import?

Sass extends CSS's @import rule with the ability to import Sass and CSS stylesheets, providing access to mixins, functions, and variables and combining multiple stylesheets' CSS together. Unlike plain CSS imports, which require the browser to make multiple HTTP requests as it renders your page, Sass imports are handled entirely during compilation.

- How can we import other CSS/SASS files in SASS? Give an example

 ```
@import 'foundation/code', 'foundation/lists';
```

- Explain the concept of inheritance in SASS.

 Using @extend lets you share a set of CSS properties from one selector to another. It helps keep your Sass very DRY. In our example we're going to create a simple series of messaging for errors, warnings and successes using another feature which goes hand in hand with extend, placeholder classes. A placeholder class is a special type of class that only prints when it is extended, and can help keep your compiled CSS neat and clean.

- Why use @extend? Give an example

You can extend most simple CSS selectors in addition to placeholder classes in Sass, but using placeholders is the easiest way to make sure you aren't extending a class that's nested elsewhere in your styles, which can result in unintended selectors in your CSS.

 ```
/* This CSS will print because %message-shared is extended. */

%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.

%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}
.success {
  @extend %message-shared;
  border-color: green;
}
.error {
  @extend %message-shared;
  border-color: red;
}
.warning {
  @extend %message-shared;
  border-color: yellow;
}
