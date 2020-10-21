const lugar = require('./LUGAR/lugar.js');
const clima = require('./CLIMA/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de una ciudad para obtener el clima',
        demand: true
    }

}).argv;







/*lugar.getLugarLatLng(argv.direccion).then(resp => {
    return console.log(resp);
}).catch(err => console.log(err));*/




const getInfo = async(direccion) => {

    try {
        const resp = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(resp.lng, resp.lat);

        return `El Temperatura de ${ direccion} es de  ${ temp  } `;
    } catch (e) {
        return `Ocurrio un errar al obtener la temperatura de ${ direccion}`;
    }
}


getInfo(argv.direccion).then(console.log)
    .catch(console.log);