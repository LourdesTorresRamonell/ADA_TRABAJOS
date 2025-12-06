interface libro{
    titulo: string;
    autor: string;
    anioPublicacion: number;
}

let milibro:libro={
    titulo:`Still With You`,
    autor:`Lily Del Pilar`,
    anioPublicacion:2021
}

console.log(`Titulo: ${milibro.titulo}
    Autor: ${milibro.autor}
    Año de publicacion: ${milibro.anioPublicacion}`);