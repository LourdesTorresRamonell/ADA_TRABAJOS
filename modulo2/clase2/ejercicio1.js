/*En este archivo, crea un objeto JSON que represente un libro. El objeto
debe tener las siguientes propiedades: titulo, autor, año, genero (puede
ser un array de géneros).
Instrucciones:
• Muestra en la consola el título y el autor del libro.
• Actualiza el año del libro a un valor más reciente.
• Añade una nueva propiedad llamada páginas que indique el número
de páginas del libro.
• Muestra el objeto actualizado en la consola.*/

let libro={
    titulo:"Still With You",
    autor:"Lily Del Pilar",
    anio:2021,
    genero:"Ficcion"
}

console.log("Título:", libro.titulo);
console.log("Autor:", libro.autor);
libro.anio =2025;
libro.paginas =368;
console.log("Libro actualizado:", libro);