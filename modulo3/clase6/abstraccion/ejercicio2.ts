abstract class Vehiculo{
    constructor(protected velocidad:number){}

    abstract mover():void;

    acelerar():void{
        this.velocidad+=10;
        console.log(`Acelerando a ${this.velocidad} km`);
    }
}

class Auto extends Vehiculo{
    mover(): void {
        console.log(`Moviendoce por la carretera`);
    }
}

class Bicicleta extends Vehiculo{
    mover(): void {
        console.log(`Moviendose por la bicisenda`);
    }
}

let auto= new Auto(60);
let bicicleta=new Bicicleta(20);

auto.mover();
auto.acelerar();
bicicleta.mover();
bicicleta.acelerar();