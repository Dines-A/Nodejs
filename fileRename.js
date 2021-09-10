const fs = require('fs');

fs.rename("filewriting.txt","Createfilewriting.txt",function(err)
{
    if(err) throw(err)
    console.log("File-Renamed");
}
)