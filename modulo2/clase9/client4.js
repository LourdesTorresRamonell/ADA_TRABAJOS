const net=require(`net`);

const client=net.createConnection({port:5000}, ()=>{
    console.log(`Conectado con exito`);
    client.write(`Hola servidor`);
});

setInterval(()=>{
    console.log(`Enviano mensaje automatico`);
    client.write(`Menjase automatico`);
}, 5000);

setTimeout(()=>{
    console.log(`Cerrando conexion `);
    client.end();
}, 20000);