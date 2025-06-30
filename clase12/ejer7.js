/*Declara una variable que contenga una matriz de 5x5 llena de puros números
enteros y positivos. Luego, escribe un algoritmo para sumar todos los números
en la matriz.*/

let matriz= [
    [25, 34, 5, 67, 78],
    [12, 78, 93, 75, 63],
    [45, 65, 78, 36, 55],
    [68, 34, 45, 57, 97],
    [45, 68, 28, 66, 86]
];
 let sumar=0;

for(let fila=0;fila<matriz.length;fila++){
    for(let columna=0;columna<matriz[fila].length;columna++){
       sumar=sumar+matriz[fila][columna];
    }
}

console.log(`La suma da: ${sumar}`);