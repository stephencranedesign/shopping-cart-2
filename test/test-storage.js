var chai = require('chai');
var Storage = require('../models/Storage.js');

var should = chai.should();

var storage = new Storage();

describe('Storage', function() {
    it('should have an empty items array for a new instance and id of 0', function(done) {
        storage.items.should.be.a('array');
        storage.items.should.have.length(0);
        storage.id.should.be.a('number');
        storage.id.should.equal(0);
        done();
    });

    it('should add object with passed name to items array and return item added when calling method ADD', function(done) {
        storage.add('Broad beans');

        storage.items.should.have.length(1);
        storage.items[0].should.be.a('object');
        storage.items[0].should.have.property('id');
        storage.items[0].should.have.property('name');
        storage.items[0].id.should.be.a('number');
        storage.items[0].name.should.be.a('string');
        storage.items[0].name.should.equal('Broad beans');
        
        done();
    });
    
    it('should update name of object in items array with name propery of supplied object for existing ids when calling method UPDATE', function(done) {
        storage.update({name:'Tuna', id: 0});
        
        storage.items.should.be.a('array');
        storage.items.should.have.length(1);
        storage.items[0].should.be.a('object');
        storage.items[0].should.have.property('id');
        storage.items[0].should.have.property('name');
        storage.items[0].id.should.be.a('number');
        storage.items[0].name.should.be.a('string');
        storage.items[0].name.should.equal('Tuna');
       
        done();
    });
    
    
    it('should delete object from items array with supplied id when calling method DELETE', function(done) {
        storage.delete(0);
        
        storage.items.should.be.a('array');
        storage.items.should.have.length(0);
                
        done(); 
    });
    
    it('should fail gracefully when calling method DELETE with id not in items array', function(done) {
        
        should.not.throw(function() {
            storage.delete(0);
        });
                
        done(); 
    });
});