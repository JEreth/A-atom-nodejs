var fs = require('fs');
var readline = require('readline');

function JsonFile(config) {
  this.inputPath="./input/"
  this.filename = config.id+".json";
}

JsonFile.prototype.getFullFilename = function() {
  return this.inputPath+this.filename;
}

JsonFile.prototype.get = function() {
  return this.readLine(1);
}

JsonFile.prototype.readLine = function(lineNumber) {
  var lineReader = readline.createInterface({
    input: fs.createReadStream(this.getFullFilename())
  });
  var result = "";
  var lineno = 0;
  lineReader.on('line', function (line) {
    if (lineno++ <= lineNumber) {
      console.log(lineno + "   " + line);
    } else {
      lineReader.close();
    }
  });
  console.log(result);
}

module.exports = JsonFile;
