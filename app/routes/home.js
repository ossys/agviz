var express = require('express');
var router = express.Router();
var NASSRestController = require('../controllers/NASSRestController');

//	GET			/
router.get('/', function (req, res, next) {
	var nass = new NASSRestController();
	nass.setSource(NASSRestController.SOURCE.CENSUS);
	nass.setSector(NASSRestController.SECTOR.CROPS);
	nass.setGroup(NASSRestController.GROUP.FIELD_CROPS);
	nass.setCommodity(NASSRestController.COMMODITY.TRITICALE);
	nass.getJson(function(json) {
		res.render('index', {
			title: 'USDA Agriculture Visualization',
			length : json.data.length
		});
	});
});

module.exports = router;