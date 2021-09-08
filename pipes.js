let fs=require('fs')
var readablestream = fs.createReadStream('read.txt');
var writablestream = fs.createWriteStream('write.txt');
readablestream.pipe(writablestream);