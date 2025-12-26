class Vehiculo{
    constructor(public marca:string, public modelo:string){}
    detallesVehiculo():void{
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo} `);
    }
}

interface Mantenimiento{
    calcularCosto():number;
}

class Automovil extends Vehiculo implements Mantenimiento{
    constructor(marca:string, modelo:string){
        super(marca,modelo);
    }

    calcularCosto(): number {
        return 5000;
    }

    detallesVehiculo(): void {
        super.detallesVehiculo();
        console.log(`Costo del mantenimiento: ${this.calcularCosto()}`);
    }
}

class Moto extends Vehiculo implements Mantenimiento{
    constructor(marca:string, modelo:string){
        super(marca, modelo);
    }

    calcularCosto(): number {
        return 1000;
    }

    detallesVehiculo(): void {
        super.detallesVehiculo();
        console.log(`Costo del mantenimiento: ${this.calcularCosto()}`);
    }
}

let auto=new Automovil(`Ford`, `Focus`);
let moto=new Moto(`Yamaha`, `R15`);

auto.detallesVehiculo();
moto.detallesVehiculo();