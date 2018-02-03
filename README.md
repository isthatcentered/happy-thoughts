# NPM package publish test

Make abusive comments cute by replacing specified words with a random emoji 😸

## Installation
```shell
$ npm install happy-thoughts --dev
```

## Usage
```javascript
const { happyThoughts } = require( "happy-thoughts" )

// Es2015 module import
// import happyThoughts from 'happy-thoughts'

const singleWord = happyThoughts( `Kal-El's a bit of bore -Batman`, [ "bore" ] )
const multipleWords = happyThoughts( `Why is Superman wearing his mother's tights lol -Batman`, [ "mother", "tights" ] )

console.log( singleWord )    // Kal-El's a bit of 🙀 -Batman
console.log( multipleWords ) // Why is Superman wearing his 🙌's 🙀 lol -Batman
```

