const home = require('express').Router();

home.get('', function(req, res){

  return res.status(200).render('index');

});

module.exports = home;
