/*Crea un programa que solicite al usuario ingresar números continuamente
 hasta que el usuario ingrese un número negativo. Luego, imprime la suma de
  todos los números ingresados.*/

const prompt = require('prompt-sync')({ sigint: true});

let numeros
let suma=0

do{
    numeros=Number(prompt("Ingrese un numero ")); 
    if (isNaN(numeros)){
        console.log("Se deben ingresas números ");
    }else{
        suma=suma+numeros;
    }
}while(numeros>0)

console.log(`La suma de todos los números que ingreso es: ${suma}`);