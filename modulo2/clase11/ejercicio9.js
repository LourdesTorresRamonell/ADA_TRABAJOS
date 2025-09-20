const readlineSync=require(`readline-sync`);
const peso=parseFloat(readlineSync.question(`Ingresa tu peso en kg: `));
const altura=parseFloat(readlineSync.question(`Ingresa tu altura en mentros: `));

console.log(`Tu IMC es: ${peso/(altura*altura)}`);