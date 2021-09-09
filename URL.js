const http = require('http');
const url = require('url');
const fs = require('fs')

http.createServer(function(req,res)
{

    let UrlLink = url.parse(req.url,true);
    let Filename = "."+ UrlLink.pathname;

    fs.readFile(Filename,function(err,data)
    {
        if(err) { 
        res.writeHead(400,{'Content-type':'text/html'}); 
         return res.end("404 NOT FOUND");
        }
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        res.end();
    });

}).listen(8080);