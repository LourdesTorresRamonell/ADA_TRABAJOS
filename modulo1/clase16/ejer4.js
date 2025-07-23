/*Dada una lista de números [1, 2, 3, 4], necesitamos calcular el resultado de
sumarlos todos juntos. Es decir, deberías obtener 1 + 2 + 3 + 4. Al finalizar,
imprime el total en la consola.*/
let lista=[1, 2, 3, 4, 5];
let suma=lista.reduce((acum,n)=>acum+n);
console.log(suma);