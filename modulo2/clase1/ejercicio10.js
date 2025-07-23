/*Crea una función que reciba una cadena de texto y devuelva otra cadena
con las palabras en orden inverso.*/
let invertirFrase=(frase)=>{
    frase=frase.split(` `);
    frase.reverse();
    return frase.join(` `);
}

let frase="Aprender a programar es divertido";
console.log(invertirFrase(frase));