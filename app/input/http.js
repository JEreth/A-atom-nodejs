var request = require('request');
var helper = require('../helper');

function Http(config) {
  this.url = config.url;
  if (typeof config.pullIntervall !== "undefined" && config.pullIntervall>0) {
    this.pullIntervall = config.pullIntervall;
  }

  // init pull intervall
  /*if (typeof config.pullIntervall !== "undefined" && config.pullIntervall>0) {
       setInterval(function(){ this.get(); }, config.pullIntervall);
  }*/
}

// get url input
Http.prototype.get = function() {
  let url = this.url;
  return new Promise(function(resolve, reject) {
    request(url, function (error, response, body) {
      if (error) {
        reject(error);
      } else {
        helper.logger.log(body);
        resolve(body);
      }
    });
  });
}

module.exports = Http;
