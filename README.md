# NPM package publish test

Make abusive comments cute by replacing specified words with a random emoji 😸

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

