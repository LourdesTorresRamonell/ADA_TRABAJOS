const net=require(`net`);
const path=require(`path`);

const server=net.createServer((socket)=>{
    console.log(`Cliente conectado`);

    socket.on(`data`, (data)=>{
        const inputPath=data.toString().trim();
        const normalizePath=path.normalize(inputPath);
        socket.write(normalizePath);
    });

    socket.on(`end`, ()=>{
        console.log(`Cliente desconectado`);
    });
});

server.listen(8081,()=>{
    console.log(`servidr escuchando al puerto 8081`);
});