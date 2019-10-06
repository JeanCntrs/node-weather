const location = require('./location/location');

const weather = require ('./wather/wather');

const argv = require('./config/yargs').argv;

/* location.getLocation(argv.address)
    .then(response => {
        console.log(response);
    }); */

/* weather.getWeather(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log); */

const getInformation = async(address) => {
    try {
        const coordinates = await location.getLocation(address);
        const temperature = await weather.getWeather(coordinates.lat, coordinates.lon);
        console.log(temperature);
        console.log(coordinates.address);
        return `El clima de ${ coordinates.address } es de ${ temperature }.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${ address }.`;
    } 
}

getInformation(argv.address)
    .then(console.log)
    .catch(console.log);