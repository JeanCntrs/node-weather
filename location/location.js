const axios = require('axios');

const getLocation = async(direction) => { // Una función async siempre regresa una promesa

    const encodedURL = encodeURI(direction);

    console.log(encodedURL);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedURL }`,
        headers: {'x-rapidapi-key': '440c4bfc1cmsh221972943a56462p1691acjsnb7ccd35691af'}
    });

    const response = await instance.get();

    if (response.data.Results.length === 0) {
        throw new Error(`No se encontraron resultados para ${ direction }`);
    }

    const data = response.data.Results[0];
    const address = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        address,
        lat,
        lon
    }

}

module.exports = {
    getLocation
}