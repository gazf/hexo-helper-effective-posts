
var model = require('./model');
var renderer = require('./renderer');

function main(hexo, options){
  if(['date', 'random'].indexOf(options.orderBy) === -1)
    options.orderBy = 'date';

  var posts = model.exec(hexo, options);
  return renderer.run(posts, hexo, options);
}

module.export = main;
