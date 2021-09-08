let fs = require('fs');


var read=fs.createReadStream("Stream2.txt");
var data="";
read.setEncoding('utf-8');
read.on('data',function(chunk)
{
    data+=chunk;
})
read.on('end',function()
{
    console.log(data);
})




// var Msg="Hello how are you im Stream";
// var writestream=fs.createWriteStream("Stream2.txt");
// writestream.write(Msg,'utf-8');
// writestream.end();
// writestream.on('finish',function()

// {
//     console.log("Success");
// })

// to read data from the file