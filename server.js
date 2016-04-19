var express = require('express');
var itemRoutes = require('./routes/itemRoutes.js');
var Storage = require('./models/Storage-es6.js');

var storage = new Storage();
storage.add('Broad beans');
storage.add('Tomatoes');
storage.add('Peppers');

var app = express();
app.use(express.static('public'));
app.listen(process.env.PORT || 8080);

app = itemRoutes(app, storage);

module.exports.app = app;
module.exports.storage = storage;