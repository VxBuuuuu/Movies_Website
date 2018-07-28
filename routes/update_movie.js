var express = require('express');
var router = express.Router();
var Movie = require('../models/movies');


router.get('/:id', function(req, res, next) {

  var id = req.params.id
  Movie.findById(id, function(err, movie){

    if(err)
      {
        console.log(err)
      }

    res.render('admin_movie', { 
      title: '后台更新页',
      movie: movie
    });


  })

});

module.exports = router;
