let valorDesconocido:unknown;
valorDesconocido=6;
if (typeof valorDesconocido==="string"){
    console.log(`El valor es una cadena: ${valorDesconocido}`);
}if(typeof valorDesconocido==="number"){
    console.log(`El valor es un number: ${valorDesconocido}`);
}