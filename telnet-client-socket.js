to tentando arrumar esse telnet client
//var io = require("net.io");


  var socket = io.connect('http://localhost/');
  socket.on('connect', function () {
    socket.send('hi');

    socket.on('message', function (msg) {
      // my msg
    });
  });
