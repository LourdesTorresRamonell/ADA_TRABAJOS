const net=require(`net`);

const cliente=net.createConnection({port:5000},()=>{
    console.log(`Ya estas conectado al servidor!!`);
    cliente.write(`Hola servidor!!`);
});

cliente.on(`data`,(data)=>{
    console.log(`Datos recibidos del servidor: `, data.toString());
    cliente.end();
});
cliente.on(`end`, ()=>{
    console.log(`Desconectado del servidor `);
});