fun1 = function add( a,b)
{
    return a+b;
}
// exports.fun1 = fun1;
var x = 100;
// exports.x=x;
module.exports ={
    fun1:fun1,
    x:x,
    // here we are exporting the module as a object
    // we can create a function here itself
    itself :() => {console.log("im inside function");},
    // 
    itself : function (){
        console.log("im inside function1:");
    }
}