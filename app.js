var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var admin_movie = require('./routes/admin_movie');
var admin_list = require('./routes/admin_list');
var detail = require('./routes/detail');
var post_movie = require('./routes/post_movie');
var update_movie = require('./routes/update_movie');


var app = express();

mongoose.connect('mongodb://localhost/imooc')

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, './views/pages'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'bower_components')));

app.use('/', index);
app.use('/users', users);
app.use('/admin/movie', admin_movie);
app.use('/admin/list', admin_list);
app.use('/movie', detail);
app.use('/admin/movie/new', post_movie);
app.use('/admin/update', update_movie);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
