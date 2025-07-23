/*Pide al usuario que ingrese su edad y verifica si es mayor o menor de
edad. Muestra un mensaje personalizado según el caso*/

const prompt = require('prompt-sync')({ sigint: true});

let edad = Number(prompt("Ingresa tu edad "));
let resta

if (edad>=18){
    console.log("Eres mayor de edad 😊");
}else{ 
    resta = 18-edad
    console.log("Aun te faltan " + resta + " años para ser mayor de edad");
}
