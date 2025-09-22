const net=require(`net`);
const readline=require(`readline`);
const options={
    port:4001
}

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const requestHotel=(idHotel)=>{
    const client= new net.Socket();
    client.connect(options, ()=>{
        console.log(`Conetado al servidor`);
        client.write(idHotel);
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
}

rl.question(`Ingrese el ID del hotel que desee informacion: `, (idHotel)=>{
    requestHotel(idHotel);
});