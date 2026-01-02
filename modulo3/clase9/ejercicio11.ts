class Servicio{
    nombre:string;
    duracionEnMinutos:number;
    precio:number;
    constructor(nombre:string, duracion:number, precio:number){
        this.nombre=nombre;
        this.duracionEnMinutos=duracion;
        this.precio=precio;
    }

    mostrarInfo():void{
        console.log(`Servicio: ${this.nombre}\n Duracion en minutos: ${this.duracionEnMinutos}\n $${this.precio}`);
    }
}

class CorteDeCabello extends Servicio{
    constructor(){
        super(`Corte de cabello`, 30, 8000);
    }

}

class ManicuriaSemipermanente extends Servicio{
    constructor(public decoracion:boolean){
        super(`Manicuria semipermanente`, 90, 10000);
    }

    ConDeco():void{
        if(this.decoracion){
            this.duracionEnMinutos+=20;
            this.precio+=2000
        }
    }

    mostrarInfo(): void {
        this.ConDeco();
        super.mostrarInfo();
    }
}

class Cliente{
    nombre:string;
    whatsapp:string;
    constructor(nombre:string,numero:string){
        this.nombre=nombre;
        this.whatsapp=numero;
    }

    mostrarInfo():void{
        console.log(`${this.nombre} Numero: ${this.whatsapp}`)
    }
}

class Reserva{
    serviciosReservados:Servicio[]=[];
    cliente:Cliente
    horario:string;
    constructor(cliente:Cliente, horerio:string){
        this.cliente=cliente;
        this.horario=horerio;
    }

    agregarServicio(servicio:Servicio):void{
        this.serviciosReservados.push(servicio);
        console.log(`Servicio agregado con exito`);
    }

    mostrarInfo():void{
        console.log(`Reservas de ${this.cliente.nombre} para las ${this.horario}`);
        this.serviciosReservados.forEach(s=>s.mostrarInfo());
    }
}

let cliente1=new Cliente(`Roxana Remonell`, `+54 911 3063-6056`);
let reserva=new Reserva(cliente1, `15:30`);
let corte=new CorteDeCabello();
let manicuria=new ManicuriaSemipermanente(true);

reserva.agregarServicio(corte);
reserva.agregarServicio(manicuria);
reserva.mostrarInfo();