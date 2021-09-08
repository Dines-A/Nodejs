const  http  = require("http");

function imapp(req,res)
{
    res.writeHead(200,{});
    res.write("im app-server function module");
    res.end()
}

http.createServer(imapp).listen(8080)