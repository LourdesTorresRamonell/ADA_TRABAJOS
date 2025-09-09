const net=require(`net`);
const options={
    port: 5000,
    host:`localhost`
}
const client=net.createConnection(options);

client.on(`conect`, ()=>{
    console.log(`Conectado al servidor `);
    client.write(`Hola servidor`);
});

client.on(`data`, (data)=>{
    console.log(`Datos recividos: `, data.toString());
});

client.setTimeout(5000, ()=>{
    console.log(`Tiempo de espera agotado `);
    client.end();
});

client.on(`data`, (data)=>{
    console.log(`Datos recibidos: `, data.toString());
    client.pause();
    setTimeout(()=>{
        console.log(`Reanudando la recepcion de datos`);
        client.resume();
    }, 3000);
});

client.on(`error`, (err)=>{
    console.log(`Se produjo un error: `, err.message);
});

client.on(`close`, ()=>{
    console.log(`La conexion se cerro inesperadamente`);
});

client.on(`end`, ()=>{
    console.log(`El servidor cerro la conexion`);
});

const readline=require(`readline`).createInterface({
    input:process.stdin,
    output:process.stdout
});

function enviarMensaje(){
    readline.question(`Escribe un mensaje: `,(mnsg)=>{
        if(mnsg===`salir`){
            client.end();
            readline.close();
        }else{
            client.write(mnsg);
            enviarMensaje();
        }
    });
}
client.on(`connect`, enviarMensaje);

client.on(`error`, ()=>{
    console.log(`Conexion destruida`);
    client.destroy();
});

client.unref();
setTimeout(()=>{
    console.log(`Manteniendo el proceso activo con ref()`);
    client.ref();
}, 5000);

function recoonectar(){
    setTimeout(()=>{
        console.log(`Reintentando conexion`);
        client.connect(5000, `localhost`);
    }, 3000);
}

client.on(`error`, recoonectar);
client.on(`close`, recoonectar);

let timeuot=setTimeout(()=>{
    console.log(`No hay datos en el servior, cerrando conexion `);
    client.end();
}, 10000);

client.on(`data`, ()=>{
    clearTimeout(timeuot);
    timeuot=setTimeout(()=>{
        console.log(`No hay datos del servidor, se cerrara la conexion `);
        client.end();
    }, 10000);
});