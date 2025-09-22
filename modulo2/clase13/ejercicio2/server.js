const net=require(`net`);
const { hotelRequest }=require(`./controllers/hotelController`);

const server=net.createServer((socket)=>{
    console.log(`Cliente conectado`);
    socket.on(`data`, (data)=>{
        const idhotel=data.toString().trim();
        console.log(`Recibimos solicitud pala el hotel: ${idhotel}`);
        const respose=hotelRequest(idhotel);
        socket.write(respose);
        socket.end();
    });

    socket.on(`end`, ()=>{
        console.log(`Cliente desconectado`);
    });

    socket.on(`error`, (err)=>{
        console.log(`Se produjo un error: `, err);
    });
});

server.listen(4001, ()=>{
    console.log(`Servidor escuchando al puerto 4001`);
});