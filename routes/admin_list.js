var express = require('express');
var router = express.Router();
var Movie = require('../models/movies');

/* GET home page. */
router.get('/', function(req, res, next) {

  Movie.fetch(function(err, movies) {
    if (err) {
      console.log(err)
    }
    res.render('admin_list', { 
      title: '列表页',
      movies: movies
    });   
  // res.render('admin_list', { 
  // 	title: '列表页' ,
  // 	movies: [{
  // 		_id: 1,
  // 		doctor: '何塞·帕迪里亚',
  //       title: 'RoboCop',
  //       summary: '动作 / 科幻 / 犯罪 . 铁甲威龙(港) / 新版铁甲威龙 / 新版机器战警 / 机器战警',
  //       country: '美国',
  //       language: '英语',
  //       year: 2014-02-12,
  //       poster: 'https://img3.doubanio.com/view/photo/l/public/p2157809996.webp',
  //       flash:'http://183.60.145.82/69775158DF34D813E8E29D3F9B/030020010052E4AD36A9B9038D148B9A27DC9B-CCF0-7BC4-5010-3C2562091740.mp4?ccode=0502&duration=138&expire=18000&psid=24d8d7ad64468d96e393e2f4c228d42e&sp=&ups_client_netip=71450d33&ups_ts=1532745358&ups_userid=&utid=yI1oDvz9KCoCAXyv17eHotdT&vid=XNjY2NDIwMTA0&vkey=Bbbb48e27c7e8b66204791a4bf7b654c6'
  // 	  	}]

  });
});


router.delete('/', function(req, res, next) {
  
  var id = req.query.id
  if(id) {
    Movie.remove({_id:id}, function(err, movie) {

        console.log(err)
        console.log('delete respon')
        res.send({success:1})
    })
  }

});

module.exports = router;
