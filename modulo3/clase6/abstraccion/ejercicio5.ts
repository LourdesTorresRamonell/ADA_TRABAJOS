interface VehiculoElectrico{
    cargarBateria():void;
}

abstract class Transporte{
    constructor(protected pasajeros:number){}
    abstract mover():void;
    describir():void{
        console.log(`El transporte lleva a ${this.pasajeros} pasajeros`);
    }
}

class AutobusElectrico extends Transporte implements VehiculoElectrico{
    mover(): void {
        console.log(`El autobus electrico esta en recorrido`);
    }
    cargarBateria(): void {
        console.log(`El autobus se esta cargando...`);
    }
}

let tum=new AutobusElectrico(50);
tum.describir();
tum.mover();
tum.cargarBateria();