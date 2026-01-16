function searchSong(song_title){
    fetch(`https://itunes.apple.com/search?term=${song_title}&limit=1`)
        .then(response=>response.json())
        .then(data=>{
            const song=data.results[0];

            console.log(`Cancion: ${song.trackName}\nArtista: ${song.artisName}`);
        })
        .catch(error=>{
            console.log(`Error: `, error);
        });
}

searchSong(``);