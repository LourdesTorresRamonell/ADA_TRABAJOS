class CuentaBancaria{
    protected saldo:number;
    constructor(saldoInicial:number){
        this.saldo=saldoInicial;
    }

    depositar(cantidad:number):void{
        if(cantidad<=0){
            console.log(`No se puede ingresar menos de $1`);
        }else{
            this.saldo+=cantidad;
            console.log(`Deposito exitoso\nSaldo actual: $${this.saldo}`);
        }
    }

    retirar(cantidad:number):void{
        if(cantidad<=0 || cantidad>this.saldo){
            console.log(`No se puede retirar menos de $1 o mas de tu saldo\nTu saldo: $${this.saldo}`);
        }else{
            this.saldo-=cantidad;
            console.log(`Retiro exitoso\nSaldo acttual: $${this.saldo}`)
        }
    }

    mostrarSaldo():void{
        console.log(`Tu saldo es: $${this.saldo}`);
    }
}

class CuentaDeAhorros extends CuentaBancaria{
    agregarInteres(tasa:number):void{
        this.saldo+=this.saldo*tasa;
        console.log(`Interes agregado exitosamente\nSaldo actual: $${this.saldo}`);
    }
}

let miCuenta=new CuentaDeAhorros(5000);
miCuenta.agregarInteres(0.4);
miCuenta.depositar(400);
miCuenta.retirar(7401);