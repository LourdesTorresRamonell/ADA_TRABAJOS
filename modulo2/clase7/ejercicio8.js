const { Socket } = require("dgram");
const net=require(`net`);

const server=net.createServer((Socket)=>{
    console.log(`Cliente conectado`);
    let autentificacion=false;

    socket.write(`Ingrese su nombre de usuario: `);

    socket.on(`data`, (data)=>{
        if(!autentificacion){
            const input=data.toString().trim();
            if(input===`usuario:contraseña`){
                autentificacion=true;
                socket.write(`Autentificacion exitosa, puedes chatear  `);
            }else{
                socket.write(`Credenciales incorrectas.`);
                socket.end();
            }
        }else{
            socket.write(data.toString());
        }
    });

    socket.on(`end`, ()=>{
        console.log(`Cliente desconectado `);
    });
});

server.listen(3000, ()=>{
    console.log(`Servidor escuchando al puerto 3000`);
});