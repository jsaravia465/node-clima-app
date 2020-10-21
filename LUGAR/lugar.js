const axios = require('axios');

const getLugarLatLng = async(dir) => {


    //console.log(argv.direccion);
    const encodedUlr = encodeURI(dir);

    // console.log(encodedUlr);

    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodedUlr }.json?access_token=pk.eyJ1IjoianNhcmF2aWE0NjUiLCJhIjoiY2tnODF3dzJpMDZtbjJzcXI4bW1xYTl6dyJ9.HlvlG2NPGjtElyEC7Wx1uQ`
    });

    const resultado = await instance.get();

    if (resultado.data.features.lenght === 0) {
        throw new Error(`No se obtuvo resultado para la direccion ${ dir }`);
    }

    const datos = resultado.data.features[0];
    const direccion = datos.text;
    const lat = datos.center[0];
    const lng = datos.center[1];




    return {
        direccion,
        lat,
        lng

    }




}

module.exports = { getLugarLatLng }