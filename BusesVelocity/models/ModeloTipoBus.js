var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jadm201113mysql',
    database: 'Practica4',
    port: 3306
});

var TipoBusModel = {};

TipoBusModel.ObtenerTipos = function (callback)
{
    if(connection)
    {
        connection.query('SELECT * FROM tipo_bus', function (error, rows)
        {
            if(error)
            {
                throw error;
            }
            else
            {
                callback(null, rows);
            }
        })
    }
}

module.exports = TipoBusModel;

/*connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion correcta.');
    }
});*/
//connection.end();