var fs = require('fs');
var readline = require('readline');
var helper = require('../helper');

function JsonFile(config) {
  this.inputPath= (typeof config.inputPath !== "undefined") ? config.inputPath : "./input/"
  this.filename = config.filename;
  if (typeof config.pullIntervall !== "undefined" && config.pullIntervall>0) {
    this.pullIntervall = config.pullIntervall;
  }
  // init pull intervall
  /*if (typeof config.pullIntervall !== "undefined" && config.pullIntervall>0) {
       setInterval(function(){
         //this.get();
         console.log(getFullFilename());
       }, config.pullIntervall);
  }*/

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
      result = JSON.parse(result);
      resolve(result);
    })
    .on('error', function (err) {
      reject(err);
    })
  });
}

module.exports = JsonFile;
