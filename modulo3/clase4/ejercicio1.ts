let persona ={
    nombre:`Roxana`,
    edad: 46,
    ciudad: `San Antonio de Padua`
};

for (const propiedad in persona){
    if (Object.prototype.hasOwnProperty.call(persona, propiedad)){
        console.log(propiedad);
        console.log(persona[propiedad as keyof typeof persona]);
    }
}