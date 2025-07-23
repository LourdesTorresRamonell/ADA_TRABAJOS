/*Pide al usuario que ingrese una oración. Luego, escribe la función
“procesarOracion” que haga lo siguiente:
1. Quite los espacios en blanco al principio y al final.
2. Divida la oración en palabras.
3. Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar
“/a/g” que indica que se debe buscar todas las apariciones del
carácter 'a' en la cadena (la bandera g es para global, lo que
significa que reemplazará todas las apariciones, no solo la primera).
4. Encuentre la posición de la primera aparición de la palabra
"javascript". De no aparecer retornar -1
5. Convierta la oración a una cadena de palabras separadas por
guiones.*/
const prompt = require('prompt-sync')({ sigint: true });

let oracion=prompt(`Ingrese una oracion: `);

let procesarOracion=()=>{
    oracion=oracion.trim();
    let oracionDividida=oracion.replace(/a/g,`@`);
    oracionDividida=oracionDividida.split(` `);
    let posicionDePalabra=oracionDividida.indexOf(`javascript`);
    oracion=oracionDividida.join(`-`);
    if(posicionDePalabra=!-1){
        console.log(`La palabra javascript esta en la posicion ${posicionDePalabra}`);
    }else{
        console.log(`La palabra javascript no se encuentra en la oracion `);
    }
    console.log(oracion);
}

procesarOracion();