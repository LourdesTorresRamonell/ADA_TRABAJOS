const net=require(`net`);

const client=net.createConnection({port:5000}, ()=>{
    console.log(`Conectado al servidor`);
    client.write(`Hola servidor`);
});

const timeout=setTimeout(()=>{
    console.log(`Nos se recibio ninguna respuesta durante 10 segundos
        la conexion se cerrara`);
        client.destroy();
}, 10000);

client.on(`data`, ()=>{
    console.log(`Datos recibidos del servidor: `, data.toString());
    clearTimeout(timeout);
});