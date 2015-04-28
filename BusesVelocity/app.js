var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//****
var routes = require('./routes/index');
var buses = require('./routes/buses');
var rutas = require('./routes/rutas');
var reservaciones = require('./routes/reservaciones');
var pagos = require('./routes/pagos');
var consultas = require('./routes/consultas');

var TipoBus = require('./routes/TipoBus');
var Bus = require('./routes/Bus');
var Ruta = require('./routes/Ruta');
//****

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//***
app.use('/', routes);
app.use('/buses', buses);
app.use('/rutas', rutas);
app.use('/reservaciones', reservaciones);
app.use('/pagos', pagos);
app.use('/consultas', consultas);


app.post('/InsertarTipoBus', TipoBus.post_insertar_tipo_bus);
app.post('/EliminarTipoBus', TipoBus.post_eliminar_tipo_bus);
app.post('/ModificarTipoBus', TipoBus.post_modificar_tipo_bus);

app.post('/InsertarBus', Bus.post_insertar_bus);
app.post('/EliminarBus', Bus.post_eliminar_bus);
app.post('/ModificarBus', Bus.post_modificar_bus);

app.post('/InsertarRuta', Ruta.post_insertar_ruta);
app.post('/InsertarPuntoRuta', Ruta.post_insertar_punto_ruta);
//***

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
