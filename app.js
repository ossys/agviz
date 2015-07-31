var express = require('express');
var config = require('./config/config');
var glob = require('glob');
var mongodb2 = require('./app/models/db/Mongodb2');

var agviz = glob.sync(config.root + '/app/models/agviz/*.js');
agviz.forEach(function(model) {
  require(model);
});
var app = express();

require('./config/express')(app, config);

app.listen(process.env['PORT'] || config.port);

