const net=require(`net`);
const server=net.createServer((socket)=>{
    console.log(`Cliente conectado`);
    socket.on(`data`, (data)=>{
        const message=data.toString();
        if(message===`Hola`){
            console.log(`Bienvenido `);
        }else if(message===`Adios`){
            console.log(`¡Hasta luego!`);
        }else{
            console.log(`Mensage recibido: ${message}`);
        }
    });
});

server.listen(3000, ()=>{
    console.log(`Servidor escuchando al puerto 3000`);
});