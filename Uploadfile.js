var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {

    fs.readFile("./Uploadfile.html",function(error,data)
    {
        if(error)
        {
            res.writeHead(404,{"content-type":"text/html"}),
            res.end()
        }
        else
        {
            res.writeHead(200,{"content-type":"text/html"}),
            res.write(data),
            res.end()
        }
    })
}).listen(8080);




{/* <form action="fileupload" method="post" enctype="multipart/form-data">
<input type="file" name="filetoupload"><br>
<input type="submit">
</form> */}