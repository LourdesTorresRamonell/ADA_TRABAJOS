/*Declara una variable nombre y pide al usuario que ingrese su nombre.
Verifica si el nombre ingresado es igual a tu nombre.*/

const prompt = require('prompt-sync')({ sigint: true});

const miNombre = "LOURDES";
let nombre = prompt("Ingrse su nombre ").toUpperCase(); 
//.toUpperCase() pone todo en mayuscula

if (miNombre === nombre) 
    console.log("SU nombre " + nombre + ", es igual al mio " + miNombre);
else console.log ("Su nombre "+ nombre  + ", no es igual al mio " + miNombre);
