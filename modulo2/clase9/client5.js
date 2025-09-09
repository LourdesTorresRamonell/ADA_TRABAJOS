const net=require(`net`);

const client=net.createConnection({port:5000}, ()=>{
    console.log(`Conectada al servidor`);
    client.write(`Hola servidor`);
});

client.on(`data`, (data)=>{
    console.log(`Datos recividos del srevidor: `, data.toString());
});

client.on(`end`, ()=>{
    console.log(`El servidor cerror la conexion `);
});

client.on(`close`, ()=>{
    console.log(`Cerrando conexion `);
});

client.on(`error`, (err)=>{
    console.log(`Se produjo un error: `, err.message);
});

setTimeout(()=>{
    console.log(`Llamando unref()`);
    client.unref();
}, 10000);

setTimeout(()=>{
    console.log(`Llamando ref()`);
    client.ref();
}, 15000);

setTimeout(()=>{
    console.log(`Finalizando conexion `);
    client.end();
}, 20000);