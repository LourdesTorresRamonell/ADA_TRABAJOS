abstract class Transporte{
    abstract mover():void;
}
interface Electrico{
    cargarBateria():void;
}
interface Combustible{
    llenarTanque():void;
}

class AutobusElectrico extends Transporte implements Electrico{
    cargarBateria(): void {
        console.log(`El autobus se esta cargando`);
    }
    mover(): void {
        console.log(`El autobus comenzo su recorrido`);
    }
}

class Taxi extends Transporte implements Combustible{
    llenarTanque(): void {
        console.log(`El taxi esta llenando el tanque con combustible`);
    }
    mover(): void {
        console.log(`El taxi empezo a buscar clientes`);
    }
}

let taxi=new Taxi();
let bus=new AutobusElectrico();

taxi.llenarTanque();
bus.cargarBateria();
bus.mover();
taxi.mover();