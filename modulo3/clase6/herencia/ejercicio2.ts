class Maestro{
    protected nombre:string;
    protected materia:string;

    constructor(nombre:string, materia:string){
        this.nombre=nombre;
        this.materia=materia;
    }
    Enseñar():void{
        console.log(`El maestro ${this.nombre} esta enseñando ${this.materia}`);
    }
}

class MaestroMatematicas extends Maestro{
    constructor(nombre:string){
        super(nombre, `Matematicas`);
    }
    Enseñar(): void {
        console.log(`El profesor ${this.nombre} esta enseñando Matematicas`);
    }
}

let angela=new MaestroMatematicas(`Angela`);
angela.Enseñar();