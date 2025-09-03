const net=require(`net`);
const server=net.createServer((socket)=>{
    console.log(`Cliente conectado `);
    socket.setTimeout(10000);
    socket.on(`timeout`, ()=>{
        console.log(`tiempode espera alcanzado. La conexion se cerrara `);
        socket.end();
    });

    socket.on(`data`, (data)=>{
        console.log(`Datos recibidos: `, data.toString());
    });
});

server.listen(3000, ()=>{
    console.log(`Servidor escuchando puerto 3000`)
});