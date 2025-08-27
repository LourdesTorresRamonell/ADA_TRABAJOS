require(`dotenv`).config();
const readline=require(`readline`);
const startMensage=process.env.START_MENSSAGE||`Bienvenidos`;
console.log(startMensage);

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question(`¿Como te llamas? `, (nombre)=>{
    console.log(`Que tengas buen dia ${nombre}`);
    rl.close();
});

rl.on(`close`,()=>{
    process.exit(0);
});