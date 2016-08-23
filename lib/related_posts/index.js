var config = require('./config');
var util = require('./util');
var relation = require('./relation');
var renderer = require('./renderer');

function exec(hexo, options){
  if (!options) options = {};
  options = util.extend(config, options);

  if(['date', 'random'].indexOf(options.orderBy) === -1)
    options.orderBy = 'date';

  var posts = relation.getPosts(hexo, options);
  return renderer.render(posts, hexo, options);
}

module.exports.exec = exec;
