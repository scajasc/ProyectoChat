const { io } = require('../server'); //destrictor, funcion io

/*io.on('connection', (client)=>{ //los call back funcionan de manera asincrona 
    console.log('cliente en linea');

    client.on('disconnect', ()=>{ //los call back funcionan de manera asincrona 
        console.log('cliente en fuera de linea');
    });

    client.on('enviarMensaje', (data)=>{
        console.log(data);
    });
});*/

io.on('connection', (socket) => {
    console.log('cliente en linea' + socket.id);

    socket.on('disconnect', function(){
      io.emit('users-changed', {user: socket.nickname, event: 'left'});   
    });
   
    socket.on('set-nickname', (nickname) => {
      socket.nickname = nickname;
      io.emit('users-changed', {user: nickname, event: 'joined'});    
    });
    
    socket.on('add-message', (message) => {
      io.emit('message', {text: message.text, from: socket.nickname, created: new Date()});    
    });
  });

