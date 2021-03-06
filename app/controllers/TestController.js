var http = require('http');

function TestController(args, cb) {
	var tmp_var = false;
}

TestController.prototype.test = function(cb) {
	// http://nass-api.azurewebsites.net/api/api_get?source_desc=SURVEY&sector_desc=ANIMALS%20%26%20PRODUCTS&group_desc=ANIMAL%20TOTALS&commodity_desc=ANIMAL%20TOTALS&statisticcat_desc=INDEX%20FOR%20PRICE%20RECEIVED%2C%201990%20-%201992&class_desc=INCL%20PRODUCTS
	var options = {
		host: 'nass-api.azurewebsites.net',
		port: 80,
		path: '/api/api_get?source_desc=SURVEY&sector_desc=ANIMALS%20%26%20PRODUCTS&group_desc=ANIMAL%20TOTALS&commodity_desc=ANIMAL%20TOTALS&statisticcat_desc=INDEX%20FOR%20PRICE%20RECEIVED%2C%201990%20-%201992&class_desc=INCL%20PRODUCTS',
		method: 'GET'
	};
	
	http.request(options, function(res) {
		var data = '';
		res.setEncoding('utf8');
		res.on('data', function(chunk) {
			data += chunk;
		});
		res.on('end', function() {
			cb(JSON.parse(data));
		});
	}).on('error', function(e) {
		console.log('ERROR: ', e);
	}).end();
}

module.exports = TestController;