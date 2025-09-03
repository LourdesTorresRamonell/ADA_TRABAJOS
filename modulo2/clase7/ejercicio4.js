const { Socket } = require("dgram");
const net=require(`net`);
const server=net.createServer((socket)=>{
    console.log(`Cliente conectado`);
    socket.on(`error`, (err)=>{
        console.error(`Error de la conexion: ${err.message}`);
        socket.destroy();
    });
});
server.listen(3000, ()=>{
    console.log(`Servidor escuchando al purto 3000`);
});