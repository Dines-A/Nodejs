const varName = require('http');
varName.createServer(
    function(req,res)
    {
        res.writeHead(200,{'Content-type':'text/html'});
        res.write("Hello,World");   
        res.end();

    }
).listen(8081);