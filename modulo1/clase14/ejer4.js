/*Solicita al usuario la cantidad de productos comprados y el precio unitario.
Usa una función flecha para calcular el total con descuento según la
cantidad.*/
const prompt = require('prompt-sync')({ sigint: true });

let precioTotal=(precioUnitario,cantidadDeProductos)=>{
    let descuento=0;
    if(cantidadDeProductos>=2 && cantidadDeProductos<=5){
        descuento=5;
    }else if(cantidadDeProductos>5 && cantidadDeProductos<=10){
        descuento=10;
    }else{
        descuento=20;
    }
    let calculoDeDescuento=(descuento*(precioUnitario*cantidadDeProductos))/100;
    let precioTotalConDescuento=(precioUnitario*cantidadDeProductos)-calculoDeDescuento;
    console.log(`Por la cantidad de productos: ${cantidadDeProductos}
        El descuento es de ${descuento}%
        por lo que el total queda en: $${precioTotalConDescuento}`);
}

let cantidadDeProductos=Number(prompt(`Ingrese la cantidad de productos que va a comprar `));
let precioUnitario=Number(prompt(`Ingrese el precio unitario `));

if(isNaN(cantidadDeProductos) || isNaN(precioUnitario)){
    console.log(`Los ingresos deben ser solo números `);
}else if(cantidadDeProductos===0 || precioUnitario===0){
    console.log(`Error, alguno de los ingresos fue 0`);
}else if(cantidadDeProductos===1){
    console.log(`No hay descuento por un solo producto el precio es ${precioUnitario}`);
}else{
    precioTotal(precioUnitario,cantidadDeProductos);
}