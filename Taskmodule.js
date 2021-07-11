// variable
var variable = 100;


function name1(){
    console.log("My name is dinesh");
}
// (name1) => { console.log("my name is "+ name1);}

// class
class myclass1
{
    constructor(name2)
    {
        this.name2 = name2;
    }
    classfunction()
    {
        console.log("this is my name" + this.name2);
    }
}
// logic

function oddeven(a){
    if(a%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}

// exports = {
//     variable:variable,
//     name1:name1,
//     myclass1:myclass1,
//     oddeven:oddeven,

// }

exports.variable =variable;
exports.name1 = name1;
exports.myclass1 = myclass1;
exports.oddeven = oddeven;