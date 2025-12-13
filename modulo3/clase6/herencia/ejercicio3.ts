interface Volador{
    volar():void;
}
interface Transportador{
    transportar():void;
}

class Avion implements Volador, Transportador{
    volar(): void {
        console.log(`El avion esta volando`);
    }
    transportar (): void{
        console.log(`El avion esta transportando los pasajeros`);
    }
}

let miAvion= new Avion();
miAvion.volar();
miAvion.transportar();