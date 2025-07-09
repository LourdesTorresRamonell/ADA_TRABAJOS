/*Solicita al usuario cinco calificaciones y usa una función flecha para calcular
el promedio*/

const prompt = require('prompt-sync')({ sigint: true });

let calificacion1=Number(prompt(`Ingrese la calificacion: `));
let calificacion2=Number(prompt(`Ingrese la calificacion: `));
let calificacion3=Number(prompt(`Ingrese la calificacion: `));
let calificacion4=Number(prompt(`Ingrese la calificacion: `));
let calificacion5=Number(prompt(`Ingrese la calificacion: `));

const sacarPromedio = (c1, c2, c3, c4, c5) => (c1 + c2 + c3 + c4 + c5) / 5;

let resultado=sacarPromedio(calificacion1,calificacion2,calificacion3,calificacion4,calificacion5);
console.log(`el promedio es: ${resultado}`);