const net=require(`net`);
const fs=require(`fs`);
const { buffer } = require("stream/consumers");

const server=net.createServer((socket)=>{
    let fileData=buffer.alloc(0);
    let fileSize=0;

    console.log(`Cliente conectado`);

    socket.on(`data`, (data)=>{
        fileData=buffer.concat([fileData, data]);
        fileSize+=data.length;

        if(fileSize>1048576){
            socket.write(`El archivo exede 1MB`);
            socket.end();
            return;
        }
        
        socket.write(`Bytes recibidos ${fileSize}`);
    });

    socket.on(`end`, ()=>{
        if(fileSize<=1048516){
            fs.writeFile(`archivo_recibido.txt`, fileData, (err)=>{
                if(err){
                    console.errror(`Se produjo un error al guardar el archivo: `,err);
                }else{
                    console.log(`Archivo guerdado`);
                }
            });
        }
    });

    socket.on(`error`, (err)=>{
        console.error(`Error en la conexion: `, err);
    });
}); 

server.listen(3000, ()=>{
    console.log(`Servidor escuchando al puerto 3000`);
});