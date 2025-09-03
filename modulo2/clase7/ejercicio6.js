const net=require(`net`);
const server=net.createServer((socket)=>{
    console.log(`Cliente conectado `);
    socket.on(`data`, (data)=>{
        let comando=data.toString().trim();

        switch(comando){
            case `fecha`:
                socket.write(new Date().toLocaleString());
                break;
            case `ip`:
                socket.write(socket.remoteAddress);
                break;
            case `salir`:
                socket.write(`Cerrando la conexion `);
                socket.end;
                break;
            default:
                socket.write(`Comando no reconocido`);
        }

    });

    socket.on(`end`, ()=>{
        console.log(`Cliente desconectado`);
    });
});

server.listen(3000, ()=>{
    console.log(`Servidor escuchando puerto 3000`);
});