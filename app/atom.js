var input = require('./input');
var output = require('./output');
var helper = require('./helper');
var augmentation = require('./augmentation');

// constructor
function Atom(config) {
  this.config = config;
  helper.logger.log("Initialize Atom");

  // input
  this.inputs = [];
  for (input_config of config.input) {
    helper.logger.log("Initialize Input "+input_config.mode);
    this.inputs.push(new input[input_config.mode](input_config));
  }

  // output
  this.outputs = [];
  for (output_config of config.output) {
    helper.logger.log("Initialize Output "+output_config.mode);
    this.outputs.push(new output[String(output_config.mode)](output_config));
  }

  // augmentations
  this.augmentations = [];
  for (augmentation_config of config.augmentation) {
    this.augmentations.push(new augmentation[String(augmentation_config.type)](augmentation_config));
  }

  // work with the inputs
  for (i of this.inputs) {
    if (typeof i.pullIntervall !== "undefined" && i.pullIntervall>0) {
        var _this = this;
        setInterval(function(){
           i.get().then((res) => {
             // do augmentations
             for (a of _this.augmentations) {
               a.apply(res);
             }
             helper.logger.log(JSON.stringify(res)); // augmented result
           });
         }, i.pullIntervall);
    }
  }

};

// export the class
module.exports = Atom;
