const addition = require('./Module-Export')
console.log("Addition : " + addition.fun1(5 ,5));
console.log(addition.x);
// inside fun of obj
addition.itself();