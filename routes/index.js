var express = require('express');
var router = express.Router();
var imageDb = require('../db/image.js')

router.get('/', function(req, res) {
  imageDb.getImage()
  .then(function(text){
  res.render('index', { text: text });
  })
  .catch(function(err){
    console.log(err);
  })
});


module.exports = router;
