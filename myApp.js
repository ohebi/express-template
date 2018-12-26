var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').load();
}

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

// --> 7)  Mount the Logger middleware here
app.use(function(req, res, next) {
	console.log(`${req.method} ${req.path} - ${req.ip}`);
	next();
})

// --> 11)  Mount the body-parser middleware  here
app.use(bodyParser.urlencoded({extended: false}));

/** 1) Meet the node console. */


/** 2) A first working Express Server */
// app.get('/', function(req, res) {
// 	 res.send('Hello Express');
// });


/** 3) Serve an HTML file */
// let absolutepath = __dirname + '/views/index.html';
// app.get('/', function(req, res) {
// 	res.sendFile(absolutepath);
// });


/** 4) Serve static assets  */
// let absolutepath = __dirname + '/views/index.html';
// app.get('/', function(req, res) {
// 	res.sendfile(absolutepath);
// });
// 
// app.use(express.static(__dirname + '/public'));

/** 5) serve JSON on a specific route */
// let absolutepath = __dirname + '/views/index.html';
// app.get('/', function(req, res) {
// 	res.sendfile(absolutepath);
// });
// 
// app.get('/json', function(req, res) {
// 	res.json({"message": "Hello json"});
// });
// 
// app.use(express.static(__dirname + '/public'));

/** 6) Use the .env file to configure the app */
// let absolutePath = __dirname + '/views/index.html';
// app.get('/', function(req, res) {
// 	res.sendFile(absolutePath);
// });
// 
// app.get('/json', function(req, res) {
// 	let obj = {'message': 'Hello json'};
// 	if (process.env.MESSAGE_STYLE === 'uppercase') {
// 		obj.message = obj.message.toUpperCase();
// 	}
// 	res.json(obj);
// });
// 
// app.use(express.static(__dirname + '/public'));

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
// let absolutepath = __dirname + '/views/index.html';
// app.get('/', function(req, res) {
// 	res.sendfile(absolutepath);
// });
// 
// app.get('/json', function(req, res) {
// 	let obj = {'message': 'hello json'};
// 	if (process.env.MESSAGE_STYLE === 'uppercase') {
// 		obj.message = obj.message.toUpperCase();
// 	}
// 	res.json(obj);
// });
// 
// app.use(express.static(__dirname + '/public'));


/** 8) Chaining middleware. A Time server */
// let absolutepath = __dirname + '/views/index.html';
// app.get('/', function(req, res) {
// 	res.sendfile(absolutepath);
// });
// 
// app.get('/json', function(req, res) {
// 	let obj = {'message': 'hello json'};
// 	if (process.env.MESSAGE_STYLE === 'uppercase') {
// 		obj.message = obj.message.toUpperCase();
// 	}
// 	res.json(obj);
// });
// 
// app.get('/now', function(req, res, next) {
// 	req.time = new Date().toString();
// 	next();
// }, function(req, res) {
// 	res.json({"time": req.time});
// });
// 
// app.use(express.static(__dirname + '/public'));

/** 9)  Get input from client - Route parameters */
// let absolutepath = __dirname + '/views/index.html';
// app.get('/', function(req, res) {
// 	res.sendfile(absolutepath);
// });
// 
// app.get('/json', function(req, res) {
// 	let obj = {'message': 'hello json'};
// 	if (process.env.MESSAGE_STYLE === 'uppercase') {
// 		obj.message = obj.message.toUpperCase();
// 	}
// 	res.json(obj);
// });
// 
// app.get('/now', function(req, res, next) {
// 	req.time = new Date().toString();
// 	next();
// }, function(req, res) {
// 	res.json({"time": req.time});
// });
// 
// app.get('/:word/echo', function(req, res) {
// 	res.json({'echo': req.params.word});
// });
// 
// app.use(express.static(__dirname + '/public'));

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
let absolutepath = __dirname + '/views/index.html';
app.get('/', function(req, res) {
	res.sendfile(absolutepath);
});

app.get('/json', function(req, res) {
	let obj = {'message': 'hello json'};
	if (process.env.MESSAGE_STYLE === 'uppercase') {
		obj.message = obj.message.toUpperCase();
	}
	res.json(obj);
});

app.get('/now', function(req, res, next) {
	req.time = new Date().toString();
	next();
}, function(req, res) {
	res.json({"time": req.time});
});

app.get('/:word/echo', function(req, res) {
	res.json({'echo': req.params.word});
});

app.get('/name', function(req, res) {
		res.json({'name': `${req.query.first} ${req.query.last}`});
});


app.use(express.static(__dirname + '/public'));

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */
app.post('/name', function(req, res) {
	res.json({name: req.body.first + ' ' + req.body.last});
});

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
// app.listen(process.env.PORT || 3000 );

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
