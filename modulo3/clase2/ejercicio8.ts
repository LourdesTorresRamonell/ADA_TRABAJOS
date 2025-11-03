function calcularArea(figura: "circulo"|"rectangulo", ...valor:number[]):string|number{
    if(figura==="rectangulo"){
        const largo=valor[0];
        const ancho=valor[1];
        if(largo===undefined||ancho===undefined){
            return "Error: no se ingresaron la cantidad de valores necesarios";
        }
        return largo*ancho;
    }else if(figura==="circulo"){
        const radio=valor[0];
        if(radio===undefined){
            return "Error al asignar el valor del radio";
        }
        return Math.PI*Math.pow(radio,2);
    }else{
        return "Error al elegir la figura ";
    }
}

console.log(calcularArea("rectangulo", 10, 20));