function write(name)
{
    console.log("welcome to Nodejs" + " "+ name);
}
var a = 1234;
exports.a = a;
exports.write = write;
// write("dinesh");
// console.log(a);