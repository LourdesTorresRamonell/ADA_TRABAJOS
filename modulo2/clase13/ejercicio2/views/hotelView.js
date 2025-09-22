const hotelResponse=(hotel)=>{
    if(!hotel){
        return JSON.stringify({error: `No se encontro el hotel`});
    }
    return JSON.stringify(hotel, null, 2);
}

module.exports={ hotelResponse };