const fs = require('fs');

fs.readFile("fs.txt" ,"utf-8",function(error,data)
{
    if(error)
    {
        console.log("There is a error!!");
    }
    else
    {
        console.log(data);
    }
});