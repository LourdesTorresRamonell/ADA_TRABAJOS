const { time } = require("console");
const net=require(`net`);

const cliente=net.createConnection({port:3000},()=>{
    console.log(`Ya estas conectado al servidor!!`);
    cliente.write(`Hola`);
});

cliente.on(`data`,(data)=>{
    console.log(`Datos recibidos del servidor: `, data.toString());
   // cliente.end();
});


/*
cliente.on(`end`, ()=>{
    console.log(`Desconectado del servidor `);
});*/