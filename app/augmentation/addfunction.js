var functions = require('./functions');

// expect parameter [fieldname, generator]
function AddFunction(config) {
  this.config = config;
}

AddFunction.prototype.run = function(atom) {
  return functions[this.config.parameters[1]].run(atom);
}

module.exports = AddFunction;
