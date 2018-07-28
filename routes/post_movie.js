var express = require('express');
var router = express.Router();
var Movie = require('../models/movies');
var _ = require('underscore')


router.post('/', function(req, res, next) {
  
  console.log('POST debug')
  console.log(req.body)
  console.log('POST debug2')
  console.log(req.body._id)


  
  var movieObj = req.body
  var id = movieObj._id
   
  var _movie
  if(id !== '') {
    Movie.findById(id, function(err, movie){
    	if(err) {
    		console.log(err)
    	}
        _movie = _.extend(movie, movieObj)
        _movie.save(function(err, movie){
        	if(err) {
        		console.log(err)
        	}

        	res.redirect('/movie/' + movie.id)
        })
    })

  } else {

     _movie = new Movie({
		doctor: movieObj.doctor,
		title: movieObj.title,
		language: movieObj.language,
		country: movieObj.country,
		summary: movieObj.summary,
		flash: movieObj.flash,
		year: movieObj.year,  
		poster: movieObj.poster   	
     })

     _movie.save(function(err, movie){
    	if(err) {
    		console.log(err)
    	}

    	res.redirect('/movie/' + movie.id)     	
     })

  }

});

module.exports = router;
