/*Escribe una función que reciba un array de palabras y un número, y
devuelva las palabras que tienen más caracteres que el número dado.*/
let filtrarPalabras=(array,numero)=>{
    let palabrasLargas=array.filter(p=>p.length>numero);
    return palabrasLargas;
}

let palabras=["javascript", "html", "css", "nodejs"];
console.log(filtrarPalabras(palabras,4));