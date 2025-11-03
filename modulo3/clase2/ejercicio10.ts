function listarLibros(libros:{titulo:string, autor:string}[]):void{
    libros.forEach(libro=> {
        console.log(`Titulo: ${libro.titulo}
    Autor: ${libro.autor}
**********************************************`);
    });
};

let libros=[
    {titulo:`Still Whit You`, autor:`Lily Del Pilar`},
    {titulo:`Los Ojos del Perro Siberiano`, autor:`Antonio Santa Ana`},
    {titulo:`El Extranjero`, autor:`Albert Camus`}
];

listarLibros(libros);