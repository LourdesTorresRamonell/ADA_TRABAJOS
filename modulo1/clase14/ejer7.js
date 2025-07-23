/*Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✔ título: una cadena con el título del libro.
✔ autor: una cadena con el nombre del autor del libro.
✔ anioPublicacion: un número con el año de publicación del libro.
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros
como parámetro y muestre por consola la información de cada libro en el
formato especificado*/

let libro1={
    titulo: "Still Whit You",
    autor: "Lily Del Pilar",
    anioPublicacion: 2021,
}
let libro2={
    titulo: "Still Whit Me",
    autor: "Lily Del Pilar",
    anioPublicacion: 2021,
}
let libro3={
    titulo: "Still Whit Us",
    autor: "Lily Del Pilar",
    anioPublicacion: 2023,
}

function mostrarLibros(libros){
    for(let i=0;i<libros.length;i++){
        console.log(`Libro ${i + 1}`);
    console.log(`Título: ${libros[i].titulo}`);
    console.log(`Autor: ${libros[i].autor}`);
    console.log(`Año de publicación: ${libros[i].anioPublicacion}`);
    console.log('***************************************************');
    }
}

mostrarLibros([libro1,libro2,libro3]);