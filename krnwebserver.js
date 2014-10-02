
var http = require('http');
var fs = require('fs');

console.log("Quirino's Web Server started");

http.createServer(function (req, res) {

        //res.put(req.hearders);
    console.log(console.time() + "A: " + req.headers.host + " | " + req.method +
 " | " + req.url);

        if (req.url == "/favicon.ico"){
                        fs.readFile('favicon.ico',function(err, data){
                                res.writeHead(200, {'Content-Type': 'text/plain'
});
                                res.end(data);
                                console.log("FAVORITE ICON now!");
                                //console.log(data);
                        });

        }

        if (req.url == "/")
                        fs.readFile('index.html',function(err, data){
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        //res.emit("sds");
                        res.end(data);
                });
 // res.end('Já terminei o programa, so estou esperando ler o arquivo\n');

}).listen(80, '0.0.0.0');

console.log('Server running at http://127.0.0.1:80/');