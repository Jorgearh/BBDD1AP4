/**
 * Created by JorgeAntonio on 26/04/2015.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('reservaciones', { title: 'Reservaciones' });
});

module.exports = router;

