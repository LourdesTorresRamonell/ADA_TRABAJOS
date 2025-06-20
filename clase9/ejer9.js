/*Define una constante PI con el valor de pi (3.14159). Pide al usuario
que ingrese el radio de un círculo y calcula su área y perímetro
utilizando la constante PI*/

const prompt = require('prompt-sync')({ sigint: true});
const pi= 3.14159;
let area;
let perimetro;
let radio=parseFloat(prompt("Ingrese el area de su circulo "));

if (isNaN(radio)){
    console.log("El ingreso debe ser numerico ");
}else{
    area=pi*(radio^2);
    perimetro=2*pi*radio;
    console.log(`El area de su circulo es: ${area}, y su perimetro es ${perimetro}`);
}