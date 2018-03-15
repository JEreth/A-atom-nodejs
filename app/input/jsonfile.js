var fs = require('fs');
var readline = require('readline');

function JsonFile(config) {
  this.inputPath= (typeof config.inputPath !== "undefined") ? config.inputPath : "./input/"
  this.filename = config.filename;
}

JsonFile.prototype.getFullFilename = function() {
  return this.inputPath+this.filename;
}

JsonFile.prototype.get = function() {
  return this.readLine(1);
}

JsonFile.prototype.readLine = function(lineNumber) {
  var inputObject = this;
  return new Promise(function(resolve, reject) {
    var lineReader = readline.createInterface({
      input: fs.createReadStream(inputObject.getFullFilename())
    });
    var result = "";
    var lineno = 1;
    lineReader.on('line', function (line) {
      if (lineno++ <= lineNumber) {
        result = line;
      } else {
        lineReader.close();
      }
    }).on('close', function () {
      helper.logger.log(result);
      resolve(result);
    })
    .on('error', function (err) {
      reject(err);
    })
  });
}

module.exports = JsonFile;
