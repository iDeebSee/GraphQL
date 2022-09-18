var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Express JS'); //render istead of send
});

module.exports = router;
