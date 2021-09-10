let fs=require('fs')
var readablestream = fs.createReadStream('Pipe-read.txt');
var writablestream = fs.createWriteStream('Pipe-write.txt');
readablestream.pipe(writablestream);



// It will convert the other fill info into another fill