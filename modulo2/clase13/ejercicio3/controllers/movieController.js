const { peliculaPorTitulo }=require(`../models/movieModel`);
const { peliculaRespose }=require(`../views/movieView`);

const peliculaRequest=(titulo)=>{
    const pelicula=peliculaPorTitulo(titulo);
    return peliculaRespose(pelicula);
}

module.exports={ peliculaRequest };