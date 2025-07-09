/*Solicita al usuario una edad y usa una función flecha para clasificarla en
niño, adolescente, adulto o adulto mayor.*/

const prompt = require('prompt-sync')({ sigint: true });

let edad=Number(prompt(`Ingrese su edad `));

let clacificacion=(edad)=>{
    if(edad>=0 && edad<=11){
        console.log(`Eres un niño `);
    }else if(edad>11 && edad<=18){
        console.log(`Eres un adolecente `);
    }else if(edad>18 && edad<=59){
        console.log(`Eres un adulto `);
    }else{
        console.log(`Eres un adulto mayor `);
    }
}

if(isNaN(edad) || edad<0){
    console.log(`Error se debe ingresar un número, y debe ser positivo `);
}else{
    clacificacion(edad);
}