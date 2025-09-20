const net=require(`net`);

const client=net.createConnection({port:8082}, ()=>{
    console.log(`Conectado al servidor`);
    client.write(`/casa/usuario/documentos/archivo.txt`);

});

client.on(`data`,(data)=>{
    console.log(`Informacion de la ruta: `, data.toString());
    client.end();
});

client.on(`end`,()=>{
    console.log(`Desconectandose del servidor`);
});