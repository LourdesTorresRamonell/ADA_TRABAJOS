/*1. Solicite al usuario que ingrese su nombre.
2. Muestre un saludo personalizado usando el nombre ingresado.*/

const prompt = require('prompt-sync')({ sigint: true});

let nombre = prompt("ingrese su nombre ");
 console.log("Hola " + nombre + ", que tenga buen dia");