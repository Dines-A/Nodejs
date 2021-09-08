const  http  = require("http");

function ogs()
{
    console.log("org-app-server");
    function imapp(req,res)
    {
        res.writeHead(200,{});
        res.write("im org-app-server  function module");
        res.end()
    }
    http.createServer(imapp).listen(8081);
};
exports.ogs = ogs;