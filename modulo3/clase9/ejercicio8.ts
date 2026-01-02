type Cordenadas=[number, number, number];

interface Recurso{
    nombre:string;
    cantidad:number;
}

class Planeta{
    constructor(public nombre:string, public coordenadas: Cordenadas,public recursos:Recurso[]){}
}

class NaveEspacial{
    private _combustible:number;
    private _carga:Recurso[];
    private _capacidadCargas:number;
    private _ubicacion:Cordenadas;

    constructor(combustibleInicial:number, capacidad:number){
        this._combustible=combustibleInicial;
        this._capacidadCargas=capacidad;
        this._carga=[];
        this._ubicacion=[0, 0, 0];
    }

    
    viajar(planeta:Planeta):void{
        let [x1,y1,z1]:Cordenadas=this._ubicacion;
        let [x2, y2, z2]:Cordenadas=planeta.coordenadas;
        let distancia=Math.sqrt((x2-x1)**2+(y2-y1)**2+(z2-z1)**2);
        let combustibleNecsesario:number=distancia*0.42;
        
        if(this._combustible>=combustibleNecsesario){
            this._combustible-=combustibleNecsesario;
            this._ubicacion=planeta.coordenadas;
            console.log(`Llegaste al Planeta ${planeta.nombre}`);
        }else{
            console.log(`El combustible no alcaza para viajar hasta ese planeta`);
        }
    }

    recolectarRecursos(planeta:Planeta):void{
        planeta.recursos.forEach((recurso)=>{
            if(this._carga.reduce((t,r)=>t+r.cantidad,0)+recurso.cantidad<=this._capacidadCargas){
                this._carga.push(recurso);
                console.log(`Recurso recogido: ${recurso.nombre}\n  Cantidad: ${recurso.cantidad}`);
            }else{
                console.log(`No hay suficiente espacio para cargar más recursos`);
            }
        });
    }
}

let pluton=new Planeta(`Pluton`, [25, 58, 64], [
    {nombre: `nitrogeno`, cantidad: 50},
    {nombre: `metano`, cantidad: 10},
]);

let miNave=new NaveEspacial(100, 50);
miNave.viajar(pluton);
miNave.recolectarRecursos(pluton);
