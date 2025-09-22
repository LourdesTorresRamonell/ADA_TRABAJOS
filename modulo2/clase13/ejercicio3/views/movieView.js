const peliculaRespose=(pelcula)=>{
    if(!pelcula){
        return JSON.stringify({error: `No se encontro la pelicula`});
    }
    return JSON.stringify(pelcula, null, 2);
}

module.exports={ peliculaRespose }