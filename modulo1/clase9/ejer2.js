/*Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con
valores numéricos de tu elección. Pide al usuario que ingrese un
número y verifica si está dentro del rango definido por las constantes.*/

const prompt = require('prompt-sync')({ sigint: true});

const RANGO_MAXIMO = 50;
const RANGO_MINIMO = 1; 

let numero = parseFloat(prompt("Ingrese un número "));
if (isNaN(numero))
    console.log ("no ingreso un numero");
else if (numero>RANGO_MINIMO && numero<RANGO_MAXIMO)
    console.log ("El número esta dentro del rango");
else console.log ("El número esta fuera del rango");