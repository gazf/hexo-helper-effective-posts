var util = require('../util');

var config = require('./config');
var main = require('./lib/main');

module.exports = function(options){
  var hexo = this;
  
  if(!options) options = {};
  options = util.extend(config, options);
  
  return main(hexo, options);
};
