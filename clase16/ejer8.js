/*Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos saber
si el nombre 'Laura' está presente en la lista y, si lo está, deberías devolverlo*/
let nombres=[`Carlos`, `Daniel`, `Laura`, `Ana`];
let nombreEspecifico=nombres.find(nombre=>nombre==`Laura`);
//console.log(nombreEspecifico);

if(nombreEspecifico !== undefined){
  console.log(`El nombre "${nombreEspecifico}" está en la lista`);
}else{
  console.log('El nombre no está en la lista');
}