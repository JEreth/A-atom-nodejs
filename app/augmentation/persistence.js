var datastores = require('./datastores');

// expect parameter [newfieldname, method, oldfieldname, other parameters]
function Persistence(config) {
  this.config = config;
}

Persistence.prototype.apply = function(dataset) {
  datastores[this.config.parameters[0]].save(dataset,this.config.parameters);
}

module.exports = Persistence;
