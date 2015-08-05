var express = require('express');
var router = express.Router();
var TestController = require('../controllers/TestController');

//	GET			/
router.get('/', function (req, res, next) {
	var tc = new TestController();
	tc.test();
	res.render('index', {
		title: 'USDA Agriculture Visualization'
	});
});

module.exports = router;