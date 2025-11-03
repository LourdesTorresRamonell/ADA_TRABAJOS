function crearLibro(titulo:string, autor:string, paginas:number):{titulo:string, autor:string, paginas:number}{
    return {titulo,autor,paginas};
}

const libro1=crearLibro("Still Whit You", "Lily Del Plar", 368);
const libro2=crearLibro("Los ojos del perro siberiano", "Antonio Santa Ana", 136);

console.log(libro1);
console.log(libro2); 