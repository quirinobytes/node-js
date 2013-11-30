var http = require('http');
var fs = require('fs');

console.log('vou ler');
fs.readFile('teste.mp4', function(err, data){
	console.log(data);
});
console.log('ja li');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');