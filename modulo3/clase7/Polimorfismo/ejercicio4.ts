abstract class DispositivoElectronico{
    abstract encender():void;
    abstract apagar():void;
}

class Televison extends DispositivoElectronico{
    encender(): void {
        console.log(`El televisor se encendio`);
    }

    apagar(): void {
        console.log(`El televisor se apago`);
    }
}

class Radio extends DispositivoElectronico{
    encender(): void {
        console.log(`La radio se encendio`);
    }
    apagar(): void {
        console.log(`La radio se apago`);
    }
}

let miTele=new Televison();
let miRadio=new Radio();
miRadio.encender();
miTele.encender();
miRadio.apagar();
miTele.apagar();