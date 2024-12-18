const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('Un usuario se ha conectado');

  socket.on('disconnect', () => {
    console.log('Un usuario se ha desconectado');
  });

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); 
  });
});

server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});