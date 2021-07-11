// it has taken the function fron module.js
var hold = require('./module')
var x=1;
var y=2;
// hold.log('message');
console.log("Add :", hold.add(x,y));
console.log("sub :", hold.sub(x,y));
console.log("div :", hold.div(x,y));
console.log("mul :", hold.mul(x,y));
