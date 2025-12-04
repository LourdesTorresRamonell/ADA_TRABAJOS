export type Persona={
    nombre:string;
    edad:number;
}

export function crearPersona(nombre:string, edad:number): Persona{
    return {nombre, edad};
}