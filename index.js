var fs = require('fs');
var http = require("http");
var Atom = require("./app/atom.js");

var atoms = [];
var debug = false;

// read config file
var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

// settings
if('settings' in config){
  debug = config.settings.debug;
}

// parse atoms
for (atomconfig of config.atoms) {
  atoms.push(new Atom(atomconfig, debug))
}
