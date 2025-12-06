interface IPersona{
    nombre:string;
    edad: number;
    presentarse():void;
}

class Persona implements IPersona {
    nombre:string;
    edad:number;
    constructor(nombre:string, edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    presentarse(): void {
        console.log(`buenas, me llamo ${this.nombre} y tengo ${this.edad} años`);
    }
}

let Luli=new Persona(`Lourdes`, 22);
Luli.presentarse();