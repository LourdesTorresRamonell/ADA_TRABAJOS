/*Escribe una función que reciba un array de números y devuelva un nuevo
array sin números repetidos.*/
let eliminarRepetidos=(array)=>{
    return [...new Set(array)];
}

let numeros=[1, 2, 3, 2, 4, 1, 5];
console.log(eliminarRepetidos(numeros));