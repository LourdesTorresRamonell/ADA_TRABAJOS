class Negocio{
    protected operar():void{
        console.log(`El negocio esta operando con normalidad`);
    }
    public iniciarOperar():void{
        this.operar();
    }
}

class Conultoria extends Negocio{
    protected operar(): void {
        console.log(`La consultoria esta brindando asesorias con normalidad`);
    }
    public iniciarOperar(): void {
        this.operar();
    }
}

let miConsultora=new Conultoria();
miConsultora.iniciarOperar();