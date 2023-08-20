# Hello World

This is a new codebase. Very simple, yet very powerful! I'm excited about it.

### ❥ Redux

old fashioned, not @reduxjs/toolkit which is very awkwared to use with SSR

### ❥ SSR

1. fetch data from API
2. render it in SSR (instant)
3. dispatch it to Redux store, so client-side hydration will not lead to data discrepancies
4. this is done using server side functions, same ones used in client side. This is important, because it keeps the code simple and manageable, while letting us have very fast page load times, and the same data and logic on server and client side.

### ❥ New standards

NextJS 13 /app directory, strict TypeScript 5.x, strict eslint, and other good stuff
