/*A partir del siguiente array de frases, escribe la función “procesarFrases”
que realice las siguientes tareas:
1. Convierta cada frase a minúsculas. Investigar el método
“.toLowerCase()” para este punto.
2. Divida cada frase en palabras.
3. Reemplace las palabras "malo" por "bueno".
4. Combine las palabras de cada frase en una nueva cadena separada
por espacios.
5. Devuelva un nuevo array con las frases modificadas.*/
let frases=[
    `El clima es MALO hoy`,
    `Este libro es muy MALO`,
    `El servicio aquí es MALO`
];
let procesarFrases=()=>{
    frases=frases.map(frase=>frase.toLowerCase());
    let palabraPorPalabra=frases.map(frase=>frase.split(` `));
    palabraPorPalabra=palabraPorPalabra.map(frase=>frase.map(palabra=>palabra===`malo`?`bueno`:palabra));
    palabraPorPalabra=palabraPorPalabra.map(frase=>frase.join(` `));
    console.log(palabraPorPalabra);
}

procesarFrases();