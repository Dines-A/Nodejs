const  http  = require("http");

function App()
{
        function My_app(req,res)
        {
            console.log("Requiest-recived"),
            res.writeHead(200,{'content-type':'text/plain'}),
            res.write("im app-server function module"),
            res.end()
        }
        http.createServer(My_app).listen(8080);
        console.log("Server has been startd!!");
}
exports.App=App