var express = require('express');
var router = express.Router();
var signup = require('./signup');
var login = require('./login');
/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("Welcome to LS");
  res.render('index', { title: 'Welcome to LS' });

});
router.get('/list/:fname', function(req, res, next) {
	console.log("Welcome to List");
  res.render('list',{title : req.params.fname});

});


router.get('/signup', signup.first);
router.post('/admin_function', signup.second);
router.get('/login', login.first);
router.post('/admin_login', login.second);
module.exports = router;
