var input = require('./input');
var output = require('./output');

// constructor
function Atom(config, debug) {
  this.debug = (typeof debug !== 'undefined') ?  debug : false;
  this.config = config;
  this.log("Initialize Atom");
  this.input = this.initInput();
};

// class methods
Atom.prototype.initInput = function() {
  this.log("Initialize Input "+this.config.input.mode);
  return new input[this.config.input.mode](this.config);
};

Atom.prototype.initOutput = function() {
  this.log("Initialize Output "+this.config.output.mode);
  return new output[this.config.output.mode](this.config);
};

Atom.prototype.log = function(msg) {
  if (this.debug) {
    console.log("[DEBUG "+this.config.id+"] "+msg);
  }
};

// export the class
module.exports = Atom;
