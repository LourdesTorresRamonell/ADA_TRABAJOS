const { write } = require("fs");
const net=require(`net`);
const path=require(`path`);

const server=net.createServer((socket)=>{
    console.log(`CLiete conectado`);
    socket.on(`data`, (data)=>{
        const inputPath=data.toString().trim();
        const baseName=path.basename(inputPath);
        const dirName=path.dirname(inputPath);
        const extName=path.extname(inputPath);

        const response=`Base del nombre: ${baseName}
        Directorio: ${dirName}
        Extecion del archivo: ${extName}`;

        socket.write(response);
    });

    socket.on(`end`, ()=>{
        console.log(`Cliente desconectado`);
    });
});

server.listen(8082, ()=>{
    console.log(`Servidor scuchando en el puerto 8082`);
});