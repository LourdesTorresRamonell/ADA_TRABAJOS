const net=require(`net`);
const client=net.createConnection({port:5000});

let conectarCliente=()=>{
    client.on(`connect`, ()=>{
        console.log(`Conexion establecida`);
        client.write(`Hola servidor `);
    });

    client.on(`data`, (data)=>{
        console.log(`Datos recibidos: `, data.toString());
    });

    client.on(`close`, ()=>{
        console.log(`Conexion cerrada, reintentando en 3 segundos `);
        setTimeout(conectarCliente, 3000);
    });

    client.on(`error`, (err)=>{
        console.log(`Se produjo un error: `, err.message);
    });
}

conectarCliente();