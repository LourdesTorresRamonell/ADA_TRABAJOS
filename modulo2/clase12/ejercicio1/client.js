const net=require(`net`);

const client=net.createConnection({port:8080}, ()=>{
    console.log(`Conectado al servidor`);
    client.write(`documento.txt`);
    client.write(`/otra/ruta`);
    client.write(`/casa/usuario/carpeta/documento.txt`);
});

client.on(`data`, (data)=>{
    console.log(data.toString());
    client.end();
});

client.on(`end`, ()=>{
    console.log(`Desconectadose del servidor`);
});