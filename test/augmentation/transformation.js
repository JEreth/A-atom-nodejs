var chai = require('chai');
var assert = chai.assert;

var transformation = require('../../app/augmentation/transformation.js');

var a = new transformation({
    "name": "increase field by 10",
    "type": "transformation",
    "parameters": ["newvalue","increase","oldvalue",10]
});
var dataset = {"oldvalue": 5.0};

describe('augmentation.transformation', function() {
  describe('.apply()', function() {

      a.apply(dataset);

      it('should add transformed field', function() {
          assert.isTrue(typeof dataset.newvalue !== "undefined");
      });

      it('should apply transformation', function() {
          assert.isTrue(dataset.newvalue == 15);
      });

      it('should keep old fields', function() {
          assert.isTrue(typeof dataset.oldvalue !== "undefined");
          assert.isTrue(dataset.oldvalue == 5);
      });
  });
});
