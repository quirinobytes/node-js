var http = require("http");

//Declarando options que vai definir como será feita o request ao servidor PROXY.
var options = {
    port: 1337,
    hostname: '127.0.0.1',
    method: 'CONNECT',  
    path: 'www.bb.com:80'
  };


var req = http.request(options);
  req.end(); // fazendo a requisicao acontecer. Conectando na porta 1337 do servidor 127.0.0.1

//adicionando uma funcao de callback ao event CONNECT
  req.on('connect', function(res, socket, head) {
    console.log('got connected!');

    // fazendo a requisicao ao TUNNEL HTTP
    //socket.write('GET / HTTP/1.1\r\n' +
    //             'Host: www.bb.com:80\r\n' +
     //            'Connection: close\r\n' +
    //             '\r\n');
  socket.write("GET / HTTP/1.1\n\n");
    socket.on('data', function(chunk) {
      console.log(chunk.toString());
    });
    socket.on('end', function(){
      console.log("Fechou o socket");
      
     // proxy.close();
    });
  });

    //tratando o evento Error do req HTTP ao servidor Proxy na 1337, se o proxy nao estiver de pé, tratamos o erro aqui.
    req.on('error',function (res){
      console.log("Nao pode se conectar ao servidor proxy\n" + "Proxy Server= " + options.hostname + ":" + options.port);


    });