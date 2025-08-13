/*¿Sabes cuántas metas has establecido? Escribe un programa que lea tu
archivo metas.json y cuente cuántas metas tienes actualmente*/
const fs=require(`fs`);

fs.readFile(`metas.json`, `utf-8`, (err,data)=>{
    if(err){
        console.error(`Se produjo un error al leer las metas `, err);
    }else{
        const metas=JSON.parse(data);
        console.log(`Hay ${metas.length} metas en tu lista `);
    }
});