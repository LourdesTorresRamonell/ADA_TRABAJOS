function getUser(id){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>response.json())
        .then(user=>{
            console.log(`Nombre: ${user.name}`);
            console.log(`Username: ${user.username}`);
            console.log(`Email: ${user.email}`);
        })
        .catch(error=>{
            console.log(`Error: `, error);
        });
}

getUser(2);