export default function crearMultiplicador(fator: number): (num:number)=> number {
    return (num:number)=>num*fator;
}