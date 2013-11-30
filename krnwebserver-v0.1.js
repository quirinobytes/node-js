
var http = require('http');
var fs = require('fs');

console.log("Quirino's Web Server started");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  console.log("A: " + req.headers.host + " | " + req.method + " | " + req.url);
  


  fs.readFile('index.html',function(err, data){
	//console.log(data);
	res.end(data);
    });
 // res.end('Já terminei o programa, so estou esperando ler o arquivo\n');
 
}).listen(80, '127.0.0.1');

console.log('Server running at http://127.0.0.1:80/');