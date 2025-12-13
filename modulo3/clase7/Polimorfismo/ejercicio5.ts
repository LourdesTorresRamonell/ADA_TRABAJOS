interface Empleado{
    tarabajar():void;
}

class Programador implements Empleado{
    tarabajar(): void {
        console.log(`El rpogramador se encuentra programando`);
    }
}

class Diseñador implements Empleado{
    tarabajar(): void {
        console.log(`El diseñador esta diseñando`);
    }
}

function procesarTrabajo(empleado:Empleado):void{
    empleado.tarabajar();
}

let programador:Empleado=new Programador();
let diseñador:Empleado=new Diseñador();

procesarTrabajo(diseñador);
procesarTrabajo(programador);