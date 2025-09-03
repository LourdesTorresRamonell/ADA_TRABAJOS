const net=require(`net`);
const server=net.createServer((socket)=>{
    console.log(`Cliente conectado`);
    socket.on(`data`, (data)=>{
        console.log(`Datos recibos: `, data.toString());
        socket.write(data);
    });

    socket.on(`end`, ()=>{
        console.log(`Cliente desconectado`);
    });

    socket.on('close', () => {
        console.log('Conexión cerrada');
    });
});
server.listen(3000, ()=>{
    console.log(`Servidor escuchando puerto 3000`);
});