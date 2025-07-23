/*Crea una función que reciba una cadena de texto y devuelva cuántas
vocales contiene.*/
let contarVocales=(cadena)=> {
    let contador = 0;
    let vocales = "aeiouAEIOU"; 
    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }
    return contador;
}

let texto="Hola Mundo";
console.log(contarVocales(texto));