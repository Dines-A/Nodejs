const http = require('http');

http.createServer(

    function(url,cont)
    {
        cont.writeHead(200,{'content-type':'text/plain'}),
        cont.write("Hello,Im http-module"),
        cont.write('\n'),
        cont.end("ended")
    }
    
).listen(8080);
