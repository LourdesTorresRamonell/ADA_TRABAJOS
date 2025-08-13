/*Imagina que estás desarrollando una miniaplicación para gestionar
contactos. Tu objetivo es:
1. Crear un archivo llamado contactos.json que almacene una lista de
contactos.
2. Implementar funciones para:
o Agregar un contacto: Cada contacto debe tener nombre,
teléfono y email.
o Listar todos los contactos.
o Buscar un contacto por nombre.
3. Asegúrate de que los contactos no se repitan (valida el nombre
antes de agregarlo).*/
const fs=require(`fs`);

let leerContactos=()=>{
    if(fs.existsSync(`contactos.json`)){
        const data=fs.readFileSync(`contactos.json`, `utf-8`);
        return JSON.parse(data);
    }
    return [];
}

let guardarContactos=(contactos)=>{
    fs.writeFileSync(`contactos.json`, JSON.stringify(contactos,null,2));
}

let agregarContacto=(nombre, telefono, email)=>{
    const contactos=leerContactos();
    if(contactos.some(contacto=>contacto.nombre===nombre)){
        console.log(`EL contacto ya existe: ${nombre}`);
        return;
    }
    contactos.push({nombre,telefono,email});
    guardarContactos(contactos);
    console.log(`Contacto agregado: ${nombre}`);
}

let listaDeContactos=()=>{
    const contactos=leerContactos();
    console.log(`Su lista de contactos: `)
    console.log(contactos);
}

let buscarContactos=(nombre)=>{
    const contactos=leerContactos();
    const contacto=contactos.find(c=>c.nombre===nombre);
    if(contacto){
        console.log(`Se encontro el contacto: `, contacto);
    }else{
        console.log(`El contacto no se encuentra en la lista.`);    }
}

agregarContacto("Ambar", "911 3526-4578", "AmbarSmith@gmail.com");
agregarContacto("Mateo", "911 3321-8946", "Mateo_rodriguez@gmail.com");
listaDeContactos();
buscarContactos("Mateo");