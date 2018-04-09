
function Console(config, atom) {
  if (typeof config.pushIntervall !== "undefined" && config.pushIntervall>0) {
      var a = atom;
      setInterval(function(){
         console.log(a.get());
       }, config.pushIntervall);
  }

}

module.exports = Console;
