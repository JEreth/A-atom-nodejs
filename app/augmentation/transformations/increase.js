module.exports = {
    value: function (dataset,parameters) {
      return parseFloat(dataset[parameters[2]])+parseFloat(parameters[3]);
    }
}
