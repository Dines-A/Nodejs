// class-2
// Fun in another fun


// type-1 
// function One(parameter)
// {
//     console.log(parameter);
// }
// function Two(anotherfun,value)
// {
//     anotherfun(value);
// }
// Two(One,"Hello im type-1")


// type-2
// const One=function(parameter)
// {
//     console.log(parameter);
// }
// function Two(anotherfun,value)
// {
//     anotherfun(value);
// }
// Two(One,"Hello im type-2")

// type-3
// function Two(anotherfun,value)
// {
//     anotherfun(value);
// }
// Two(function(parameter){console.log(parameter);},"Hello im type-3")


// class-3

// console.log(__filename);
// console.log(__dirname);

// setTimeout
// function callfunsetTimeout()
// {
//     console.log("I'm Your setTimeout");
// }
// setTimeout(callfunsetTimeout,5000)


// setInterval
// function callfunsetInterval()
// {
//     console.log("I'm Your setInterval");
// }
// setInterval(callfunsetInterval,1000)


// class-4

// Synchronous code is also called “blocking” because 
// it halts(stop) the program until all the
//  resources are available. However, asynchronous 
//  code is also known as “non-blocking”

// Synchronous

// console.log("im first Sync");
// function first()
// {
//     console.log("first-got-the op");
// }
// first()


// console.log("im second Sync");
// function two()
// {
//     console.log("two-got-the op");
// }
// two()


// console.log("im thrid Sync");
// function third()
// {
//     console.log("third-got-the op");
// }
// third()


// Asynchronous 

// console.log("im first Sync");
// function first()
// {
//     console.log("first-got-the op");
// }
// setTimeout(first,5000)


// console.log("im second Sync");
// function two()
// {
//     console.log("two-got-the op");
// }
// setTimeout(two,5000)


// console.log("im thrid Sync");
// function third()
// {
//     console.log("third-got-the op");
// }
// setTimeout(third,5000)



