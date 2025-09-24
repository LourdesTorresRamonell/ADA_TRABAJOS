const crypto=require(`crypto`);
const readlineSync=require(`readline-sync`);

const texto=readlineSync.question(`Ingrese el texto que desee hashear: `);
const hash=crypto.createHash(`sha256`);
hash.update(texto);
const hashOutput=hash.digest(`hex`);
console.log(`El hash de SHA256 es: `, hashOutput);
