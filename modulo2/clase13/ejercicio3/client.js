const net=require(`net`);
const readline=require(`readline`);
const options={
    port:4002,
    host: `localhost`
}

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const peliculaRequest=(titulo)=>{
    const client=new net.Socket();
    client.connect(options, ()=>{
        console.log(`Conectado al servidor`);
        client.write(titulo);
    });

    client.on(`data`, (data)=>{
        console.log(`Datos del servidor: `, data.toString());
        client.destroy();
    });

    client.on(`close`, ()=>{
        console.log(`Desconectado del servidor`);
        rl.close();
    });

    client.on(`error`, (err)=>{
        console.log(`Se produjo un error: `, err);
        rl.close();
    });
}

rl.question(`Ingrese el titulo de la pelicula del cual requiera iinformacion: `, (titulo)=>{
    peliculaRequest(titulo);
});