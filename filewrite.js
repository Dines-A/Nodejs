const write = require('fs')
write.unlink('del.txt',function(err) 
// createfile,readfile,append,unlink
{
    console.log("Flie saved!");
}
)