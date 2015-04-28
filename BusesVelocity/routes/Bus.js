exports.post_insertar_bus = function(req, res)
{
    var modelo = req.body.modelo_bus;
    var tipo = req.body.tipo_bus;

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
    var query = connection.query('INSERT INTO bus(modelo, tipo) VALUES(?, ?)', [modelo, tipo], function(error, result){
            if(error){
                throw error;
            }else{
                console.log(result);
            }
        }
    );
    connection.end();

    res.render('buses.ejs',{title: 'Buses'});
}

exports.post_eliminar_bus = function (req, res)
{
    var id = req.body.id_bus;

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

    var query = connection.query('DELETE FROM bus WHERE bus = ?', [id], function(error, result){
            if(error){
                throw error;
            }else{
                console.log(result);
                /*var resultado = result;
                 console.log(resultado.length);
                 if(resultado.length > 0)
                 console.log(resultado[0].tipo_bus + ' ' + resultado[0].nombre_tipo + ' ' + resultado[0].capacidad_tipo);
                 else
                 console.log("registro no encontrado...");*/
            }
        }
    );
    connection.end();

    res.render('buses.ejs',{title: 'Buses'});
}

exports.post_modificar_bus = function (req, res)
{
    var mysql = require('mysql');

    var id = req.body.id_bus;
    var origen = req.body.ruta_origen;
    var destino = req.body.ruta_destino;
    var fecha = req.body.fecha;

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

    var query = connection.query('UPDATE bus SET ruta_origen = ?, ruta_destino = ? WHERE bus = ? ', [origen, destino, id], function(error, result){
            if(error){
                throw error;
            }else
            {
                var resultado = result;
                console.log(resultado);
            }
        }
    );

    var query = connection.query('INSERT INTO LOG(fecha, bus, r_origen, r_destino) VALUES(?, ?, ?, ?)', [fecha, id, origen, destino], function(error, result){
            if(error){
                throw error;
            }else
            {
                var resultado = result;
                console.log(resultado);
            }
        }
    );

    connection.end();

    res.render('buses.ejs',{title: 'Buses'});
}
