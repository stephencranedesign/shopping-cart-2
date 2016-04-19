var Storage = function(argument) {
    this.items = [];
    this.id = 0;
};

Storage.prototype.add = function(name) {
    var item = {name: name, id: this.id};
    this.items.push(item);
    this.id+=1;
    return item;
};

Storage.prototype.delete = function(id) {
    var deletedItem = null;
    this.items.forEach(function(item, i) {
        if(item.id === parseInt(id)) deletedItem = this.items.splice(i,1);
    }, this); 
    return deletedItem;
};

Storage.prototype.update = function(obj) {
    var updatedItem = null;
    this.items.forEach(function(item, i) {
        if(item.id === obj.id) {
            this.items.splice(i,1, obj);
            updatedItem = this.items[i];
        }
    }, this); 
    return updatedItem;
};

module.exports = Storage;