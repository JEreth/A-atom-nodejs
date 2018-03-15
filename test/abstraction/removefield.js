var chai = require('chai');
var assert = chai.assert;

var removeField = require('../../app/abstraction/removefield.js');

var a = new removeField({
    "name": "remove old timestamp",
    "type": "removeField",
    "parameters": ["timestamp"]
});
var dataset = {"something": "is here", "timestamp": "will be removed"};

describe('removeField', function() {
  describe('.apply()', function() {

      a.apply(dataset);

      it('should remove field ', function() {
          assert.isTrue(typeof dataset.timestamp === "undefined");
      });

      it('should keep old fields', function() {
          assert.isTrue(typeof dataset.something !== "undefined");
      });
  });
});
