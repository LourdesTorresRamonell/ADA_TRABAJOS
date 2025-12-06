class Vehiculo{
    marca:string;
    modelo:string;
    constructor(marca:string, modelo:string){
        this.marca=marca;
        this.modelo=modelo;
    }

    mostrarInfo():void{
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
    }
}

class Coche extends Vehiculo{
    tipoCombustible:string;
    constructor(marca:string, modelo:string, tipoCombustible:string){
        super(marca, modelo);
        this.tipoCombustible=tipoCombustible;
    }
    mostrarInfo(): void {
        super.mostrarInfo();
        console.log(`Tipo de combustiblre: ${this.tipoCombustible}`);
    }
}

class Motocicleta extends Vehiculo{
    cilindrada:string;
    constructor(marca:string, modelo:string, cilindrada:string){
        super(marca, modelo);
        this.cilindrada=cilindrada;
    }

    mostrarInfo(): void {
        super.mostrarInfo();
        console.log(`Cilindrada: ${this.cilindrada}`);
    }
}

let camioneta= new Coche(`Ford`, `Raptor`, `Disel`);
let moto= new Motocicleta(`Yamaha`, `YBR125`, `125`);
camioneta.mostrarInfo();
moto.mostrarInfo();