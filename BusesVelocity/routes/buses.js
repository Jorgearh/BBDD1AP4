var express = require('express');
var router = express.Router();

/* GET buses page. */
router.get('/', function(req, res, next) {
    res.render('buses', { title: 'Buses' });
});

module.exports = router;

