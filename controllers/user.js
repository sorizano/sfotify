'use strict'

function pruebas(req, res){
    res.status(200).send({
        message: 'Probando la conexión'
    });
}

module.exports = {
    pruebas
};