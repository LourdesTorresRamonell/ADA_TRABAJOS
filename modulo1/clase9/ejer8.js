/*Pide al usuario que ingrese las longitudes de los tres lados de un
triángulo. Determina y muestra si el triángulo es equilátero, isósceles o
escaleno. (Investiga sobre los triángulos para determinar la formula)*/

const prompt = require('prompt-sync')({ sigint: true});

let long1=parseFloat(prompt("Ingrese la medida del el primier lado "));
let long2=parseFloat(prompt("Ingrese la longitud del segundo lado "));
let long3=parseFloat(prompt("Ingrese la medida del segundo lado "));

if(isNaN(long1) || isNaN(long2) || isNaN(long3)){
    console.log("Error, uno de los ingresos no era un numero");
}
else{
    if (long1===long2){
        if(long2===long3){
            console.log("Su triangulo es equilatero ");
        }else{
            console.log("Su teiangulo es isoceles ");
        }
    }else if(long2===long3){
        console.log("Su triangulo es isoceles ");
    }else if(long1===long3){
        console.log("Su triangulo es isoceles");
    }else {
        console.log("Su triangulo es escaleno");
    }
}
