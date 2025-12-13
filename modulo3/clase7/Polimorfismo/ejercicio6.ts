interface Volador{
    volar():void;
}

interface Nadador{
    nadar():void;
}

class Pato implements Volador, Nadador{
    volar(): void {
        console.log(`El pato esta volando`);
    }
    nadar(): void {
        console.log(`El pato esta nadando`);
    }
}

let miPato=new Pato();
miPato.volar();
miPato.nadar();