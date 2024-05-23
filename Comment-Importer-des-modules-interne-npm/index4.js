const { readFileSync , writeFileSync } = require("fs");

const {name , age ,legal ,loisir} = JSON.parse(readFileSync("./data.json","utf-8"))
// console.log(name);
// console.log(age);
// console.log(legal);
// console.log(loisir);
  

// const  myData = {
//     name:"Awa",
//     age:10,
//     legal:true
// }
// const objectTojson = JSON.stringify(myData);
// console.log(objectTojson);

// writeFileSync("./myData.json" , objectTojson);


const myData  = JSON.parse(readFileSync("./myData.json","utf-8"));
console.log(myData.name);

myData.name = "Assane"
b        
const objectTojson = JSON.stringify(myData);
writeFileSync('./myData.json' ,objectTojson);

debuggerr

console.log(myData.name);



// const package = JSON.parse (readFileSync('./package.json', 'utf-8'));
// console.log(package.name);
// console.log(package.version);