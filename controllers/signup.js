var express 	= require('express');
var router 		= express.Router();
var userModel   = require.main.require('./models/user-model');
//var md5 = require('md5');


router.get('/signup', function(req, res){
	res.render('signup/index');
});


	userModel.insert(info,function(status){
		if (status) {
			res.redirect('signup');
		}
		else{
			res.redirect('/');
		}
	});

module.exports = router;