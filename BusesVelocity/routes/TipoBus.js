exports.post_insertar_tipo_bus = function(req, res){
    var nombre_tipo = req.body.nombre_tipo;
    var capacidad_tipo = req.body.capacidad_tipo;

    var conexion = require('conexion.js');


    res.render('buses.ejs',{title: 'Buses'});
}