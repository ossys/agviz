var http = require('http');

function NASSRestController() {
	this.source = null;
	this.sector = null;
	this.group = null;
	this.commodity = null;
}

NASSRestController.prototype.setSource = function(source) {
	this.source = source;
}

NASSRestController.prototype.setSector = function(sector) {
	this.sector = sector;
}

NASSRestController.prototype.setGroup = function(group) {
	this.group = group;
}

NASSRestController.prototype.setCommodity = function(commodity) {
	this.commodity = commodity;
}

NASSRestController.prototype.getJson = function(cb) {
	var path = '/api/api_get?';
	var amp = false;
	
	if(this.source !== null) {
		if(amp) { path += '&'; }
		path += 'source_desc=' + this.source;
		amp = true;
	}
	
	if(this.sector !== null) {
		if(amp) { path += '&'; }
		path += 'sector_desc=' + this.sector;
		amp = true;
	}
	
	if(this.group !== null) {
		if(amp) { path += '&'; }
		path += 'group_desc=' + this.group;
		amp = true;
	}
	
	if(this.commodity !== null) {
		if(amp) { path += '&'; }
		path += 'commodity_desc=' + this.commodity;
		amp = true;
	}

	console.log('PATH: ' + path);
	
	// http://nass-api.azurewebsites.net/api/api_get?source_desc=SURVEY&sector_desc=ANIMALS%20%26%20PRODUCTS&group_desc=ANIMAL%20TOTALS&commodity_desc=ANIMAL%20TOTALS&statisticcat_desc=INDEX%20FOR%20PRICE%20RECEIVED%2C%201990%20-%201992&class_desc=INCL%20PRODUCTS
	var options = {
		host: 'nass-api.azurewebsites.net',
		port: 80,
		path: path,
		method: 'GET'
	};
	
	var i =0;
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

NASSRestController.SOURCE = Object.freeze({
	CENSUS: 'CENSUS',
	SURVEY: 'SURVEY'
});

NASSRestController.SECTOR = Object.freeze({
	ANIMALS_AND_PRODUCTS: 'ANIMALS%20%26%20PRODUCTS',
	CROPS: 'CROPS',
	DEMOGRAPHICS: 'DEMOGRAPHICS',
	ECONOMICS: 'ECONOMICS',
	ENVIRONMENTAL: 'ENVIRONMENTAL'
});

NASSRestController.GROUP = Object.freeze({
	ANIMAL_TOTALS: 'ANIMAL%20TOTALS',
	AQUACULTURE: 'AQUACULTURE',
	DAIRY: 'DAIRY',
	LIVESTOCK: 'LIVESTOCK',
	POULTRY: 'POULTRY',
	SPECIALTY: 'SPECIALTY',
	CROP_TOTALS: 'CROP%20TOTALS',
	FIELD_CROPS: 'FIELD%20CROPS',
	FRUIT_AND_TREE_NUTS: 'FRUIT%20%26%20TREE%20NUTS',
	HORTICULTURE: 'HORTICULTURE',
	VEGETABLES: 'VEGETABLES',
	ENERGY: 'ENERGY',
	EXPENSES: 'EXPENSES',
	FARMS_AND_LAND_AND_ASSETS: 'FARMS%20%26%20LAND%20%26%20ASSETS',
	INCOME: 'INCOME',
	IRRIGATION: 'IRRIGATION',
	OPERATORS: 'OPERATORS'
});

NASSRestController.COMMODITY = Object.freeze({
	CROP_TOTALS: 'CROP%20TOTALS',
	CROPS_OTHER: 'CROPS%2C%20OTHER',
	PACKING_FACILITY: 'PACKING%20FACILITY',
	AMARANTH: 'AMARANTH',
	BARLEY: 'BARLEY',
	BEANS: 'BEANS',
	BUCKWHEAT: 'BUCKWHEAT',
	CAMELINA: 'CAMELINA',
	CANOLA: 'CANOLA',
	CORN: 'CORN',
	COTTON: 'COTTON',
	CRAMBE: 'CRAMBE',
	DILL: 'DILL',
	EMMER_AND_SPELT: 'EMMER%20%26%20SPELT',
	FIELD_CROP_TOTALS: 'FIELD%20CROP%20TOTALS',
	FIELD_CROPS_OTHER: 'FIELD%20CROPS%2C%20OTHER',
	FLAXSEED: 'FLAXSEED',
	GRAIN: 'GRAIN',
	GRAIN_STORAGE_CAPACITY: 'GRAIN%20STORAGE%20CAPACITY',
	GRASSES: 'GRASSES',
	GRASSES_AND_LEGUMES_TOTALS: 'GRASSES%20%26%20LEGUMES%20TOTALS',
	GRASSES_AND_LEGUMES_OTHER: 'GRASSES%20%26%20LEGUMES%2C%20OTHER',
	GUAR: 'GUAR',
	HAY: 'HAY',
	HAY_AND_HAYLAGE: 'HAY%20%26%20HAYLAGE',
	HAYLAGE: 'HAYLAGE',
	HERBS: 'HERBS',
	HOPS: 'HOPS',
	JOJOBA: 'JOJOBA',
	LEGUMES: 'LEGUMES',
	LENTILS: 'LENTILS',
	LOTUS_ROOT: 'LOTUS%20ROOT',
	MAPLE_SYRUP: 'MAPLE%20SYRUP',
	MILLET: 'MILLET',
	MINT: 'MINT',
	MISCANTHUS: 'MISCANTHUS',
	MUSTARD: 'MUSTARD',
	OATS: 'OATS',
	PEANUTS: 'PEANUTS',
	PEAS: 'PEAS',
	PEAS_AND_LENTILS: 'PEAS%20%26%20LENTILS',
	POPCORN: 'POPCORN',
	RAPESEED: 'RAPESEED',
	RICE: 'RICE',
	RYE: 'RYE',
	SAFFLOWER: 'SAFFLOWER',
	SESAME: 'SESAME',
	SMALL_GRAINS: 'SMALL%20GRAINS',
	SORGHUM: 'SORGHUM',
	SOYBEANS: 'SOYBEANS',
	SUGARBEETS: 'SUGARBEETS',
	SUGARCANE: 'SUGARCANE',
	SUNFLOWER: 'SUNFLOWER',
	SWEET_RICE: 'SWEET%20RICE',
	SWITCHGRASS: 'SWITCHGRASS',
	TARO: 'TARO',
	TOBACCO: 'TOBACCO',
	TRITICALE: 'TRITICALE',
	WHEAT: 'WHEAT',
	WILD_RICE: 'WILD%20RICE',
	AQUATIC_PLANTS: 'AQUATIC%20PLANTS'
});

module.exports = NASSRestController;