// prints log information if debug is enabled
var debug = false;

module.exports = {
  initLogger: (config) => {
    if (typeof config.settings.debug !== "undefined") {
      debug=config.settings.debug;
    }
  },
  log: (msg) => {
    if (debug) {
      console.log("[DEBUG "+new Date().toLocaleString()+"] "+msg);
    }
  },
}
