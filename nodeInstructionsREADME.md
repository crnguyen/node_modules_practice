# Node app instructions readme

## Import to your own node module
- create 2 files - index.js and another file (myModule.js for example)
- in index.js, write below code
```node
const myModule = require("./myModule.js");
```
- in other file, you can use it to store data/functions and use the index.js file to pull data
- make sure you add module.exports to make it avaiable to any file that imports the "./myModule.js" module

the below example is made available by using module.exports
```node
module.exports.foodie = ["pizza", "sushi", "pasta", "tacos", "pho", "ramen"];
```

## Importing an outside module in Node
- find a npm that you want to import: https://www.npmjs.com/
- in your terminal, run npm install for that module 
- in index.js, import module using "require" keyword and set it to a variable
```node
let BetterArray = require('better-array');
```
More information on Node
github repo: https://github.com/crnguyen/my-first-node-project/blob/master/readMe.md
