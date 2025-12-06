class Animal{
    nombre:string;
    tipo:string;
    constructor(nombre:string, tipo:string){
        this.nombre=nombre;
        this.tipo=tipo;
    }
    mostrarInfo():void{        
        console.log(`Nombre: ${this.nombre}`);
        console.log(`tipo: ${this.tipo}`);
    }
}

class Mascota extends Animal{
    dueño:string;
    constructor(nombre:string, tipo:string, dueño:string){
        super(nombre, tipo);
        this.dueño=dueño;
    }

    mostrarInfo(): void {
        super.mostrarInfo();
        console.log(`Dueño: ${this.dueño}`);
    }
}

class MascotaExotica extends Animal{
    habitad:string;
    constructor(nombre:string, tipo:string, habitad:string){
        super(nombre, tipo);
        this.habitad=habitad;
    }

    mostrarInfo():void{
        super.mostrarInfo();
        console.log(`Habitad: ${this.habitad}`);
    }
}

let gato= new Mascota(`Celeste`, `gato`, `Kevin`);
let elefante=new MascotaExotica(`Trompita`, `Elefante`, `Sabana`);
gato.mostrarInfo();
elefante.mostrarInfo();