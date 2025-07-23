/*Pida al usuario que ingrese un número.
2. Verifique si el número es positivo, negativo o igual a cero.
3. Muestre un mensaje indicando cuál es el caso.*/

const prompt = require('prompt-sync')({ sigint: true});

let numero = parseFloat(prompt("Ingrese un numero: "));
if (isNaN(numero))
    console.log("No es un numero");
if (numero > 0)
    console.log("su numero es positivo ");
if(numero === 0)
    console.log("su numeroes igual a cero");
if (numero < 0)
    console.log("su numero es negativo");

