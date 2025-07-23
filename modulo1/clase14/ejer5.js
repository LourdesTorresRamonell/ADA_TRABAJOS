/*Solicita al usuario ingresar la marca de un auto y utiliza una función flecha
para verificar y mostrar si el auto es de origen nacional o importado.
Considera que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de
origen nacional.*/
const prompt = require('prompt-sync')({ sigint: true });

let origenDelAuto=(marca)=>{
    switch(marca){
        case "FORD":
        case "FIAT":
        case "CHEVROLET":     
            console.log(`El auto es de origen nacional `);
        break;
        default:
            console.log(`El auto es importado `);
            break;
    }
}

let marca=prompt(`Ingrese la marca del auto `);
let marcaEnMayuscula=marca.toUpperCase();
origenDelAuto(marcaEnMayuscula);