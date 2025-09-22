const { hotelPorID }=require(`../models/hotelModel`);
const {hotelResponse}=require(`../views/hotelView`);

const hotelRequest=(idHotel)=>{
    const hotel=hotelPorID(idHotel);
    return hotelResponse(hotel);
}

module.exports={ hotelRequest };