/*Consigna: ¡Hola! Hoy serás una bibliotecaria digital. Debes crear un
programa que permita registrar libros favoritos en un archivo JSON.
Implementa las siguientes funciones:
1. Agregar un libro: Se debe agregar un libro a la lista de favoritos.
Para esto, el libro tendrá solo un campo: su nombre.
2. Listar los libros: Muestra todos los libros registrados.
Pistas:
• Usa un archivo JSON para guardar los libros.
• Si el archivo no existe, comienza con un arreglo vacío.*/

const prompt = require('prompt-sync')({ sigint: true});

const fs=require('fs');
const filePath='./listadoDeLibros.json'; 

const leerLibros=()=>{
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido);
};

const escribirLibros=(libros)=>{
    fs.writeFileSync(filePath, JSON.stringify(libros, null, 2));
};

const agregarLibro=(nombreLibro)=>{
    const libros=leerLibros();
    libros.push({ id: libros.length + 1, nombre: nombreLibro });
    escribirLibros(libros);
    console.log(`Libro agregado:"${nombreLibro}"`);
};

const listarLibros=()=>{
    const libros=leerLibros(); 
    console.log('Lista de libros favoritos:');
    libros.forEach(libro=>{
        console.log(`${libro.id}. ${libro.nombre}`);
    });
};

let nombre=prompt(`Ingrese el nombre del libro que desea agregar a la lista `)
agregarLibro(nombre);
listarLibros();