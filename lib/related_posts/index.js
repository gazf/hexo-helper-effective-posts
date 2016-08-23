var config = require('./config');
var model = require('./model');
var renderer = require('./renderer');

function extend(base, overide){
  var tmp = {};
  for(var key in base) tmp[key] = base[key];
  for(var key in overide) tmp[key] = overide[key];
  return tmp;
}

function run(hexo, options){
  if (!options) options = {};
  options = extend(config, options);

  if(['date', 'random'].indexOf(options.orderBy) === -1)
    options.orderBy = 'date';

  var posts = model.exec(hexo, options);
  return renderer.run(posts, hexo, options);
}

module.exports = function(options){
  var hexo = this;
  return run(hexo, options);
};
