var fs = require('fs');
var Atom = require("./app/atom.js");
var helper = require("./app/helper");

// read config file
var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
helper.logger.initLogger(config);

// parse atoms
var atoms = [];
for (atomconfig of config.atoms) {
  atoms.push(new Atom(atomconfig));
}

// start the http server (global for different uses)
helper.http.startServer();
