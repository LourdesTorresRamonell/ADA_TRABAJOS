const net=require(`net`);

const server=net.createServer((socket)=>{
    console.log(`Cliente conectado`);
    socket.on(`data`,(data)=>{
        console.log(`Datos recibidos: `, data.toString());
    });
    socket.on(`end`,()=>{
        console.log(`Cliente desconectado `);
    });
    socket.write(`Hola cliente!! `);
});

server.listen(5000, ()=>{
    console.log(`Servidor escuchando al puerto 5000 `);
});