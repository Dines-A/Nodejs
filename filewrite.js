const fs = require('fs');

fs.writeFile("Filewriting.txt","I created \
this file using Filesystem!! but cant uppend",

    function(err)
    {
        if(err) throw(err);
        console.log("file-saved");
    }

)