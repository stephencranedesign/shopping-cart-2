var bodyParser = require('body-parser');
var itemsCtrl = require('../controllers/itemCtrl.js');

var jsonParser = bodyParser.json();

module.exports = function(app, storage) {
        
    app.get('/items', itemsCtrl.get(storage));
    app.post('/items', jsonParser, itemsCtrl.post(storage));
    app.delete('/items/:id', jsonParser, itemsCtrl.delete(storage));
    app.put('/items/:id', jsonParser, itemsCtrl.put(storage));
    
    return app;
};