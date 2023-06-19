# The Rise of new JS-in-CSS

A Shift in CSS Technologies

TL;DR:

This article dives into Linaria, an underappreciated tool that uses JavaScript to generate CSS statically. The result? Regular CSS code with optimal performance. If this piques your interest or you find it useful, don't forget to give a clap at the end. Read on to learn more about this JS-in-CSS revolution.

Historically, CSS has evolved significantly. It started as a simple language for styling web pages, was enhanced in 2006 with [SASS](https://sass-lang.com), and as the scale of web development grew, we faced issues such as class name clashes. This issue naturally led to the development of [CSS Modules](https://github.com/css-modules/css-modules) in 2015. By using a unique hash for each class name, it prevented two developers from accidentally using the same name. It also provided the first link between **JavaScript and CSS**. But this encapsulation came with its own problems — the unique class name is computed at build time, making it inaccessible and essentially a black box. While CSS Modules was designed as a set of transparent modules that could be interlinked, actual implementation was certainly lacking. This effectively locks us out of customization, especially for deeply nested components.

<!-- Image of CSS modified by CSS Modules with caption: "A visual representation of CSS modified by CSS Modules." -->

As a response to this black-boxing, [styled-components](https://styled-components.com) emerged in 2016 (surprisingly, by the same team who created CSS Modules) and introduced a more dynamic approach to styling, which included overrides and theming. This marked the beginning of the **CSS-in-JS** era. However, this approach came with its own set of issues, namely a drop in performance due to parsing and merging large CSS literals. This impact becomes more apparent as a project grows, making it a noticeable issue when the scale is large and the technology is deeply integrated.
< Image of styled components build output in .js files with caption: "Build output of Styled Components in .js files.">

For a while, I used a combination of CSS Modules and SASS, which worked decently despite the black-boxing issue. With the widespread adoption of CSS variables, I was even able to set up theming without using JavaScript.
[Wix](https://www.wix.com) offered a potential solution to the extendability problem with [Stylable](https://stylable.io). Stylable aimed to be the TypeScript of CSS, but it didn't gain much traction, likely due to its complexity and some missing features.

## Defining Goals for an Ideal CSS Framework
Before diving into the potential solutions, let's lay out the **bare-minimum requirements** for our ideal CSS framework:

- **Standard CSS adherence**: It should stick to standard CSS as much as possible, both in behavior and output. Deviations will need a strong justification.
- **Nesting syntax** support.
- **Zero runtime**: Must be fully static out of the box.
- **Component composition** and overrides: Necessary for flexible customization.

Additionally, these are the **"nice-to-haves"**:

- **Option for Dynamic CSS**: Useful for setting CSS variables or using user input.
- **Some scripting capability**: E.g., loops for writing more efficient CSS.
- **Modern optimization techniques**: Tree shaking, de-duping, etc., for lean, efficient CSS.

## A New Approach: JS-in-CSS

This series of events and technological shifts led me to envision a new kind of library - a JS-in-CSS library. Instead of embedding CSS in JavaScript, the goal was to write CSS statically using JavaScript, giving us full control while keeping our styles performant.

Here's a sneak peek:

```ts
// button.css.ts
import { classHash } from "js-in-css";

export const buttonClass = classHash("button");

export default `
.${buttonClass} {
  background: lightblue;
}`;
```

At a glance, it may remind you of styled-components. However, the philosophy here is different. Instead of embedding CSS in JavaScript, we are using JavaScript to generate CSS - a subtle but significant difference. We can already do this with existing technology like [val-loader](https://webpack.js.org/loaders/val-loader/). You can then chain it with regular CSS tools, like [SASS](https://github.com/webpack-contrib/sass-loader) and [PostCSS](https://postcss.org).

Now, how to use this button class in our components? It's as simple as with CSS Modules:

```tsx
// button.tsx
import { buttonClass } from "./button.css.ts";

export const Button = (props) => <Button className={buttonClass} {...props} />;
```

And how about overrides for nested components? Let's take a look:

```ts
// primary-button.css.ts
import { buttonClass } from "./button.css.ts";

const primaryClass = classHash("primaryButton");

export default `.${buttonClass}.${primaryClass} {
    border: 2px solid black;
}`;
```

This approach gives us all the encapsulation benefits of CSS Modules without the black-boxing, and all the scripting capabilities of SASS without having to learn a new language. With a bit of extension, we could also write dynamic functions that generate runtime styles.

## Linaria

< Linaria logo here with caption: "The official logo of Linaria.">

Imagine my surprise when I found [Linaria](https://linaria.dev), a JS-in-CSS library introduced in 2018, embodying exactly this concept, with 0 runtime code. It was a sweet discovery. Linaria lets you write CSS in a natural syntax and even supports caching!

Here is a sample of writing CSS with JavaScript using Linaria:

```jsx
import { css } from '@linaria/core';
import { modularScale, hiDPI } from 'polished';
import fonts from './fonts';

// Write your styles in `css` tag
const header = css`
  text-transform: uppercase;
  font-family: ${fonts.heading};
  font-size: ${modularScale(2)};

  ${hiDPI(1.5)} {
    font-size: ${modularScale(2.5)};
  }
`;

// Then use it as a class name
<h1 className={header}>Hello world</h1>;
```

Of course, this is just a small example. They also have a syntax similar to styled-components for React and much more. You can learn more from the [official site](https://linaria.dev), just remember to come back here and continue reading this article!

There are other libraries out there: vanilla-extract, Astroturf, Treat, and Compiled CSS (by Atlassian). These require you to write styles in camel case objects, unlike Linaria, which, in my opinion, captures the essence of JS-in-CSS by letting you write plain CSS similar to Styled Components.

However, let's proceed with caution. Linaria is impressive, but it would be prudent to see some benchmarks, real-world large-scale proof of concepts before crowning it as the winner. Adoption is slowly growing every month, with weekly downloads now reaching 300k. So, let's explore together, experiment, and see if we can bring out the full potential of JS-in-CSS with Linaria.

What's missing?

A design system is first on the list. We need a modular, customizable, default-ly themed, and extensive design system to champion this new technology.
Secondly, we need a standalone transformer that lets us use this tech outside of the ecosystem, to build packages with Linaria and publish them as plain css, much like TypeScript.
Finally, we need support from next-gen bundlers. esbuild and turbopack are just around the corner, bringing substantial improvements to Developer Experience, and they need a plugin. And yes, we even need it in Go and Rust!

## Conclusion

This exciting possibility of JS-in-CSS presents a promising future for frontend development. If it delivers on its promises, it could solve long-standing issues with CSS and JavaScript integration while offering performance improvements and coding efficiency.

We might even come near the end of the CSS-in-JS war. The era in which every company created its own design system, and large corporations even engineered their own CSS solutions, may soon be coming to a close if one technology emerges on it, though it may take a few years.

I encourage you to explore [Linaria](https://linaria.dev) and consider adopting or contributing to the technology. If you have a preference for another technology, please leave a comment and explain.

Lastly, Microsoft, if you're reading this and aren't too preoccupied with integrating Copilots everywhere, perhaps some of your TypeScript engineers could take a moment to check out this tech. 😉
