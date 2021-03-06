exports.post_insertar_tipo_bus = function(req, res)
{
    var nombre_tipo = req.body.nombre_tipo;
    var capacidad_tipo = req.body.capacidad_tipo;

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
    var query = connection.query('INSERT INTO tipo_bus(nombre_tipo, capacidad_tipo) VALUES(?, ?)', [nombre_tipo, capacidad_tipo], function(error, result){
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

exports.post_eliminar_tipo_bus = function (req, res)
{
    var nombre_tipo = req.body.nombre_tipo;

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

    var query = connection.query('DELETE FROM tipo_bus WHERE nombre_tipo = ?', [nombre_tipo], function(error, result){
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

exports.post_modificar_tipo_bus = function (req, res)
{
    var mysql = require('mysql');

    var nombre_tipo = req.body.nombre_tipo;
    var capacidad_tipo = req.body.capacidad_tipo;

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

    var query = connection.query('UPDATE tipo_bus SET capacidad_tipo = ? WHERE nombre_tipo = ? ', [capacidad_tipo, nombre_tipo], function(error, result){
            if(error){
                throw error;
            }else
            {
                 var resultado = result;
                console.log(resultado);
                 /*if(resultado.length > 0)
                 {
                     var tipos;
                     for(i = 0; i < resultado.length; i++)
                     {
                         tipos += '<option>'+ resultado[i] +'</option>';
                     }
                     console.log(resultado[0].TIPO_BUS + ' ' + resultado[0].NOMBRE_TIPO + ' ' + resultado[0].CAPACIDAD_TIPO);
                 }
                 else
                 {
                     console.log("registro no encontrado...");
                 }*/
            }
        }
    );
    connection.end();

    res.render('buses.ejs',{title: 'Buses'});
}