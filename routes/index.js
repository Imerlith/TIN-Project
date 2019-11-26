var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Gamers denn', mainTitle: 'XxX_G4m3r$_D3nn_XxX' });
// });

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../templates/index.html'))
});

module.exports = router;
