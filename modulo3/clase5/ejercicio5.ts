class Mariposa{
    nombre:string;
    color:string;
    constructor(nombre:string, color:string){
        this.nombre=nombre;
        this.color=color;
    }
    volar():string{
        return `La mariposa ${this.nombre} de color ${this.color} empezo a volar`;
    }
}

let Monarca=new Mariposa(`Monarca`, `Naranja`);
console.log(Monarca.volar());