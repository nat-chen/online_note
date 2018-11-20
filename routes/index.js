var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data;
  if(req.session.user){
    data = {
      isLogin: true,
      user: req.session.user
    }
  }else{
    data = {
      isLogin: false
    }
  }
  res.render('index', data); //使用视图模板 views/index.ejs （已在根目录下 app.js 设置）
});

module.exports = router;
