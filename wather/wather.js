const axios = require('axios');

const getWeather = async(lat, lon) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=1ab5bc218994c823861b6e8ec08db90c`);
    return response.data.main.temp;
}

module.exports = {
    getWeather
}