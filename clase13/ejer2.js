/*Crea una función expresada llamada encontrarMayor que reciba dos
números como parámetros y devuelva el número mayor*/

const prompt = require('prompt-sync')({ sigint: true});

let encontrarMayor= function(numero1,numero2){
    if(numero1<numero2){
        return numero2;
    }else if(numero1>numero2){
        return numero1;
    }else {
        return `Los números son iguales`;
    }
}

let numero1=Number(prompt(`Ingrese un número `));
let numero2=Number(prompt(`Ingrese otro número `));

if (isNaN(numero1)||isNaN(numero2)){
    console.log(`Error: los dos ingresos deben ser números`);
}else{
    console.log(`El numero mayor es: ${encontrarMayor(numero1,numero2)}`);
}