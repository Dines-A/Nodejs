const fs = require('fs');

fs.appendFile("Createfile.txt","this Uppend file is create  using file system !! and this is more lines",

function(error) 
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log("File created !!");
    }

})