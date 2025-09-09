const net=require(`net`);
const readline=require(`readline`);

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client=net.createConnection({port:5000}, ()=>{
    console.log(`Conectando al servidor. Escribe un comando: `);
});

client.on(`data`, (data)=>{
    console.log(`Datos del del servidor: `, data.toString());
    if(data.toString().trim()===`EXIT`){
        console.log(`Cerrando conexion por pedido del servidor`);
        client.end();
        rl.close();
    }
});

client.on(`error`, (err)=>{
    console.log(`Se produjo un error: `, err.message);
});

client.on(`close`, ()=>{
    console.log(`Conexion cerrada`);
    rl.close();
});

rl.on(`line`, (input)=>{
    const comendo=input.trim().toUpperCase();
    if(/^CMD_\w+$/.test(comendo)){
        client.write(comando);
    }else{
        console.log(`Comando invalido. Se debe usar el formato: CMD_ALGO`);
    }
});