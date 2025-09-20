const readlineSync=require(`readline-sync`);

const contraseña = readlineSync.question('Ingresa la contraseña: ', {
    hideEchoBack: true 
});

if (contraseña === 'secreto123') {
    console.log('Acceso concedido.');
} else {
    console.log('Acceso denegado.');
}