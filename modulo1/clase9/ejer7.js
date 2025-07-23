/*Pide al usuario que ingrese su peso en kilogramos y conviértelo a
libras. Muestra el resultado con un mensaje. (Averigua como pasar de
kg a libras, Pista: 2.20462*/

const prompt = require('prompt-sync')({ sigint: true});

let kg = parseFloat(prompt("ingrese su peso en en kg "));
let libras

if (isNaN(kg)){
    console.log("Error, se debe ingreser un número");
}
else{
    libras=kg*2.20462
    console.log("Su peso en libras es: "+libras);
}