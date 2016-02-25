## Angular 2 Lessons

*Angular 2 is in beta and is subject to change.*

Use `app.ts` to comment out the lesson you want to explore.

Work in progress! This branch uses Webpack for Development.

### Usage
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to `http://localhost:8080`

### Build
- `npm run build` will output to a very basic `dist` dir which
you should be able to host from any basic http server.

### Known Issues
- angular2-polyfills.js is currently being handled manually. 
- bundle size is large, due to inline sourcemaps from angular2 npm source.