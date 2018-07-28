var express = require('express');
var router = express.Router();
var Movie = require('../models/movies');


router.get('/', function(req, res, next) {
  res.render('admin_movie', { 
  	title: '后台录入页',
  	movie: {
  		_id: '',
  		doctor: '',
		title: '',
		summary: '',
		country: '',
		language: '',
		year: '',
		poster: '',
		flash: ''
  	} 
  });
});

module.exports = router;
