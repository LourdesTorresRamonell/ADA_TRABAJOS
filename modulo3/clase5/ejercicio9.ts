class Estudiantes{
    nombre:string;
    edad:number;
    curso:string;
    constructor(nombre:string, edad:number, curso:string){
        this.nombre=nombre;
        this.edad=edad;
        this.curso=curso;
    }

    mostrarInfo():void{
        console.log(`Estudiante: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Curso: ${this.curso}`);
    }
}

class RegistroEstudiantes{
    estudiantes: Estudiantes[]=[];

    agregarEstudiante(estudiante:Estudiantes):void{
        this.estudiantes.push(estudiante);
    }
    mostrarEstudiantes():void{
        this.estudiantes.forEach(estudiente=>estudiente.mostrarInfo());
    }
}

let lista= new RegistroEstudiantes();
let estudiante1=new Estudiantes(`Nahuel`, 22, `Electrinica`);
let estudiante2=new Estudiantes(`Juli`, 17, `Manicuria`);

lista.agregarEstudiante(estudiante1);
lista.agregarEstudiante(estudiante2);
lista.mostrarEstudiantes();