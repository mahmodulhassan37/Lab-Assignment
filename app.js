//declaration
var express 		= require('express');
var bodyParser 		= require('body-parser');
var ejs 			= require('ejs');
var exSession 		= require('express-session');
var cookieParser 	= require('cookie-parser');
var signup 			= require('./controllers/signup');

var app = express();

//configuration
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use('/signup', signup);


//routes
app.get('/', function(req, res){
	res.render('index');
});

//server startup
app.listen(3000, function(){
	console.log('server started at 3000!');
});
