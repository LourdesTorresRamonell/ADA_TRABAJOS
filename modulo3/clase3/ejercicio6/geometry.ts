export namespace Geometry{
    export function areaCircle(radio: number):number{
        return Math.PI*(radio*radio);
    }
    export function areaCuadrado(lado:number):number{
        return lado*lado;
    }
}