var generator = require('./generator');

// expect parameter [fieldname, generator]
function AddField(config) {
  this.config = config;
}

AddField.prototype.apply = function(dataset) {
  dataset[this.config.parameters[0]] = generator[this.config.parameters[1]].value();
}

module.exports = AddField;
