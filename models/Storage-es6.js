"use strict";

class Storage {
    constructor(argument) {
        this.items = [];
        this.id = 0;
    }
    
    add(name) {
        var item = {name: name, id: this.id};
        this.items.push(item);
        this.id+=1;
        return item;
    }
    
    delete(id) {
        var deletedItem = null;
        this.items.forEach(function(item, i) {
            if(item.id === parseInt(id)) deletedItem = this.items.splice(i,1);
        }, this); 
        return deletedItem;
    }
    
    update(obj) {
        var updatedItem = null;
        this.items.forEach(function(item, i) {
            if(item.id === obj.id) {
                this.items.splice(i,1, obj);
                updatedItem = this.items[i];
            }
        }, this); 
        return updatedItem;
    }
    
}

module.exports = Storage;