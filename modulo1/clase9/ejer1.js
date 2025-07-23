/*Declara dos variables numéricas numero1 y numero2. Pide al usuario
que ingrese dos números y muestra cuál es mayor o si son iguales.*/

const prompt = require('prompt-sync')({ sigint: true});


let numero1 = parseInt(prompt(" Ingrese un numero ")); 
let numero2 = parseInt(prompt(" Ingrese un segundo numero "));

if (isNaN(numero1) || isNaN(numero2))
    console.log("Uno de los dos ingresos no es un numero");
else
    if (numero1==numero2) console.log(" el primer numero:" + numero1, "es igual al segundo:" + numero2);
    else if (numero1>numero2) console.log ("el primer numero:"+ numero1 ,"es mayor que el segundo:"+ numero2);
    else console.log ("el primer numero:" + numero1 ,"es menor que el segundo");
 