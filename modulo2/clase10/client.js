const net=require(`net`);
const readline=require(`readline-sync`);
const option={
    port:5000,
    host:`localhost`
}

const client=net.createConnection(option);

client.on(`connect`, ()=>{
    console.log(`Conectado al servidor con exito`);
    mandarMensaje();
});

client.on(`data`, (data)=>{
    console.log(`Respuesta del servidor: `, data.toString());
    mandarMensaje();
});

client.on(`error`, (err)=>{
    console.log(`Se produjo un error: `, err.message);
});

let mandarMensaje=()=>{
    const mensaje=readline.question(`Ingrese el mensaje que desea enviar al servidor: `);
    if(mensaje.toString()===`exit`){
        client.end();
    }else{
        client.write(mensaje);
    }
}