/*Dada una matriz, recorrer sus valores y sumar solo los números que estén 
por encima o sean iguales a 10, pero menores que 1000.*/
const prompt = require('prompt-sync')({ sigint: true});

let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];
let suma=0;

for (let fila=0;fila<matriz.length;fila++){
    for(let columna=0;columna<matriz[fila].length;columna++){
        if(10<=matriz[fila][columna] && matriz[fila][columna]<1000){
            suma=suma+matriz[fila][columna];
            console.log(suma)
        }
    }
}
console.log(`La suma de los numeros majores a 10 y menores que 100 es: ${suma}`);
