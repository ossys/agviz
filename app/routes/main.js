var session = require('express-session');
var flash = require('express-flash');
var parser = require('body-parser');

module.exports = function (app) {
	// https://codeforgeek.com/2014/09/manage-session-using-node-js-express-4/
	app.use(session({
	    cookie: { maxAge: 60000 },
	    store: new session.MemoryStore,
	    saveUninitialized: true,
	    resave: 'true',
	    secret: 'secret'
	}));
	
	// http://stackoverflow.com/questions/5710358/how-to-get-post-a-query-in-express-js-node-js
	app.use(parser.json());
	app.use(parser.urlencoded({
		  extended: true
	}));
	
	// https://gist.github.com/brianmacarthur/a4e3e0093d368aa8e423
	app.use(flash());
	
	app.use('/', require('./home'));
};