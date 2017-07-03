'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/curso_mean2', (err, res)=>{
    if(err){
        throw err;
    }
    else{
        console.log("La base de datos esta disponible")

        app.listen(port, function(){
            console.log("Servidor del app http://localhost:"+port);
        });
    }
});