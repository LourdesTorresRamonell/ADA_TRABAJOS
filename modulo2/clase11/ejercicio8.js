const readlineSync=require(`readline-sync`);
const sujetos=[`La mama`, `El perro`, `El pez`, `La vecina`];
const verbos=[`hace burbujas`, `cocina`, `juega`, `pinta`];
const complementos=[`en la cocina`, `en el parque`, `en el living`, `en la computadora`];
const numDeFrases=readlineSync.questionInt(`Cuanatas frase desea generar: `);

for(let i=0;i<numDeFrases;i++){
    const sujeto=sujetos[Math.floor(Math.random()*sujetos.length)];
    const verbo=verbos[Math.floor(Math.random()*verbos.length)];
    const complemento=complementos[Math.floor(Math.random()*complementos.length)];
    console.log(`${sujeto} ${verbo} ${complemento}.`);
}