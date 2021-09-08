// Sync will Run First
// Async Will Run Second
// Async Method
const fs=require('fs')
fs.readFile('fs.txt','utf-8',
    function(err,data)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Async : ", data);
        }
    }
);

// Sync 
const Data=fs.readFileSync('fs.txt','utf-8');
console.log("Sync :",Data);
console.log("End");