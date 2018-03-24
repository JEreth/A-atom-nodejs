var chai = require('chai');
var assert = chai.assert;

var addField = require('../../app/augmentation/addfield.js');

var a = new addField({
    "name": "additionalTimestamp",
    "type": "addField",
    "parameters": ["additionalTimestamp", "currentTimestamp"]
});
var dataset = {"something": "is here"};

describe('augmentation.addfield', function() {
  describe('.apply()', function() {

      a.apply(dataset);

      it('should remove field', function() {
          assert.isTrue(typeof dataset.additionalTimestamp !== "undefined");
      });

      it('should add field that returns a certain type', function() {
          assert.isTrue((new Date(dataset['additionalTimestamp'])).getTime() > 0);
      });

      it('should keep old fields', function() {
          assert.isTrue(typeof dataset.something !== "undefined");
      });
  });
});
