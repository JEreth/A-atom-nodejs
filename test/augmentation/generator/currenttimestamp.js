var chai = require('chai');
var assert = chai.assert;
var generator = require('../../../app/augmentation/generator/currenttimestamp.js');

describe('augmentation.generator.currentTimestamp', function() {
  describe('.value()', function() {
      var v = generator.value();
      it('should return a valid timestamp', function() {
          assert.isTrue((new Date(v)).getTime() > 0);
      });
  });
});
