let libro={
    titulo:`Sissi en la isla de madera`,
    autor:`Evelyne Lallemand`,
    aniPublicacion:1983,
    descripcion:function(){
        return `${this.titulo} es un libro escrito por ${this.autor}, y publicado en el año ${this.aniPublicacion}`;
    }
}

console.log(libro.descripcion());