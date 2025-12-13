class Calculadora{
    sumar(a:number, b:number):number;

    sumar(a:number, b:number, c:number):number;

    sumar(a:string, b:string):string;

    sumar(a:number|string, b:number|string, c?:number):number|string|null{
        if(typeof a==="number" && typeof b ==="number"){
            if(c!==undefined){
                return a+b+c;
            }
            return a+b;
        }

        if(typeof a==="string" && typeof b === "string"){
            return a+b;
        }
        return null
    }
}

let micalculadora=new Calculadora();
console.log(micalculadora.sumar(32,45,10));
console.log(micalculadora.sumar(`te `, `amo`));
console.log(micalculadora.sumar(10,45));