const net=require(`net`);
let intentoFallidos=0;

let conectarCliente=()=>{
    if(intentoFallidos>=5){
        console.log(`Se alcanso el maximo de intentos fallidos`);
        return;
    }

    const client=net.createConnection({port:5000}, ()=>{
        console.log(`Conexion exitosa`);
        client.write(`Hola servidor`);
        intentoFallidos=0;
    });

    client.on(`data`, (data)=>{
        console.log(`Datos recibidos del servidor: `, data.toString());
    });

    client.on(`error`, (err)=>{
        console.log(`Se produjo un error: `, err.message);
    });

    client.on(`close`, ()=>{
        console.log(`Conexion cerrada. Intentaremos reconectar`);
        intentoFallidos++;
        setTimeout(conectarCliente, 2000);
    });
}

conectarCliente();