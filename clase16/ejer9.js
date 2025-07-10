/*Imagina que tienes una lista de palabras ['sol', 'luna', 'estrella']. Queremos
saber cuántas letras hay en total entre todas las palabras. Por ejemplo, 'sol'
tiene 3 letras, 'luna' tiene 4, y 'estrella' tiene 8. La suma total debería ser 15.*/
let listaDePalabras=[`sol`, `luna`, `estrella`];
let cantidadDeLetras=[];
for(let i=0;i<listaDePalabras.length;i++){
    cantidadDeLetras[i]=listaDePalabras[i].length;
}
console.log(`La cantidad de letras que hay por palabras son: ${cantidadDeLetras}`);
let cantidadTotal=cantidadDeLetras.reduce((acum,num)=>acum+num);
console.log(`Por lo que en total son: ${cantidadTotal} letras`);