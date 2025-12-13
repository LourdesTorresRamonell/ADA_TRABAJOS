class Vehiculo{
    arrancar():void{
        console.log(`El vehiculo arrancando..`);
    }
}

class Coche extends Vehiculo{
    arrancar(): void {
        console.log(`El coche esta arrancando por medio de la llave `);
    }
}

class Moto extends Vehiculo{
    arrancar(): void {
        console.log(`La moto esta errancando por medio del boton de encendidio`);
    }
}

let miAuto:Vehiculo=new Coche();
let miMoto: Vehiculo=new Moto();
miAuto.arrancar();
miMoto.arrancar();