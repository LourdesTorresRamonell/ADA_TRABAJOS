/*Crea una función declarada llamada contarHasta que reciba un número y
use un bucle para imprimir todos los números desde 1 hasta ese número.*/

const prompt = require('prompt-sync')({ sigint: true});

function contarHasta(numero){
    for(let i=1;i<=numero;i++){
        console.log(i);
    }
}

let numero=Number(prompt(`Ingrese el numero el que desea contar: `));

if(isNaN(numero)){
    console.log(`Error: se debe ingresar un número `);
}else{
    contarHasta(numero);
}