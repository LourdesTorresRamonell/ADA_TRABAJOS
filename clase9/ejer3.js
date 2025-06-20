/*Declara dos variables booleanas condicion1 y condicion2. Pide al
usuario que ingrese dos valores booleanos (true o false) y muestra el
resultado de diversas combinaciones lógicas.*/

const prompt = require('prompt-sync')({ sigint: true});

let input1 = prompt("Ingrese el primer valor booleano (true o false):");
let input2 = prompt("Ingrese el segundo valor booleano (true o false):");

let condicion1 = input1.toLowerCase() === "true"; //lo convierte a booleano
let condicion2 = input2.toLowerCase() === "true";

console.log("condicion1 AND condicion2:", condicion1 && condicion2);
console.log("condicion1 OR condicion2:", condicion1 || condicion2);
console.log("NOT condicion1:", !condicion1);
console.log("NOT condicion2:", !condicion2);