import { crearPersona, Persona } from "./types";

const persona:Persona=crearPersona(`Lara`, 26);
console.log(`Persona: ${persona.nombre}, edad: ${persona.edad}`);