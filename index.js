const myModule = require("./favFoodsModule.js");
myModule.foodie.forEach(element => console.log(element));


//Using Better-Array npm package
let BetterArray = require('better-array');
favFoods = BetterArray(["pizza", "sushi", "pasta", "tacos", "pho", "ramen"])
console.log(favFoods.first()); //returns first word in array
console.log(favFoods.count());// counts indexes in array
//insert new word into array
favFoods.$insert(2, "burritos");
console.log(favFoods);


