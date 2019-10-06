const argv = require('yargs').options({ // Configura argumentos directamente en la raiz de la aplicación
    address: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv);

module.exports = {
    argv
}