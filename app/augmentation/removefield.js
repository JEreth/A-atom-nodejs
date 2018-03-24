// expect parameter [fieldname, generator]
function RemoveField(config) {
  this.config = config;
}

RemoveField.prototype.apply = function(dataset) {
  delete dataset[this.config.parameters[0]];
}

module.exports = RemoveField;
