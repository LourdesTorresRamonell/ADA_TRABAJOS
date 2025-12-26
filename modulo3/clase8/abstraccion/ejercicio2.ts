abstract class Persona{
    constructor(public nombre:string, public edad:number){}
    abstract describir():string;
}

class Estudiante extends Persona{
    constructor(nombre:string, edad:number, public matricula:string){
        super(nombre,edad);
    }
    describir(): string {
        return `Estudiante: ${this.nombre}. Edad: ${this.edad}, Metricula: ${this.matricula}`;
    }
}

class Profesor extends Persona{
    constructor(nombre:string, edad:number, public especialidad:string){
        super(nombre, edad);
    }
    describir(): string {
        return `Profe: ${this.nombre}. Edad: ${this.edad}. Especoalidad: ${this.especialidad}`;
    }
}

class Curso{
    estudiantes:Estudiante[]=[]
    constructor(public nombre:string, public profesor:Profesor){}

    agregarEstudiante(estudiante: Estudiante):void{
        this.estudiantes.push(estudiante);
    }

    mostrarDetalles():string {
        let listarEstudiantes=this.estudiantes.map(e=>e.describir()).join(`\n`);
        return `Curso: ${this.nombre}\nProfesor:${this.profesor.describir()}\nEstudiantes:\n${listarEstudiantes}`;
    }
}

let profesor=new Profesor(`Angela Paz`, 50, `Matematicas`);
let curso=new Curso(`Analisis Matematico`, profesor);
let estudiante1=new Estudiante(`Lourdes`, 20, `012026`);
let estudiante2=new Estudiante(`Kevin`, 21, `022026`);

curso.agregarEstudiante(estudiante1);
curso.agregarEstudiante(estudiante2);
console.log(curso.mostrarDetalles());