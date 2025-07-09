/*Escribe un programa en JavaScript para contar cuántas veces el usuario
menciona sus flores favoritas. Realiza las siguientes acciones:
1. Inicializa un array vacío para almacenar las flores favoritas.
2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y
agrega cada una al array manualmente (sin usar métodos como push).
3. Pregunta al usuario por una flor específica y verifica si está entre sus
favoritas.
4. Muestra por consola cuántas de las flores favoritas se mencionaron (esto
debe hacerse manualmente).*/
const prompt = require('prompt-sync')({ sigint: true });

let floresFavoritas=[];
let flor;

for(let i=0;i<=2;i++){
    flor=prompt(`Ingrese su flor favorita `);
    floresFavoritas[i]=flor;
}

let florEspecifica=prompt(`Ingrese una fllor a verificar `);

let contador=0;
for(i=0;i<3;i++){
    if(floresFavoritas[i]==florEspecifica){
        contador++;
    }
}

console.log(`La flor: ${florEspecifica} se menciona ${contador} vez en tus favoritas`)