/*Escribe un programa que pida al usuario que ingrese tres números y
determine cuál es el mayor de los tres*/

const prompt = require('prompt-sync')({ sigint: true});

let numero1 = Number(prompt("Ingrese un número "));
let numero2 = Number(prompt("Ingrese un segundo numero "));
let numero3 = Number(prompt("Ingrese un terce número "));

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) 
    console.log("Uno de los ingresos no era un número");
else
    if (numero2<numero1 && numero3<numero1)
        console.log(`El primer numero ingresado ${numero1}, es mayor que el segundo ${numero2}, y que el tercero ${numero3}`);
    if (numero1<numero2 && numero3<numero2)
        console.log(`El segundo numero ingresado ${numero2}, es mayor que el primero ${numero1}, y que el tercero ${numero3}`);
    if (numero1<numero3 && numero2<numero3)
        console.log(`El tercer numero ingresado ${numero3}, es mayor que el primero ${numero1}, y que el segundo ${numero2}`);
