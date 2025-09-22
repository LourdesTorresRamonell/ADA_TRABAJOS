const fs=require(`fs`);
const path=require(`path`);
const filePath=path.join(__dirname, `../data/hotel.json`);

const hotelPorID=(id)=>{
    try{
        const data=fs.readFileSync(filePath, `utf8`);
        const hoteles=JSON.parse(data);
        return hoteles.find(hotel=>hotel.id===id)||null;
    } catch (error){
        console.log(`Se produjo un error: `, error);
        return null
    }    
}

module.exports={ hotelPorID };