const crypto=require('crypto');
const readlineSync= require('readline-sync');

let contraseñaConSalt=(contraseña, salt)=>{
    const combinar=contraseña+salt;

    const hash=crypto.createHash('sha256');
    hash.update(combinar);
    return hash.digest('hex');
}

let contraseña=readlineSync.question('Introduce tu contrasenia: ');
let salt=readlineSync.question('Introduce el "sal": ');
const ContraseñaHashe=contraseñaConSalt(contraseña, salt);
console.log('Hash generado:', ContraseñaHashe);