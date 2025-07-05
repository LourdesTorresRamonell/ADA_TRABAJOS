/*Crea una función declarada llamada esPar que reciba un número y devuelva
"Es par" si el número es par o "Es impar" si el número es impar. Usa una
variable local para guardar el resultado*/

const prompt = require('prompt-sync')({ sigint: true});

function esPar(numero){
    let par
    if((numero%2)===0){
        par=`El número es par `;
    }else{
        par=`El número es impar `;
    }
    console.log(par);
}

let numero=Number(prompt(`Ingrese un número `));

if(isNaN(numero)){
    console.log(`Error: se debe ingresar un número `);
}else{
    esPar(numero);
}