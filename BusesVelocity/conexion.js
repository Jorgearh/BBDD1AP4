/**
 * Created by JorgeAntonio on 26/04/2015.
 */
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
connection.end();