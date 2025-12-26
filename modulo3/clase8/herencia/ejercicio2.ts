class Cliente{
    constructor(private nombre:string, private numeroHabitacion:number){}
    reservar():void{
        console.log(`El cliente ${this.nombre} ha reservado la habitacion: ${this.numeroHabitacion} `);
    }
}
interface Beneficios{
    accederABeneficios():void;
}

class ClientePremium extends Cliente implements Beneficios{
    constructor(nombre:string, numeroHabitacion:number){
        super(nombre,numeroHabitacion)
    }
    reservar(): void {
        super.reservar();
        console.log(`Es cliente premium`);
    }
    accederABeneficios(): void {
        console.log(`Por ser cliente premium tiene acceso al spa y desayuno gratis\n`);
    }
}

class ClienteCorporativo extends Cliente implements Beneficios{
    constructor(nombre:string, numeroHabitacion:number){
        super(nombre, numeroHabitacion);
    }
    reservar(): void {
        super.reservar();
        console.log(`Es cliente corporativo`);
    }
    accederABeneficios(): void {
        console.log(`Por ser cliente corporativo tiene acceso a la sala de reuniones y a descuentos\n`);
    }
}

let cliente1=new ClienteCorporativo(`Kevin`, 10);
cliente1.reservar();
cliente1.accederABeneficios();

let cliente2=new ClientePremium(`Roxana`, 50);
cliente2.reservar();
cliente2.accederABeneficios();