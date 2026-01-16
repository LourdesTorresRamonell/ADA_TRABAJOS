function getCountry(countryName){
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response=>response.json())
        .then(data=>{
            const country=data[0];
            const name=country.name.common;
            const capital=country.capital[0];
            const region=country.region;

            console.log(`Pais: ${name}`);
            console.log(`Capital: ${capital}`);
            console.log(`Region: ${region}`);
        })
        .catch(error=>{
            console.log(`Erorr`, error);
        })
}

getCountry(`china`);