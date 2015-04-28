/**
 * Created by JorgeAntonio on 24/04/2015.
 */

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Practica4',
    port: 3030
});

connection.connect(function(error){
    if(error){
        throw error;
    }else {
        console.log('Conexión exitosa');
    }
});

connection.end();
