const net=require(`net`);
const  clientes=[];

const server=net.createServer((socket)=>{
    clientes.push(socket);
    console.log(`Cliente conectado`);
    socket.write(`Bienvenido al chat`);
    
    clientes.forEach(cliente=>{
        if(cliente !==socket){
            cliente.write(`Se unio un nuevo usuario`);
        }
    });

    socket.on(`data`, (data)=>{
        const mensage=data.toString().trim();
        clientes.forEach(cliente=>{
            if(cliente!==socket){
                cliente.write(mensage);
            }
        });
    });

    socket.on(`end`, ()=>{
        clientes.splice(clientes.indexOf(socket),1);
        console.log(`Cliente desconectado`);
        clientes.forEach(cliente=>{cliente.write(`Un usuario abando el chat`)});
    });
});

server.listen(3000, ()=>{
    console.log(`Servidor escuchando al puerto 3000`);
});