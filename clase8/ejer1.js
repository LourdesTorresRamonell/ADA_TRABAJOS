/*En este ejercicio, practicarás el uso de variables y operadores aritméticos. Debes
escribir un programa en JavaScript que:
1. Solicite al usuario que ingrese un número cualquiera.
2. Calcule el doble de ese número.
3. Muestre el resultado en la consola*/

const prompt = require('prompt-sync')({ sigint: true});

let numero =parseFloat(prompt("Ingrese un número de cual quiera seber su doble: "));
let doble = (numero*2);
console.log ("el doble de su número es "+ doble);
