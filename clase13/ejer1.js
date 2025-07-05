/*Crea una función declarada llamada calcularAreaTriangulo que reciba dos
parámetros: la base y la altura de un triángulo. La función debe devolver el
área del triángulo.*/

const prompt = require('prompt-sync')({ sigint: true});

function calcularAreaTriangulo (base,altura){
    area=(base*altura)/2;
    console.log(`El area de su triangulo es: ${area}`);
}

let base=Number(prompt(`Ingrese la base de s triangulo: `));
let altura=Number(prompt(`Ingrese la altura de su triangulo: `));

if (isNaN(base) || isNaN(altura)){
    console.log(`Error, los ingresos deben ser numeros.`);
}else{
    calcularAreaTriangulo(base,altura);
};