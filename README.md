## Summary

A React template with TypeScript and Jest-Puppeteer for Browser Extensions. 
Currently the build folder structure is for a content-script focused extension, but might be updated in the future to support non-content-script focused extensions.

## Install

Simply run
```
npm install
```
*note: might need to run it twice if it gives a 'missing index.js' error.*

:warning: Do not remove 'main' from the entry-points nor the '/src/main_temp.js' file. React requires an entry point named 'main'.
Simply add your own entry points as required.

## Testing

To run tests, use one of the following commands

### `npm run test`

Runs all Unit and Integration tests once without verbose. Automatically builds.

### `npm run test:verbose`

Same as ```npm run test``` but with verbose.

### `npm run test:unit`

Runs only the unit tests once.

### `npm run test:integration`

Runs only the integration tests once. Automatically builds.

## Other Info

### Custom HTML Elements
To use custom HTML elements (e.g. <custom-element> ... </custom-element>), see '/src/decleration.d.ts'. 

