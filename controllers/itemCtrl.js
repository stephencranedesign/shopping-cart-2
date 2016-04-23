var Storage = require('../models/Storage-es6.js');

var storage = new Storage();
storage.add('Broad beans');
storage.add('Tomatoes');
storage.add('Peppers');

module.exports.get = function(req, res) {
    res.json(storage.items);
};
module.exports.post = function(req, res) {
    if(!req.body) {
        return res.sendStatus(400);
    }
    
    var item = storage.add(req.body.name);
    res.status(201).json(item);
};
module.exports.put = function(req, res) {
    if(!req.body) {
        return res.sendStatus(400);
    }

    var updatedItem = storage.update(req.body);
    if( updatedItem !== null ) res.status(200).json(updatedItem);
    else {
        updatedItem = storage.add(req.body.name);
        res.status(201).json(req.body);
    }

};
module.exports.delete = function(req, res) {
    var deletedItem = storage.delete(req.params.id);
    if(deletedItem !== null) deletedItem = deletedItem[0];
    if( deletedItem !== null ) res.status(200).json(deletedItem);
    else res.status(200).json({message: 'no item with that id'});

};