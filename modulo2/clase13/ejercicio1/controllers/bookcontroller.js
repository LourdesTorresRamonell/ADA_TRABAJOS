const { libroPorID }=require(`../models/bookModel`);
const { FormatoResponse }=require(`../views/bookView`);

const libroRequest=(libroid)=>{
    const libro=libroPorID(libroid);
    return FormatoResponse(libro);
};

module.exports={ libroRequest };