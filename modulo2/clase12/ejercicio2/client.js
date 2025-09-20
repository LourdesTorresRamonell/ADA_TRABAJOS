const net=require(`net`);

const client=net.createConnection({port:8081}, ()=>{
    console.log(`Conectado al servidor`);
    client.write(`./documentos/../archivo.txt`);
    client.write(`documentos/./archivo.txt`);

});

client.on(`data`,(data)=>{
    console.log(`Ruta noremalizada: `, data.toString());
    client.end();
});

client.on(`end`, ()=>{
    console.log(`Desconectado del servidor`);
});