/* Pida al usuario que ingrese dos números.
2. Sume ambos números.
3. Muestre el resultado de la suma.*/
const prompt = require('prompt-sync')({ sigint: true});

let numero1 = parseFloat(prompt("ingrese un número "));
let numero2 = parseFloat(prompt ("ingrese el numero que desee sumar "));
let igual 

if (isNaN(numero1) || isNaN(numero2))
    console.log("Alguno de los ingresos no es un número");
else
    igual = numero1 + numero2;
    console.log("la suma da: " + igual);
