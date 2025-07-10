/*Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript'].
Queremos transformarlas para que cada palabra tenga un prefijo "¡" y un
sufijo "!". Por ejemplo, la palabra "hola" se debería convertir en "¡hola!"*/
let lista=[`Hola`, `mundo`, `javascript`];
let listaConSignos=lista.map(lista=>`!${lista}!`);
console.log(listaConSignos);