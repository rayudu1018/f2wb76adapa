var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('food', { title: 'Search Results food' });
});

module.exports = router;
