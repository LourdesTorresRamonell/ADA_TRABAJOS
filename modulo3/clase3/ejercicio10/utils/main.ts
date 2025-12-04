import { subtract, reverse, createUser } from "./index";

console.log(`Resta: ${subtract(15, 4)}`);
console.log(`Reversa: ${reverse(`lourdes`)}`);

const user= createUser(`Juan`, 20);
console.log(`Nombre del usuario: ${user.name}, edad: ${user.age}`);
