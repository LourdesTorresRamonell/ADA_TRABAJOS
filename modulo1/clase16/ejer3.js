/*Tienes una lista de números [5, 8, 12, 20, 3]. Queremos encontrar el primer
número de la lista que sea mayor a 10. Recuerda que el resultado debe ser
únicamente el primer número que cumpla esta condición, no todos los
números que lo hagan.*/
let lista=[5, 8, 12, 20, 3];
let numero=lista.find(n=>n>10);
console.log(numero);