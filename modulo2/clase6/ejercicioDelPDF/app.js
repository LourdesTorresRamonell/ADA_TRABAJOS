/*1. Crea un archivo llamado app.js en Visual Studio Code.
2. Escribe un programa que haga lo siguiente:
• Reciba el nombre del usuario desde la línea de comandos.
• Use una variable de entorno para personalizar el saludo predeterminado.
• Muestre información básica del entorno de ejecución:
• El directorio actual desde donde se ejecuta el programa.
• La plataforma del sistema operativo.
• Use el módulo readline para preguntarle al usuario su edad.
• Agradezca al usuario y termine de forma ordenada.
3. Crea un archivo .env para configurar un saludo personalizado.*/
const readline=require(`readline`);
require('dotenv').config();
const defaultGreeting = process.env.GREETING || 'Hola';
const args=process.argv.slice(2);
const userName=args[0]||`Invitado`;

console.log(defaultGreeting, userName, `!`);
console.log(`Informacion sobre el entorno de ejecucion: `);
console.log(`- Directorio actual: `, process.cwd());
console.log(`- Plataforma: `, process.platform);

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question(`¿Cuantos años tiene? `, (age)=>{
    console.log(`que linda epoca son los `, age);
    rl.close();
});

rl.on(`close`, ()=>{
    console.log(`Adiosss`);
    process.exit(0);
});