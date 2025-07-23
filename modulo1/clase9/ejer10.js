/*Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la
semana correspondiente. Si el número no está dentro de ese rango,
muestra un mensaje de error*/

const prompt = require('prompt-sync')({ sigint: true});

let numero = parseInt(prompt("Ingrese un número de 1 al 7: "));

if(isNaN(numero)){
    console.log("El ingreso debe ser numerico");
}else{
    switch (numero){
        case 1:
            console.log(`El número ${numero} corresponde al dia Domingo`);
            break;
        case 2:
            console.log(`El número ${numero} corresponde al dia Lunes`);
            break;
        case 3:
            console.log(`El número ${numero} corresponde al dia Martes`);
            break;
        case 4:
             console.log(`El número ${numero} corresponde al dia Miercoles`);
            break;
        case 5: 
            console.log(`El número ${numero} corresponde al dia Jueves`);
            break;
        case 6:
            console.log(`El número ${numero} corresponde al dia Viernes`);
            break;
        case 7:
            console.log(`El número ${numero} corresponde al dia Sabado`);
            break;
        default:
            console.log("El numero debe ser de 1 al 7 inclusive");
       }
}