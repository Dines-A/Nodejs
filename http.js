var http = require('http')
http.createServer(function(req,res)
{
    // res.writeHead(200,{'content-type':'text/html'});
    res.write("welcome to node js");
    res.end("Come again Fucker!!!..");
    console.log("you server has been started !!");
}
).listen(8001);