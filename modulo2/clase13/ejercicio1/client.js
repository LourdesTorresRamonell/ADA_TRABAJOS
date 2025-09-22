const net=require(`net`);
const readline=require(`readline`);
const options={
    port:4000,
    host: `localhost`
};

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const libroRequest=(libroid)=>{
    const client=new net.Socket();

    client.connect(options, ()=>{
        console.log(`Conectado al servidor. Solicitado le informacion del libro`);
        client.write(libroid);
    });

    client.on(`data`, (data)=>{
        console.log(`Datos del servidor: `, data.toString());
        client.destroy();
    });

    client.on(`close`, ()=>{
        console.log(`Conexion cerrada`);
        rl.close();
    });

    client.on(`error`, (err)=>{
        console.log(`Se produjo un error: `, err);
        rl.close();
    });
};

rl.question(`Ingrese el ID del libro del cual desea obtener la informacion: `, (libroid) =>{
    libroRequest(libroid);
});