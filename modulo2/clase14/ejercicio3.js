const crypto=require(`crypto`);
const readlineSync=require(`readline-sync`);

const key=crypto.randomBytes(32);
const iv=crypto.randomBytes(16);
const cipher=crypto.createCipheriv(`aes-256-cbc`, key, iv);

const entrada=readlineSync.question(`Ingrese el texto que desea hashear: `);
let textocifrado=cipher.update(entrada, `utf8`, `hex`);
textocifrado+=cipher.final(`hex`);
console.log(`Teto encriptado: `, textocifrado);

const descipher=crypto.createDecipheriv(`aes-256-cbc`, key, iv);
let tetodescifrado=descipher.update(textocifrado, `hex`, `utf8`);
tetodescifrado+=descipher.final(`utf8`);
console.log(`Texto descifrado: `, tetodescifrado);