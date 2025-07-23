/*Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. Verifica si
"Sushi" está en la lista y muestra un mensaje que confirme si está o no*/
let comidas=["Pizza", "Hamburguesa", "Tacos"];
let busqueda=comidas.indexOf("Sushi");
if(busqueda>=0){
    console.log(`La comide se encuentra en la posicion ${busqueda}`);
}else{
    console.log(`La comida no se encuentra en la lista`)
}