const net=require(`net`);
let conexiones=0;
const server=net.createServer((socket)=>{
    conexiones++;
    console.log(`Cliente conectado. Total de conexiones: ${conexiones}`);
    socket.on('close', () => {
        conexiones--;
        console.log(`Cliente desconectado. Total de conexiones: ${conexiones}`);
    });
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000.');
});