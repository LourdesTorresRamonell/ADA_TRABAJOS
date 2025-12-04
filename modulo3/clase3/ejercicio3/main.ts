import createUser from "./user";

let user=createUser(`Mateo`, 20);
console.log(`Nombre del usuario: ${user.name}, edad: ${user.age}`);