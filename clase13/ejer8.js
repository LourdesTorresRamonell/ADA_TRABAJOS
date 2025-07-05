/*Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba
una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit.*/

const prompt = require('prompt-sync')({ sigint: true});

let convertirCelsiusAFahrenheit= function(celsius){
    let fahrenheit=0;
    fahrenheit=(celsius*(9/5))+32;
    return fahrenheit;
}

let temperatura=Number(prompt(`Ingresa los grados celcius `));
if (isNaN(temperatura)){
    console.log(`Error: se debe ingresar un número `);
}else{
    let temoarutaConvertida=convertirCelsiusAFahrenheit(temperatura);
    console.log(temoarutaConvertida);
}