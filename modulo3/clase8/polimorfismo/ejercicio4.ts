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


class Cliente{
    protected cuenta:CuentaBancaria;
    constructor(cuenta:CuentaBancaria){
        this.cuenta=cuenta;
    }

    deposirar(cantidad:number):void{
        this.cuenta.depositar(cantidad);
    }

    retirar(cantidad:number):void{
        this.cuenta.retirar(cantidad);
    }

}

class ClienteVip extends Cliente{
    retirar(cantidad: number): void {
        console.log(`Retirendo sin comision..`);
        this.cuenta.retirar(cantidad);
    }
}

let cuente1=new CuentaBancaria(1000);
let cliente1=new Cliente(cuente1);
let cuente2=new CuentaBancaria(5000);
let cliente2=new ClienteVip(cuente2);

cliente1.deposirar(100);
cliente1.retirar(400);
cliente2.deposirar(9000);
cliente2.retirar(1000);