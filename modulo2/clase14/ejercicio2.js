const readlineSync=require(`readline-sync`);

const numEntrada=readlineSync.question(`Ingrse una lista de numeros separado por comas: `);
const numeros=numEntrada.split(`,`).map(num=>num.trim());
numeros.sort((a,b)=>a-b);
console.log(numeros);