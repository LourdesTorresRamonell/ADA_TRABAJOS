abstract class InstrumentoMusical{
    abstract tocar():void;
    abstract tocar(conAcompañamiento:boolean):void;
}

class Guitarra extends InstrumentoMusical{
    tocar(): void;
    tocar(conAcompañamiento: boolean): void;
    tocar(conAcompañamiento?: unknown): void {
        if(conAcompañamiento){
            console.log(`Tocando guitarra con acompañamiento`);
        }else{
            console.log(`Tocando guitarra sin acompañamiento`);
        }
    }
}

class Piano extends InstrumentoMusical{
    tocar(): void;
    tocar(conAcompañamiento: boolean): void;
    tocar(conAcompañamiento?: unknown): void {
        if(conAcompañamiento){
            console.log(`Tocando piano con acompañamiento`);
        }else{
            console.log(`Tocando piano sin acompañamiento`);
        }
    }
}

let piano=new Piano();
let guitarra=new Guitarra();
piano.tocar(true);
piano.tocar();
guitarra.tocar();
guitarra.tocar(true);