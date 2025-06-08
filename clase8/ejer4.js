/*Solicite al usuario que ingrese un número entero.
2. Determine si el número es par o impar.
3. Muestre un mensaje indicando si el número es par o impar.*/

const prompt = require('prompt-sync')({ sigint: true});

let numero = parseFloat(prompt("ingrese un número "));
let resultado = numero%2;

if (isNaN(numero))
    console.log ("no ingreso un numero");
else 
    if (resultado===0)
    console.log("su número es par ");
    else console.log("su número es impar ");