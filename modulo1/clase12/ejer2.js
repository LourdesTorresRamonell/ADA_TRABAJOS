/*Escribe un programa que solicite al usuario ingresar una contraseña.
Si la contraseña es incorrecta, debe volver a pedirla hasta que el usuario 
ingrese la correcta. La contraseña correcta es "1234".*/

const prompt = require('prompt-sync')({ sigint: true});

let contraseñaCorrecta = "1234";
let contraseña;

do{
    contraseña=prompt("ingrese la contraseña ");
    if(contraseña!==contraseñaCorrecta){
        console.log("La contraseña es incorrecta");
    }
}while(contraseña!==contraseñaCorrecta)

console.log("La contraseña es correcta");