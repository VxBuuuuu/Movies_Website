var express = require('express');
var router = express.Router();
var Movie = require('../models/movies');

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log('home page')
  Movie.fetch(function(err, movies) {
    if (err) {
      console.log(err)
    }

    res.render('index', { 
      title: 'Imooc 首页',
      movies: movies
    }); 
       
  })

  // res.render('index', { 
  // 	title: 'Imooc 首页',
  //   movies: [{
  //   	title: 'Machine Police',
  //   	_id:1,
  //   	poster: 'https://img3.doubanio.com/view/photo/l/public/p2157809996.webp'
  //   }, {
  //   	title: 'Machine Police',
  //   	_id:2,
  //   	poster: 'https://img1.doubanio.com/view/photo/l/public/p2170735207.webp'
  //   }]
  // 	 });
});

module.exports = router;
