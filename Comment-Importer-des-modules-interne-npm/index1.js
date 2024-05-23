const { multiply , divider} = require("./function");
const { chain} = require("mathjs");

console.log(multiply (5,10));
console.log(divider (10,5));
console.log(
   chain(5)
    .add(5)
    .multiply(2)
    .divide(20)
    .done()
);