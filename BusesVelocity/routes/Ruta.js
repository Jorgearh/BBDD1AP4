exports.post_insertar_ruta = function(req, res)
{
    var origen = req.body.punto_origen;
    var destino = req.body.punto_destino;

    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Jadm201113mysql',
        database: 'Practica4',
        port: 3306
    });
    connection.connect(function(error){
        if(error){
            throw error;
        }else{
            console.log('Conexion correcta.');
        }
    });
    var query = connection.query('INSERT INTO ruta(origen_ruta, destino_ruta) VALUES(?, ?)', [origen, destino], function(error, result){
            if(error){
                throw error;
            }else{
                console.log(result);
            }
        }
    );
    connection.end();

    res.render('buses.ejs',{title: 'Rutas'});
}

exports.post_insertar_punto_ruta = function(req, res)
{
    var origen = req.body.punto_origen;
    var destino = req.body.punto_destino;
    var punto = req.body.punto;
    var tiempo = req.bosy.tiempo;

    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Jadm201113mysql',
        database: 'Practica4',
        port: 3306
    });
    connection.connect(function(error){
        if(error){
            throw error;
        }else{
            console.log('Conexion correcta.');
        }
    });
    var query = connection.query('INSERT INTO punto_ruta(ruta_inicio, ruta_fin, punto, tiempo) VALUES(?, ?, ?, ?)', [origen, destino, punto, tiempo], function(error, result){
            if(error){
                throw error;
            }else{
                console.log(result);
            }
        }
    );
    connection.end();

    res.render('buses.ejs',{title: 'Rutas'});
}