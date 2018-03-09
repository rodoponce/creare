//Sepuede Inicializar el require, se deja como implementacion vacia.
var io = require('socket.io')();
io.sockets.on('connection',function(socket){
    //TODO
});
//Se exporta para poderlo utilizar en cualquier otro programa.
module.exports=io;