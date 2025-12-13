class Banco{
    private _saldo:number;
    constructor(saldoinicial:number){
        this._saldo=saldoinicial;
    }

    depositar(cantidad:number):void {
        if(cantidad>0){
            this._saldo+=cantidad;
            console.log(`Se depositaron $${cantidad}`); 
        }else{
            console.log(`Error, la cantidad a depositar debe ser major a 0`);
        }
    }

    retirar(cantidad:number):void{
        if(cantidad>0 && cantidad<=this._saldo){
            console.log(`Se retiraron $${cantidad}`);
            this._saldo-=cantidad;
        }
    }

    consultarSaldo():number{
        return this._saldo;
    }
}

let miBanco=new Banco(8000);
miBanco.retirar(150);
console.log(miBanco.consultarSaldo());
miBanco.depositar(6000);
console.log(miBanco.consultarSaldo());