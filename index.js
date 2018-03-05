var fs = require('fs');
var http = require("http");

var connectors = require('./connector')

// read config file
var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

// settings
if('settings' in config){
  // nothing here yet
}

// parse atoms
for (atom of config.atoms) {
  connectors.jsonfile.init(atom);
  connectors.jsonfile.get();
}
