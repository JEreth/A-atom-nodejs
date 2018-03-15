var chai = require('chai');
var assert = chai.assert;
var sinon  = require('sinon');
var logger = require('../../app/helper/logger.js');

logger.initLogger({
  "settings": {
    "debug": true
  }
});


describe('helper/logger', function() {
  let spy = sinon.spy(console, 'log');
  describe('.log()', function() {
      it('should print mesage', function() {
        logger.log("Test Message");
        sinon.assert.calledWith(spy, sinon.match("Test Message"));
        spy.restore();
      });
  });
});
