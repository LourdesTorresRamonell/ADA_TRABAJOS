const readline=require(`readline`);
require('dotenv').config();
const greeting=process.env.GREETING||`Que tal`
const name=process.argv[2]|| `Invitado`

console.log(`${greeting}, ${name}`);
