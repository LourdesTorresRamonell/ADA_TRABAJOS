const net=require(`net`);
const { peliculaRequest }=require(`./controllers/movieController`);

const server=net.createServer((socket)=>{
    console.log(`Cliente conectado`);
    
    socket.on(`data`, (data)=>{
        const titulo=data.toString().trim();
        console.log(`Se pidenlos datos de la pelicula: ${titulo}`);

        const response=peliculaRequest(titulo);
        socket.write(response);
        socket.end();
    });

    socket.on(`end`, ()=>{
        console.log(`Cliente desconectado`);
    });

    socket.on(`error`, (err)=>{
        console.log(`Se produjo un error: `, err);
    });
});

server.listen(4002, ()=>{
    console.log(`Servidor escuchando en el puerto 4002`);
});