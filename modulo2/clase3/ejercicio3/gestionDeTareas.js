const prompt = require('prompt-sync')({ sigint: true});
const fs=require('fs');
const filePath='./listadoDeTareas.json';

const leerTareas=()=>{
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido);
};

const escribirTarea=(tarea)=>{
    fs.writeFileSync(filePath, JSON.stringify(tarea, null, 2));
};

const agregarTarea=(desarrollo)=>{
    const tareas=leerTareas();
    tareas.push({ id: tareas.length + 1, desarrollo});
    escribirTarea(tareas);
    console.log(`Tarea agregada:"${desarrollo}"`);
};

const listarTareas=()=>{
    const tareas=leerTareas(); 
    console.log('Lista de tareas por realizar:');
    tareas.forEach(tarea=>{
        console.log(`${tarea.id}. ${tarea.desarrollo}`);
    });
};

const eliminarTarea=(idDeTarea)=>{
    let tareas = leerTareas();
    tareas = tareas.filter(tarea => tarea.id !== idDeTarea);
    escribirTarea(tareas);
    console.log(`Tarea eliminada.`);
};


let menu=Number(prompt(`Ingrese el numero de opcion que desee:
    1- Agregar nueva tarea
    2- Eliminar tarea `))
if(menu===1){    
    let nombre=prompt(`Ingrese la tarea que desea agregar a la lista `)
    agregarTarea(nombre);
    listarTareas();
}else if(menu===2){
    let idDeTarea=Number(prompt(`Ingrese el número de la tarea a eliminar `));
    if(isNaN(idDeTarea)){
        console.log(`Error: se debe ingresar un número`);
    }else{
        eliminarTarea(idDeTarea);
        listarTareas();
    }
}else{
    console.log(`Error: se debe ingresar 1 o 2`);
}