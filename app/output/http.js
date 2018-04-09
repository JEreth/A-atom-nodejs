var helper = require("../helper");

function Http(config, atom) {
  helper.logger.log("Init HTTP route: "+config.route);
  helper.http.registerRoute(config.route,{
    atom: atom
  });
}

module.exports = Http;
