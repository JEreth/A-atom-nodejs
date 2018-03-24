var chai = require('chai');
var assert = chai.assert;
var transformation = require('../../../app/augmentation/transformations/increase.js');

describe('augmentation.transformations.increase', function() {
  describe('.value()', function() {
      it('should add a value to a given field', function() {
        var increasedValue = transformation.value({oldvalue: 5},['newfieldname','method','oldvalue',10]);
          assert.isTrue(increasedValue == 15.0);
      });
  });
});
