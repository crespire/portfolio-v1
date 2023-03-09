# Portfolio App

This is a CRA TypeScript project. I wanted to see how different a TypeScript project would be compared to a Javascript one.

Plan:
SPA with a few sections:
* Hero - SPA
* About - SPA scroll
* Projects - SPA scroll
* Resume - Separate, plain HTML doc (can probably use github pages one) plus PDF download

# Key Learning
* Tailwind is actually so powerful. This app has probably done more with Tailwind than I've done in my past few apps combined. There's a number of custom classes, as well as some `@apply` directives.
* Typescript is not that scary. It took a little bit to find my feet, but it all made sense once I stopped to think about the errors I was getting.
* Tailwind Dark mode via the class strategy is so flexible.
  * I initially was using `<picture>` elements with `srcSet` for alternate images in light/dark mode, but because I was just using solid black and white icons, I simply moved to the CSS `dark:invert` on the image element.
* This project was actually a lot of fun. I always saw myself as more of a backend developer, but seeing things come together in this application was pretty awesome.
* Google Analytics is cool!
