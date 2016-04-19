module.exports.get = function(storage) {
    return function(req, res) {
        res.json(storage.items);
    };
};
module.exports.post = function(storage) {
    return function(req, res) {
        if(!req.body) {
            return res.sendStatus(400);
        }
    
        var item = storage.add(req.body.name);
        res.status(201).json(item);
    };
};
module.exports.put = function(storage) {
    return function(req, res) {
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
};
module.exports.delete = function(storage) {
    return function(req, res) {
        var deletedItem = storage.delete(req.params.id);
        if(deletedItem !== null) deletedItem = deletedItem[0];
        if( deletedItem !== null ) res.status(200).json(deletedItem);
        else res.status(200).json({message: 'no item with that id'});
    }
};