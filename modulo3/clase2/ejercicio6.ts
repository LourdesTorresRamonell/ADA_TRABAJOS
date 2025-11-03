function crearPersona(nombre:string, edad:number, pais:string):{nombre:string, edad:number, pais:string}{
    return {nombre, edad, pais};
}
const persona=crearPersona(`Nahuel`, 22, `Argentina`);
console.log(persona);