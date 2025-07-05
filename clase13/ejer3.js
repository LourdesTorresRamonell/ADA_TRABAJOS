/*Declara una variable global llamada saludoGlobal con el valor "Hola desde el
scope global". Luego, crea una función llamada mostrarMensaje que declare
una variable local llamada saludoLocal con el valor "Hola desde el scope
local" y que imprima ambos mensajes*/

const prompt = require('prompt-sync')({ sigint: true});

let saludoGlobal=`Hola desde el scope global `;

function mostrarMensaje(){
    let saludoLocal=`hola desde el scope local `;
    console.log(saludoGlobal);
    console.log(saludoLocal);
}

mostrarMensaje();