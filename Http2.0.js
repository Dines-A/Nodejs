const varName = require('http');
varName.createServer(
    function(req,res)
    {
        res.writeHead(200,{""});
        res.write("Hello,World"); 
        res.end();

    }
).listen(8081);