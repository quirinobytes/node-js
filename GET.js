// var options = {
//   hostname: 'www.google.com',
//   port: 80,
//   path: '/',
//   method: 'GET'
// };
var http = require ("http");
while(1){
var get = 	http.get("http://192.168.137.1", function(res) {
  				console.log("Got response: " + res.statusCode);
			}).on('error', function(e) {
					console.log("Got error: " + e.message);
			});
}d