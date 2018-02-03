# NPM package publish test

## Installation
```shell
$ npm install happy-thoughts --dev
```

## Usage
```javascript
// Node import
const { happyThoughts } = require( "happy-thoughts" )

// Es2015 module import
import happyThoughts from 'happy-thoughts'

const singleWord    = happyThoughts( `I'm Batman`, [ "batman" ] )
const multipleWords = happyThoughts( `Don't tell anyone but Clark Kent is Superman 🙀`, [ "Clark", "Kent", "superman" ] )

console.log(singleWord)    // I'm ***
console.log(multipleWords) // Don't tell anyone but *** *** is *** 🙀
```

[https://egghead.io/lessons/javascript-set-up-compilation-of-source-code-using-babel-with-npm-scripts]
[https://egghead.io/lessons/javascript-test-npm-packages-locally-in-another-project-using-npm-link]
