const readline=require(`readline`);

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.setPrompt(`Escribe una palabra random o "salir" si deseas salir `);
rl.prompt();

rl.on(`line`, (input)=>{
    if(input.toLowerCase()===`salir`){
        console.log(`Que tengas buen dia`);
        rl.close();
    }else{
        console.log(`Tu palabra en mayusculas: ${input.toUpperCase()}`);
        rl.prompt();
    }
});

rl.on(`close`, ()=>{
    process.exit(0);
});