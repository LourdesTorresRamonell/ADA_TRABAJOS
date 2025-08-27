const readline=require(`readline`);

rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question(`Introduce el primer numero: `, (num1)=>{
    rl.question(`Introduce el segudo: `, (num2)=>{
        suma=parseFloat(num1)+parseFloat(num2);
        console.log(`La suma de ${num1} y ${num2}, da: ${suma}`);
        rl.close();
    });
});

rl.on('close', () => {
    console.log('Que tengas un buen dia ');
    process.exit(0);
});