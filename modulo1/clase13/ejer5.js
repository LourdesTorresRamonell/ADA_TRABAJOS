/*Crea una función expresada llamada concatenarNombres que reciba dos
nombres (nombre y apellido) como parámetros y devuelva el nombre
completo concatenado.*/

const prompt = require('prompt-sync')({ sigint: true});

let concatenarNombres=function(nombre,apellido){
    return nombre+` `+apellido
}

let nombre=prompt(`Ingrese su nombre `);
let apellido=prompt(`Ingrese su apellido `);

let completo=concatenarNombres(nombre,apellido);
console.log(completo);