const fs = require('fs');

fs.open("createfile.txt",'r',function(err,data)
{
    if(err) throw(err);
    console.log("read-your-file");
})