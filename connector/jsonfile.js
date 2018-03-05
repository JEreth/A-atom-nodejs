var inputPath="./input/"
var filename = "";
var fs = require('fs');
var readline = require('readline');

/**
 * Get full filename of input
 */
function getFullFilename() {
  return inputPath+filename;
}

function init (atom) {
    filename = atom.id+".json";
}

function test() {
  return inputPath+filename;
}

function get() {
  return readLine(1);
}

function readLine(lineNumber) {
  var lineReader = readline.createInterface({
    input: fs.createReadStream(getFullFilename())
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

module.exports = {
  init: init,
  test: test,
  get: get
}
