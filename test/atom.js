var chai = require('chai');
var assert = chai.assert;

var Atom = require("../app/atom.js");

// test config
var config = {
    "id": "testatom",
    "input": [
      {
        "mode": "jsonfile",
        "filename": "test.json"
      }
    ],
    "output": [
      {
      "mode": "console"
      }
    ],
    "augmentation": [
      {
          "name": "additionalTimestamp",
          "type": "addField",
          "parameters": ["additionalTimestamp", "currentTimestamp"]
      }
    ]
};

var myAtom = new Atom(config);

describe('Atom', function() {
  describe('.init()', function() {
      it('should save given config', function() {
          assert.isTrue(config === myAtom.config);
      });
  });
});
