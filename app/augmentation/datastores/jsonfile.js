var fs = require('fs');
var os = require("os");

module.exports = {
    save: function (dataset,parameters) {
      if (typeof parameters[1] !== "undefined") {
        var target = (typeof parameters[2] !== "undefined") ? parameters[2] : "./output/"
        target += parameters[1];
        fs.appendFile(target, JSON.stringify(dataset) + os.EOL, function(err) {
            if(err) {
                // something went southwards
            }
        });
      }
    }
}
