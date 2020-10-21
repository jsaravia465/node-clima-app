const axios = require('axios');

const getClima = async(lat, lng) => {


    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=dae230c4b162570e394941671959d701&units=metric`
    });

    const resultado = await instance.get();

    return resultado.data.main.temp;







}

module.exports = { getClima }