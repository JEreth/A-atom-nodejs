var chai = require('chai');
var assert = chai.assert;
var jsonFile = require('../../app/input/jsonfile.js');

var pathToTestfile = "./test/input/assets/";

var testObject = new jsonFile({
  'inputPath': pathToTestfile,
  'filename': 'test.json'
});

describe('input/jsonfile', function() {
  describe('.init()', function() {
      it('should create a valid path', function() {
          assert.isTrue(pathToTestfile+"test.json" === testObject.getFullFilename());
      });
  });

  describe('.get()', function() {
    it('should return first line of a json file', function() {
    testObject.get().then(function (v) {
        assert.isTrue(v === "first");
      });
    });
  });
});
