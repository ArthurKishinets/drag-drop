var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  //res.end('users');
  res.sendFile(path.join(__dirname, '../../public/views/articles.html'));
});

module.exports = router;
