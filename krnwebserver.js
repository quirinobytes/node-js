
var http = require('http');
var fs = require('fs');

console.log("Quirino's Web Server started");

http.createServer(function (req, res) {
  
  	//res.write(req.hearders);
    console.log(console.time() + "A: " + req.headers.host + " | " + req.method + " | " + req.url);
    //console.log(req.headers);
	if (req.url == "/favicon.ico"){
			fs.readFile('favicon.ico',function(err, data){
				res.writeHead(200, {'Content-Type': 'text/plain'});
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
 
	if (req.url == "/logs")
			fs.readFile('logs.html',function(err, data){
			res.writeHead(200, {'Content-Type': 'text/html'});
			//res.emit("sds");
			res.end(data);
		});
 
	if (req.url == "/menu")
			fs.readFile('menu.html',function(err, data){
			res.writeHead(200, {'Content-Type': 'text/html'});
			//res.emit("sds");
			res.end(data);
		});
 
}).listen(80, '0.0.0.0');

console.log('Server running at http://0.0.0.0:80/');