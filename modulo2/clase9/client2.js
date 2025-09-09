const net=require(`net`);

const client=net.createConnection({port: 5000}, ()=>{
    console.log(`Conectado al servidor `);
    client.write(`Hola servidor`);
});

client.on(`data`, (data)=>{
    console.log(`datos recibidos: `, data.toString());
});

setTimeout(()=>{
    console.log(`Pausando recepcion de datos`);
    client.pause();
}, 3000);

setTimeout(()=>{
    console.log(`Reanudando la recepcion de datos`);
    client.resume();
}, 8000);

setTimeout(()=>{
    console.log(`Cerrando la conexion`);
    client.end();
}, 15000);