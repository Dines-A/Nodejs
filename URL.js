const http = require('http');
const url = require('url');
const fs = require('fs')


http.createServer(

    function(req,res)
    {

        const Url = url.parse(req.url,true);
        const UrlLink = "./"+Url.pathname;
        fs.readFile(UrlLink,function(error,data)
        {
            if(error)
            res.writeHead(404,{"content-type":"text/html"}),
            res.end()
            else
            res.writeHead(200,{"content-type":"text/html"}),
            res.write(data),
            res.end()
        })
    }
).listen(8080)



















// http.createServer(function(req,res)
// {
//     let UrlLink = url.parse(req.url,true);
//     let Filename = "."+ UrlLink.pathname;
//     fs.readFile(Filename,function(err,data)
//     {
//         if(err) { 
//         res.writeHead(400,{'Content-type':'text/html'}); 
//          return res.end("404 NOT FOUND");
//         }
//         res.writeHead(200,{'Content-type':'text/html'});
//         res.write(data);
//         res.end();
//     });
// }).listen(8080);