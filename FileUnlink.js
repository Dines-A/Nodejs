const fs = require('fs');

fs.unlink("sync.txt",function(err)
{
    if(err) throw(err)
    console.log("deleted !!");
}
)