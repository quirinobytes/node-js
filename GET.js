/* KRNGET */
var debug = true;

//marca o exato momento do inicio do processo, tipo para usar em um cronometro.
var start = process.hrtime();

//funcao de tempo gasto, para determinar quanto tempo levou para executar determinadas partes do processo.
var elapsed_time = function(note){
    var precision = 3; // 3 decimal places
    var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
    console.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + note); // print message + time
    start = process.hrtime(); // reset the timer
}	


console.log("KRNGET 0.1 Starting ... \n ARGV[2]=" + process.argv[2] + "\n\n");

var http = require ("http");
var dateFormat = require('dateformat');
var now = new Date();

var get = 	http.get("http://"+ process.argv[2] + "/", function(res) {
  				//console.log("ARGV[1]=" + process.argv[2] + "\n Got response: " + res.statusCode);
  				// console.log("\n\n>>> IMPRIMINDO response.headers >>> \n\n");
  				 
  				 console.log(now);
  				 console.log(dateFormat(now,"hh:MM:ss dd/mm/yy "));
  				 console.log(res.headers);
				
				if (debug)  elapsed_time("\n\nFinalizou a recepção dos dados, mas nao fechou a conexao por causa do keep-alive");

			}).on('error', function(e) {
					console.log("Got error: " + e.message);
			});

