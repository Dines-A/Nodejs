const  http  = require("http");

const url = require("url")


function ogs(route)
{
    console.log("org-app-server");
    function imapp(req,res)
    {
        res.writeHead(200,{});
        res.write("im org-app-server  function module");
        res.end()
    }
    http.createServer(imapp).listen(8080);
};
exports.ogs = ogs;