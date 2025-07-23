/*Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una
función flecha para calcular el precio final*/

const prompt = require('prompt-sync')({ sigint: true })

let precioDelProducto=Number(prompt(`Ingresa el valor del producto `));
let iva=Number(prompt(`Ingresa el porcentaje de IVA `));

let calcularIva=(precioDelProducto,iva)=>((iva*precioDelProducto)/100)+precioDelProducto;

if(isNaN(precioDelProducto) || isNaN(iva)){
    console.log(`Error: ambos ingresos deber ser numericos y el iva no precisa del %`);
}else{
    console.log(calcularIva(precioDelProducto,iva));
}

