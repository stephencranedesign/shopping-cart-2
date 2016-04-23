var express = require('express');
var itemRoutes = require('./routes/itemRoutes.js');

var app = express();
app.use(express.static('public'));
app.listen(process.env.PORT || 8080);

app = itemRoutes(app);

module.exports.app = app;