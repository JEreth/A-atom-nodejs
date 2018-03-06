var chai = require('chai');
var assert = chai.assert;

var Atom = require("../app/atom.js");

// test config
var config = {
    "id": "testatom",
    "input": {
        "mode": "jsonfile"
    },
    "output": {
      "mode": "console"
    },
    "augmentation": [
      {
          "name": "additionalTimestamp",
          "generator": "currentTimestamp",
          "parameters": []
      }
    ]
};

var myAtom = new Atom(config);

describe('Atom', function() {
    it('should save given config', function() {
        assert.isTrue(config === myAtom.config);
    });
});
