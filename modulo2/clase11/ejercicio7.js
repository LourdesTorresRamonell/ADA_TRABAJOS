const readlineSync=require(`readline-sync`);
const dolares=parseFloat(readlineSync.question(`Ingresa la cantidad de dolares a convertir: `));
const euros=dolares*0.85;
console.log(`${dolares} doleres son igual a ${euros} euros`);