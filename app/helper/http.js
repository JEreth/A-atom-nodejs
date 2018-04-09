var http = require("http");
//var Atom = require("../atom")
var httpServer;
var routes = {};

// add a new route
var registerRoute = function(route,config) {
  // make routes unique and replace if exists
  routes[route] = config;
}

// start actual server
var startServer = function (config) {
    httpServer = http.createServer(handleRequest);
    httpServer.listen(8100, function(){
        console.log("Server listening on: http://localhost:%s", 8100);
    });
}

// define how to handele request
var handleRequest = function (request, response) {
  var c = routes[request.url.substring(1)]; // get atom route
  if (typeof c !== "undefined" && typeof c.atom == "object") {
      var output = c.atom.get();
      response.setHeader('Content-Type', 'application/json');
      response.writeHead(200);
      response.end(JSON.stringify(output));
      console.log("Http call: "+JSON.stringify(output));
  } else {
    response.writeHead(404);
    response.end("Route not found");
  }
}

module.exports = {
  startServer: startServer,
  handleRequest: handleRequest,
  registerRoute: registerRoute
}
