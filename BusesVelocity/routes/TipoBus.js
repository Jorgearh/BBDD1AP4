exports.post_insertar_tipo_bus = function(req, res){
    var nombre_tipo = req.body.nombre_tipo;
    var capacidad_tipo = req.body.capacidad_tipo;

    var tipo_bus_model = require("C:/Users/JorgeAntonio/Documents/2015_semestre_1/Bases de datos 1/Laboratorio/Practica4/BusesVelocity/models/ModeloTipoBus.js");
    //var modeloTipoBus = require('./models/ModeloTipoBus');

    tipo_bus_model.objectToValues()

    res.render('buses.ejs',{title: 'Buses'});
 }