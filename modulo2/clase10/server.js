const net=require(`net`);
const server=net.createServer();

server.on(`connection`, (socket)=>{
    console.log(`Nuevo cliente conectado `+socket.remoteAddress+`-`+socket.remotePort);

    socket.on(`data`, (data)=>{
        console.log(`Mendaje de `+socket.remoteAddress+`-`+socket.remotePort+`: `+data.toString());
        socket.write(`Mensaje recibido`);
    });

    socket.on(`close`, ()=>{
        console.log(`Cliente desconectado: `+socket.remoteAddress+`-`+socket.remotePort); 
    });

    socket.on(`error`, (err)=>{
        console.log(`Se prudojo un error: `, err.message);
    });
});

server.listen(5000, ()=>{
    console.log(`Servidor escuchando al puerto 5000`);
});