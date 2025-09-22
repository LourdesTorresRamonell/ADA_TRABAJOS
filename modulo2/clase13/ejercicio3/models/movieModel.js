const fs=require(`fs`);
const path=require(`path`);
const filePath=path.join(__dirname, `../data/movies.json`);

const peliculaPorTitulo=(titulo)=>{
    try{
        const data=fs.readFileSync(filePath, `utf8`);
        const peliculas=JSON.parse(data);
        return peliculas.find((pelicula)=> pelicula.titulo.toLowerCase()===titulo.toLowerCase())||null;
    } catch (error) {
        console.log(`Se produjo error al leer la data: `, err);
        return null;
    }
}

module.exports= { peliculaPorTitulo };