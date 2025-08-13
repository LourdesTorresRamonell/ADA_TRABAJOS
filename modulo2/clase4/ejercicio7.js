/*Revisa tu lista de metas en el archivo metas.json. Busca si una meta
específica, como “Viajar a Japón”, ya está incluida. Si no, agrégala*/
const fs=require(`fs`);

const buscarMeta= `Viajar a Japon`;
fs.readFile(`metas.json`, `utf-8`, (err,data)=>{
    if(err){
        console.error(`Se produjo un error al leer las metas: `,err);
    }else{
        let metas=JSON.parse(data);
        if(metas.includes(buscarMeta)){
            console.log(`Se agrego la meta: `,buscarMeta);
        }else{
            metas.push(buscarMeta);
            fs.writeFile(`metas.json`, JSON.stringify(metas,null,2), (err)=>{
                if(err){
                    console.error(`Se produjo un error al actualizar metas: `, err);
                }else{
                    console.log(`Meta agregada: `, buscarMeta);
                }
            });
        }
    }
});