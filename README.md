NPM package publish test
https://egghead.io/lessons/javascript-set-up-compilation-of-source-code-using-babel-with-npm-scripts
https://egghead.io/lessons/javascript-test-npm-packages-locally-in-another-project-using-npm-link


```shell
$ npm install sensitive-words --dev
```

```javascript
// Node import
const { sensitiveWords } = require( "sensitive-words" )

// Es2015 module import
import sensitiveWords from 'sensitive-words'

const singleWord    = sensitiveWords( `I'm Batman`, [ "batman" ] )
const multipleWords = sensitiveWords( `Don't tell anyone but Clark Kent is Superman 🙀`, [ "Clark", "Kent", "superman" ] )

console.log(singleWord)    // I'm ***
console.log(multipleWords) // Don't tell anyone but *** *** is *** 🙀
```