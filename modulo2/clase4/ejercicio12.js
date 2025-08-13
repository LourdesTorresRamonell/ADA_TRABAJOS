/*Crea un programa que maneje un archivo tareas.json con las siguientes
funcionalidades:
1. Agregar una tarea: Cada tarea debe tener nombre, descripcion y
estado (pendiente o completa).
2. Completar una tarea: Cambia el estado de una tarea a completa.
3. Listar tareas por estado: Muestra las tareas agrupadas por su
estado (pendiente o completa).*/
const fs=require(`fs`);

let leerTareas=()=>{
    if (fs.existsSync(`tareas.json`)){
        const data=fs.readFileSync(`tareas.json`, `utf-8`);
        return JSON.parse(data);
    }
    return[];
}

let guardarTaareas=(tareas)=>{
    fs.writeFileSync(`tareas.json`, JSON.stringify(tareas, null, 2));
}

let agregarTareas=(nombre, descripcion)=>{
    const tareas=leerTareas();
    tareas.push({nombre, descripcion, estado:"pendiente"});
    guardarTaareas(tareas);
    console.log(`La terae se agrego a la lista`);
}

let completarTarea=(nombre)=>{
    const tareas=leerTareas();
    const tarea=tareas.find(t=>t.nombre===nombre);
    if(tarea){
        tarea.estado="completada";
        guardarTaareas(tareas);
        console.log(`La tarea se marco como completa `, nombre);
    }else{
        console.log(`La tarea no se encuentra en la lista `);
    }
}

let listarTareaPorEstado=()=>{
    let tareas=leerTareas();
    let completas=tareas.filter(t=>t.estado==="completada");
    let pendiente=tareas.filter(t=>t.estado==="pendiente");
    console.log(`Sus tareas completadas son: `, completas);
    console.log(`Sus tareas pendientes son: `, pendiente);
}

agregarTareas(`Programacion`, `Terminar los ejercicios de clase 4`);
agregarTareas(`Logo`, `Relizar las modificaciones del logo`);
agregarTareas(`Manicuria`, `Practicar trasos rectos precisos`);
completarTarea(`Manicuria`);
listarTareaPorEstado()