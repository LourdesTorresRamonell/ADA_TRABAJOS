/*Crea una función que reciba un array de números y devuelva un nuevo
array con los números ordenados de menor a mayor.*/
let ordenar=(array)=>{
    array.sort();
    return array;
}

let numeros=[5, 2, 9, 1, 7];
console.log(ordenar(numeros));