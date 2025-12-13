interface PagoOnine{
    procesarPago():void;
}
abstract class Pago{
    constructor(protected monto:number){}
    validarMonto():boolean{
        return this.monto>0;
    }
    abstract completarPago():void;
}

class PagoConTargeta extends Pago implements PagoOnine{
    procesarPago(): void {
        console.log(`Procesando el pago...`);
    }
    completarPago(): void {
        console.log(`El pago de $${this.monto} fue completado con tarjeta`)
    }
}

let pago=new PagoConTargeta(5000);
if(pago.validarMonto()){
    pago.procesarPago();
    pago.completarPago();
}