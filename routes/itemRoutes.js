var bodyParser = require('body-parser');
var itemsCtrl = require('../controllers/itemCtrl.js');

var jsonParser = bodyParser.json();

module.exports = function(app) {
        
    app.get('/items', itemsCtrl.get);
    app.post('/items', jsonParser, itemsCtrl.post);
    app.delete('/items/:id', jsonParser, itemsCtrl.delete);
    app.put('/items/:id', jsonParser, itemsCtrl.put);
    
    return app;
};