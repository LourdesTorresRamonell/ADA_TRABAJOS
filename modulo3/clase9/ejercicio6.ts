class CuentaBancaria{
    private _saldo:number;
    constructor(saldoInicial:number){
        this._saldo=saldoInicial;
    }

    public verSaldo():void{
        console.log(`Saldo dela cuenta: ${this._saldo}`);
    }

    public depositar(cantidad:number):void{
        if(cantidad>=1){
            this._saldo+=cantidad;
            console.log(`Desposito exitoso`);
        }else{
            console.log(`La cantidad depositada no puede ser menor a $1`);
        }
    }
}

let miCuenta=new CuentaBancaria(5000);
miCuenta.verSaldo();
miCuenta.depositar(400);
miCuenta.verSaldo();