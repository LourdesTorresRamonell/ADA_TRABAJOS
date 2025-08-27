require(`dotenv`).config();

const readline=require(`readline`);
const welcomeMessage=process.env.WELCOME_MESSAGE||`Bienvenido`;

console.log(welcomeMessage);

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question(`Ingresa la temperatura en grados celcius `, (celcius)=>{
    const fahrenheit=(parseFloat(celcius)*9)/5+32;
    console.log(`${celcius}°C son igual a ${fahrenheit}°F`);
    rl.close();
});

rl.on(`close`, ()=>{
    console.log(`Chauchi, hasta la proxima`);
    process.exit(0);
});