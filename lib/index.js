
module.exports.related_posts = function(options){
  var hexo = this;
  var module = require('./related_posts/');
  return module.exec(hexo, options);
};
