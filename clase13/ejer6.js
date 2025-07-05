/*Crea una función declarada llamada convertirHorasAMinutos que reciba un
número de horas como parámetro y devuelva el total en minutos.*/

const prompt = require('prompt-sync')({ sigint: true});

function convertirHorasAMinutos(horas){
    let minutos=0
    minutos=horas*60;
    return minutos;
}

let horas=Number(prompt(`Ingrese una cantidad de horas `));
if(isNaN(horas)){
    console.log(`Error: se debe ingresar un número `);
}else{
    let horaAMinutos=convertirHorasAMinutos(horas);
    console.log(horaAMinutos);
}
 