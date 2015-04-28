/**
 * Created by JorgeAntonio on 24/04/2015.
 */
var connect = require('connect');
var http = require('http');
var fs = require('fs');

var app = connect();

app.use('/', inicio);
/*app.use('/clientes', clientes);
app.use('/buses', buses);

app.use('/insertarcliente', insertarCliente);*/

//
//404 response
function send404Response(response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404: Page not found :(");
    response.end();
}

//Handle an user request
function inicio(request, response){
    if(request.method == 'GET' && request.url == '/'){
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./public/index.html").pipe(response);
    }
    else if(request.method == 'GET' && request.url == '/clientes'){
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./public/clientes.html").pipe(response);
    }
    else if(request.method == 'GET' && request.url == '/buses'){
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./public/buses.html").pipe(response);
    }
    else if(rquest.method == 'POST' && request.url == '/insertarcliente'){
        console.log('cliente insertado');
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./public/clientes.html").pipe(response);
    }
    else
    {
        send404Response(response);
    }
}
//

//http.createServer(onRequest).listen(8888);
http.createServer(app).listen(8888);
console.log('server running...');
