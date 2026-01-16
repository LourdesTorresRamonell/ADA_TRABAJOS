fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then(response=>response.json())
    .then(data=>{
        const name=data.name;
        const types=data.types.map(t=>t.type.name);
        console.log(`Nombre: ${name}`);
        console.log(`Tipos: ${types.join(", ")}`);
    })
    .catch(error=>{
        console.log("Error:", error);
    })