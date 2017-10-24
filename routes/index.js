var express = require('express');
var router = express.Router();
var fs=require('fs')
/* GET home page. */
router.get('/', function(req, res, next) {
	
	var data=fs.readFileSync('public/index.txt','utf-8')
	
	data=data.split(':')
	data=data[1]
	data++
	
	fs.writeFile('public/index.txt','index页面访问次数:'+data,function(err){
		res.render('index', { title: 'Express' });
	})
  
});


router.get('/a', function(req, res, next) {
	
	var data=fs.readFileSync('public/hw.txt','utf-8')
	
	data=data.split(':')
	data=data[1]
	data++
	
	fs.writeFile('public/hw.txt','jhw页面访问次数:'+data,function(err){
		res.render('jhw', { title: 'Express' });
	})

});

module.exports = router;
