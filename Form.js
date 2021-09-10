const http = require('http');
const fs = require('fs');

http.createServer(function(req,res)
{
    res.writeHead(200,{"content-type":"text/html"})
    fs.readFile('./form.html',function(err,data)
    {
        if(err)
        {
            res.writeHead(404,{"content-type":"text/html"});
            res.writeHead("File Not Found!!");
        }
        else
        {
            res.write(data);
            res.end();
        }

    })
}).listen(8080)

