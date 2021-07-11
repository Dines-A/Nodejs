const hold = require('fs')

hold.readFile('math.js','utf8',function(err,data){
    console.log(data);
});
