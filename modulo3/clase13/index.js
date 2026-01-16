fetch("https://rickandmortyapi.com/api/character/")
    .then(response=>response.json())
    .then(data=>{
        const firtsCharacterName=data.results[0].name;
        console.log("Primer personaje: ", firtsCharacterName);
    })
    .catch(error=>{
        console.log(error);
    });

