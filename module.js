// varaiable
var variable = 100;

// function

fun1:() => { console.log("this is dinesh");};

// class

class dept{
    constructor(name){
        this.name = name;
    }
    classfunction(){
        console.log("this is " + this.name);
    }
}
// logic

function oddeven(a){
    if(a%2==0){
        console.log("even");
    }
    else
    {
        console.log("odd");
    }
}

exports.variable = variable;

exports.fun1 = fun1;

exports.dept = dept;

exports.oddeven = oddeven;


