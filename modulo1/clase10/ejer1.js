/*Simular un sistema de ingreso a una nave espacial donde los tripulantes deben pasar
 filtros de validación usando variables, coerción, y operadores lógicos.
🧩 Desarrollo:
Pedí a tus alumnas que creen un script que haga lo siguiente:
nombre- edad - especie 
*/
const prompt = require('prompt-sync')({ sigint: true});

let nombre = prompt("Ingrese su nombre galactico:");
let edad = parseInt(prompt("Cual es tu edad terrestre:"));
let especie = prompt("Cual es tu especie:(humano, alien o cyborg) ");


//let Tienepermiso = prompt("Tienes permiso de ingreso? (si/no)");

let Tienepermiso = (edad>18 && especie!=="") || nombre === "Capitana";

const mensaje = Tienepermiso
 ? "Bienvenido a bordo " + (nombre || "tripulante desconocido") + "!"
 : "Acceso denegado, no se cumplen los requisitos";

console.log(mensaje);
 