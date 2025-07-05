/*Crea una función expresada llamada calcularFactorial que reciba un número
y devuelva su factorial.*/

const prompt = require('prompt-sync')({ sigint: true});

let calcularFactorial=function(numero){
    let total=1;
    for(let i=numero;i>0;i--){
       total= total*i;
       
    }
    console.log(total); 
}

let numero=Number(prompt(`Ìngrese el número del que quiera saber el factorizado: `));

if(isNaN(numero)){
    console.log(`Error: se debe ingresar un número`);
}else{
    calcularFactorial(numero);
}