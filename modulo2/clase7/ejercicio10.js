const { Socket } = require("dgram");
const net=require(`net`);

const server=net.createServer((socket)=>{
    console.log(`Cliente conectado `);
    const historial=[];

    if(historial.length>0){
        socket.write(`Historial de mensajes: `);
        historial.forEach((mnsg, index)=>socket.write(index+1, `- `, mnsg));
    }else{
        socket.write(`No hay historial de mensajes`);
    }

    socket.on(`data`, (data)=>{
        historial.push(data.toString().trim());
        if(historial.length>10){
            historial.shift();
        }
        socket.write(`Mensaje recibido: ${data.toString()}`);
    });

    socket.on(`end`, ()=>{
        console.log(`Cliente desconectado`);
    });
});

server.listen(3000, ()=>{
    console.log(`Servidor escuchando al puerto 3000`);
});