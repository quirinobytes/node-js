/* KRNGET */
var http = require ("http");
var dateFormat = require('dateformat');
var colors = require('colors');

var debug = true;
var keepalive = true;
var verbose = true;

var now = new Date();
var start = process.hrtime(); //marca o exato momento do inicio do processo, tipo para usar em um cronometro.

console.log("KRNGET 0.1");

console.log("\n\n" + dateFormat(now,"hh:MM:ss dd/mm/yy") + " || GET http://" + process.argv[2] + "/");
// if (process.argv.indexOf("-v"))
// 	verbose = true;


if (keepalive)
	var options = {  hostname: '',  port: 80,  path: '/',  method: 'GET', connection: 'keep-alive'}; //usar kee-alive, alguns servidores nao respeitam
else
	var options = {  hostname: '',  port: 80,  path: '/',  method: 'GET', agent: false}; //nao usar kee-alive, alguns servidores nao respeitam


options['hostname'] = process.argv[2];

if (verbose) console.log(options);


var result = 	http.get(options, function(res) {
  				if (verbose) console.log("\nLOG: " + dateFormat(now,"hh:MM:ss dd/mm/yy"));
  				if (verbose) process.stdout.write(("Got response: " + res.statusCode + " em: ").blue); 
  				if (verbose) elapsed_time();
  				
  				console.log("Headers");
          console.log(res.headers);
				
				

			}).on('error', function(e) {
				
				console.log(("Got error: " + e.message).red);
			
			}).on('close', function(socket) {
				if (debug)  elapsed_time(" >> Tempo gasto para finalizar a conexao TCP/IP devido ao keep-alive (TRUE/FALSE)");
				if (debug)  console.log(("Programa encerrado\n").yellow);
			
			}).on('data' , function(chunk) {
    			console.log(("BODY: " + chunk).blue );
  		}).on("socket", function (socket) { //tratando quando o socket chegar da conexao, faz  remover o agent, ou seja para ficar keep-alive eternity
          if (keepalive){ 
            socket.emit("agentRemove"); // mas logico somente se keepalive == true
            console.log("socket.emit(agentRemove);");
          }
          //socket.emit("agentRemove");
      }).on("disconnect",function(){
            console.log("Socket disconnected!");
      });


//funcao de Tempo Gasto, para determinar quanto tempo levou para executar determinadas partes do processo ou requisição, basta chamar elapsed_time("Com Nota ou sem");
var elapsed_time = function(note){
    var precision = 0; // 2 precisao decimal
    var elapsed = process.hrtime(start)[1] ; // divide by a million to get nano to milli
    if (note) {
    	console.log((process.hrtime(start)[0] + "," + elapsed.toFixed(precision) + " s ").green + note.blue);
    }else{
    	console.log((process.hrtime(start)[0] + "," + elapsed.toFixed(precision) + " s ").green);
    }
    start = process.hrtime(); // reset the timer
}