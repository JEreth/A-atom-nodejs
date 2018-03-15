var input = require('./input');
var output = require('./output');
var augmentation = require('./augmentation')
var abstraction = require('./abstraction');



// constructor
function Atom(config, debug) {
  this.debug = (typeof debug !== 'undefined') ?  debug : false;
  this.config = config;
  this.log("Initialize Atom");

  // input
  this.inputs = [];
  for (input_config of config.input) {
    this.log("Initialize Input "+input_config.mode);
    this.inputs.push(new input[input_config.mode](this.config));
  }


  // output
  this.outputs = [];
  for (output_config of config.output) {
    this.log("Initialize Output "+output_config.mode);
    this.inputs.push(new output[output_config.mode](this.output_config));
  }

  // augmentations
  this.augmentations = [];
  for (augmentation_config of config.augmentation) {
    this.augmentations.push(new augmentation[augmentation_config.type](augmentation_config));
  }

  // abstractions
  this.abstractions = [];
  for (abstraction_config of config.abstraction) {
    this.abstractions.push(new abstraction[abstraction_config.type](abstraction_config));
  }

};

Atom.prototype.log = function(msg) {
  if (this.debug) {
    console.log("[DEBUG "+this.config.id+"] "+msg);
  }
};

// export the class
module.exports = Atom;
