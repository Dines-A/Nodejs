// asyncrenance => nodejs runing on this method
const fs = require('fs');
const http = require('http')
http.createServer(function(err,maindata)

{

    // if you add a DMBS.html file here it will show you like normal 
    fs.readFile("Asyc.txt","utf-8",function(error,data) 
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log("Async : ",data);
        maindata.write(data);
        maindata.end("   _end of the section!!")
    }
})
}
).listen(2002)

// syncrance method
let sync=fs.readFileSync("sync.txt","utf8");
console.log("sync :",sync);

const write = require('fs')
write.unlink('del.txt',function(err) 
// createfile,readfile,append,unlink
/* open => it create the file and open it  */
{
    console.log("Flie saved!");
}
)

