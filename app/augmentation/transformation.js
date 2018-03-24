var transformations = require('./transformations');

// expect parameter [newfieldname, method, oldfieldname, other parameters]
function Transformation(config) {
  this.config = config;
}

Transformation.prototype.apply = function(dataset) {
  var parameters = [];
  dataset[this.config.parameters[0]] = transformations[this.config.parameters[1]].value(dataset,this.config.parameters);
}

module.exports = Transformation;
